# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/18
"""
字体反爬联系
网址：https://www.xuanzhi.com/zhaopaigua
pip install fonttools
"""
import re
from io import BytesIO
from typing import Dict, Optional
from lxml import html
import requests
from fontTools.ttLib import TTFont
import xml.etree.ElementTree as ET


class FontDecoder:
    """
    传入文件进行解析
    三种解析方式
    """

    def __init__(self, font_path: str):
        """
        初始化解码器，传入字体路径（.woff/.ttf）
        """
        self.font_path = font_path
        self.mapping: Dict[int, str] = {}

    def save_as_xml(self, xml_path: str = "font.xml"):
        """
        将字体文件另存为 XML
        """
        font = TTFont(self.font_path)
        font.saveXML(xml_path)
        print(f"[INFO] Saved font as XML to: {xml_path}")

    def extract_from_xml_by_regex(self, xml_path: str = "font.xml") -> Dict[int, str]:
        """
        使用正则表达式从 XML 中提取字体映射
        """
        with open(xml_path, "r", encoding="utf-8") as f:
            font_code = f.read()

        cmap_matches = re.findall(r'<map code="(.*?)" name="(.*?)"/>', font_code)
        cmap_dict = {name: chr(eval(code)) for code, name in cmap_matches}

        glyph_matches = re.findall(r'<GlyphID id="(\d+)" name="(.*?)"/>', font_code)
        glyph_dict = {name: int(glyph_id) - 1 for glyph_id, name in glyph_matches if name != ".notdef"}

        font_dict = {glyph_dict[name]: cmap_dict[name]
                     for name in glyph_dict.keys() & cmap_dict.keys()}

        self.mapping = font_dict
        print(font_dict)
        return font_dict

    def extract_from_xml_by_etree(self, xml_path: str = "font.xml") -> Dict[int, str]:
        """
        使用 ElementTree 模块从 XML 中提取字体映射
        """
        tree = ET.parse(xml_path)
        root = tree.getroot()

        # 提取 cmap 映射 name → char
        cmap_dict = {}
        for cmap in root.findall(".//cmap//map"):
            code = cmap.attrib["code"]
            name = cmap.attrib["name"]
            cmap_dict[name] = chr(eval(code))

        # 提取 GlyphID id → name
        glyph_dict = {}
        for glyph in root.findall(".//GlyphOrder//GlyphID"):
            glyph_id = int(glyph.attrib["id"])
            name = glyph.attrib["name"]
            if name != ".notdef":
                glyph_dict[name] = glyph_id - 1

        font_dict = {glyph_dict[name]: cmap_dict[name]
                     for name in glyph_dict.keys() & cmap_dict.keys()}

        self.mapping = font_dict
        return font_dict

    def extract_from_font(self) -> Dict[int, str]:
        """
        使用 fontTools API 直接从字体中提取映射
        """
        font = TTFont(self.font_path)
        # 1. 获取字形顺序
        glyph_order = font.getGlyphOrder()

        # 2. 提取字符映射表 (cmap)只处理Unicode编码
        cmap = {}
        for table in font["cmap"].tables:
            if table.isUnicode():
                cmap.update(table.cmap)

        # 3.字形名称到字符的映射
        glyphname_to_char = {
            glyph_name: chr(unicode_val)
            for unicode_val, glyph_name in cmap.items()
        }

        # 4. 构建最终的索引到字符的映射
        font_dict = {}
        # 跳过第一个字形（通常是 .notdef），因为不对应实际字符
        for index, glyph_name in enumerate(glyph_order[1:], start=0):
            if glyph_name in glyphname_to_char:
                font_dict[index] = glyphname_to_char[glyph_name]

        self.mapping = font_dict
        return font_dict

    def decrypt(self, text: str) -> str:
        """
        解密混淆文本，把字符映射回原始数字/文字
        """
        reverse_map = {v: str(k) for k, v in self.mapping.items()}
        return ''.join(reverse_map.get(char, char) for char in text)


class XuanZhiSpider:
    def __init__(self):
        self.session = requests.session()
        self.session.headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'referer': 'https://www.xuanzhi.com/zhaopaigua/hsj150'
        }
        self.font_url = ""
        self.html_content = ""
        self.items = []
        self.font_dict: Dict[int, str] = {}

    def _extract_font_mapping_from_bytes(self, font_bytes: bytes):
        """
        解析字体加密字典
        :param font_bytes:
        :return:
        """
        font = TTFont(BytesIO(font_bytes))
        glyph_order = font.getGlyphOrder() # 使用 getGlyphOrder 可以按列表获取并舍弃无用字符

        cmap = {}
        for table in font["cmap"].tables:
            if table.isUnicode():
                cmap.update(table.cmap)

        glyphname_to_char = {
            glyph_name: chr(unicode_val)
            for unicode_val, glyph_name in cmap.items()
        }

        for idx, glyph_name in enumerate(glyph_order[1:], start=0):
            if glyph_name in glyphname_to_char:
                self.font_dict[idx] = glyphname_to_char[glyph_name]

    def _get_font_dict(self):
        """
        获取字体加密字典
        :return:
        """
        response = self.session.get(self.font_url)
        self._extract_font_mapping_from_bytes(response.content)

    def get_items(self):
        """
        请求构造响应结果
        :return:
        """
        response = self.session.get('https://www.xuanzhi.com/zhixiashi-tj/zhaopaigua/hsj150/3')
        self.html_content = response.text
        self._parse_html()
        self._get_font_dict()
        for item in self.items:
            item['m'] = self._decrypt_m(item['encrypted_m'])

    def _parse_html(self):
        """
        解析返回内容，包括数据和font_url
        :return:
        """
        items = []
        tree = html.fromstring(self.html_content)
        for item in tree.xpath('//div[contains(@class, "common-list-item")]'):
            title = item.xpath('.//a[contains(@class, "list-item-title")]/@title')
            region = item.xpath('.//div[contains(@class, "list-intro-district")]/text()')
            land_type = item.xpath('.//div[contains(@class, "list-intro-type")]/text()')
            company = item.xpath('.//div[contains(@class, "list-intro-company")]/text()')
            code = item.xpath('.//div[contains(@class, "list-time-number")]/text()')
            publish_time = item.xpath('.//div[contains(@class, "list-time-text") and contains(text(), "推出")]/text()')
            encrypted_m = item.xpath('.//div[contains(@class, "item-pay-info")]//m[@class="xz-cf"]/text()')

            items.append({
                "title": title[0].strip() if title else "",
                "region": region[0].strip() if region else "",
                "land_type": land_type[0].strip() if land_type else "",
                "company": company[0].strip() if company else "",
                "code": code[0].strip() if code else "",
                "publish_time": publish_time[0].strip() if publish_time else "",
                "encrypted_m": encrypted_m[0].strip() if encrypted_m else ""
            })

        font_url = re.search(r"https://static\.xuanzhi\.com/confuse/fonts/.*?/font\.woff", self.html_content)
        self.font_url = font_url.group() if font_url else ""
        self.items = items

    def _decrypt_m(self, text: str) -> str:
        """
        解密数据
        :param text:
        :return:
        """
        reverse_map = {v: str(k) for k, v in self.font_dict.items()}
        return ''.join(reverse_map.get(char, char) for char in text)

    def run(self):
        self.get_items()
        for item in self.items:
            print(f"{item['title']} | {item['region']} | {item['land_type']} | {item['company']} | "
                  f"{item['code']} | {item['publish_time']} | 亩数: {item['m']}")


if __name__ == "__main__":
    # decoder = FontDecoder("font.woff")
    #
    # # 保存为 XML
    # decoder.save_as_xml("font.xml")
    # encrypted_text = "电接.4利"
    # # 方式一：使用正则提取
    # decoder.extract_from_xml_by_regex("font.xml")
    # print(f"[正则解密] {encrypted_text} →", decoder.decrypt(encrypted_text))
    # # 方式二：使用 xml.etree 解析
    # decoder.extract_from_xml_by_etree("font.xml")
    # print(f"[etree解密] {encrypted_text} →", decoder.decrypt(encrypted_text))

    # # 方式三：直接读取字体对象
    # decoder.extract_from_font()
    # print(f"[字体直接解析] {encrypted_text} →", decoder.decrypt(encrypted_text))
    spider = XuanZhiSpider()
    spider.run()
