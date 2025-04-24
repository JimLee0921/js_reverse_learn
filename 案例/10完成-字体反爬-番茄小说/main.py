# -*- coding: UTF-8 -*-
# author: LT
# date: 2025/04/18
"""
番茄小说字体反爬
网址: https://fanqienovel.com/reader/7452571150363656728?enter_from=page
因为实际字符（例如汉字）unicode 映射到了 Unicode 的私人使用区，而不是直接使用标准汉字的 Unicode 码点
需要使用 FontCreator 然后使用 AI ocr 识别
"""
import math
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont


def extract_chars_from_font(font_path: str, font_size: int = 50, cell_size: int = 80, columns: int = 10) -> list[str]:
    """
    从给定字体文件中渲染所有可见字符图像，并使用 OCR 自动识别出字符内容。
    支持 .woff2/.ttf 等字体格式。

    :param font_path: 字体文件路径
    :param font_size: 字体绘制大小（影响识别精度）
    :param cell_size: 每个字符单元格大小
    :param columns: 每行绘制的字符数
    :return: 按 glyph 顺序排列的字符列表（识别成功的）
    """
    # 加载字体
    font = TTFont(font_path)
    font.flavor = None  # 移除 woff2 封装（如有）
    converted_path = "converted_temp.ttf"
    font.save(converted_path)

    # 获取所有 glyph（跳过第一个 .notdef）
    glyph_order = font.getGlyphOrder()[1:]
    total_chars = len(glyph_order)
    rows = math.ceil(total_chars / columns)

    # 创建画布
    image = Image.new("RGB", (columns * cell_size, rows * cell_size), "white")
    draw = ImageDraw.Draw(image)
    ttf_font = ImageFont.truetype(converted_path, font_size)

    # 绘制每个字符
    for i, glyph_name in enumerate(glyph_order):
        row, col = divmod(i, columns)
        x = col * cell_size
        y = row * cell_size
        try:
            char = font.getBestCmap().inverse[glyph_name]
        except Exception:
            char = chr(0xE000 + i)  # fallback: 私有区顺序
        draw.text((x + 10, y + 10), char, fill="black", font=ttf_font)

    # 保存图像临时文件
    image_path = "font_preview_temp.png"
    image.save(image_path)

    # 使用 AI ocr 识别后得到 chars
    chars = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', '的', '一', '是', '了', '我', '不', '人', '在',
        '他', '有', '这', '个', '上', '们', '来', '到', '时', '大',
        '地', '为', '子', '中', '你', '说', '生', '国', '年', '着',
        '就', '那', '和', '要', '她', '出', '也', '得', '里', '后',
        '自', '以', '会', '家', '可', '下', '而', '过', '天', '去',
        '能', '对', '小', '多', '然', '于', '心', '学', '么', '之',
        '都', '好', '看', '起', '发', '当', '没', '成', '只', '如',
        '事', '把', '还', '用', '第', '样', '道', '想', '作', '种',
        '开', '美', '总', '从', '无', '情', '已', '面', '最', '女',
        '但', '现', '前', '些', '所', '同', '日', '手', '又', '行',
        '意', '动', '方', '期', '它', '头', '经', '长', '儿', '回',
        '位', '分', '爱', '老', '因', '很', '给', '名', '法', '问',
        '斯', '知', '世', '什', '两', '次', '使', '身', '者', '被',
        '高', '已', '亲', '其', '进', '此', '话', '常', '与', '活',
        '正', '感', '见', '明', '问', '力', '理', '尔', '点', '文',
        '几', '定', '本', '公', '特', '做', '外', '孩', '相', '西',
        '果', '走', '将', '月', '十', '实', '向', '声', '车', '全',
        '信', '重', '三', '机', '工', '物', '气', '每', '并', '别',
        '真', '打', '太', '新', '比', '才', '便', '夫', '再', '书',
        '部', '水', '像', '眼', '等', '体', '却', '加', '电', '主',
        '界', '门', '利', '海', '受', '听', '表', '德', '少', '克',
        '代', '员', '许', '稳', '先', '口', '由', '死', '安', '写',
        '性', '马', '光', '白', '或', '住', '难', '望', '教', '命',
        '花', '结', '乐', '色', '更', '拉', '东', '神', '记', '处',
        '让', '母', '父', '应', '直', '字', '场', '平', '报', '友',
        '关', '放', '至', '张', '认', '接', '告', '入', '笑', '内',
        '英', '军', '候', '民', '岁', '往', '何', '度', '山', '觉',
        '路', '带', '万', '男', '边', '风', '解', '叫', '任', '金',
        '快', '原', '吃', '妈', '变', '通', '师', '立', '象', '数',
        '四', '失', '满', '战', '远', '格', '士', '音', '轻', '目',
        '条', '呢'
    ]

    # 清理临时文件
    # os.remove(converted_path)
    # os.remove(image_path)

    return chars


import unicodedata
from lxml import html


class FontDecoder:
    """
    用于解析字体文件中映射的 Unicode 私有区字符，并根据真实字符列表进行解码还原。
    支持从字体文件中自动识别字符（通过图像 + OCR），或使用用户提供的字符顺序表。
    """

    def __init__(self, font_path: str, real_chars: list[str] = None):
        """
        初始化 FontDecoder 类。
        如果 real_chars 未提供，则会自动渲染字体图像并使用 OCR 识别字符顺序。

        :param font_path: 字体文件路径（.woff2 或 .ttf）
        :param real_chars: 按照字体顺序排列的真实字符列表（可选）
        """
        self.font_path = font_path
        self.real_chars = real_chars or extract_chars_from_font(font_path)
        self.converted_path = "converted.ttf"
        self.result_dict = {}  # 形如 {'\ue53b': '萱'}
        self._load_font_and_build_mapping()

    def _is_normal_unicode(self, char: str) -> bool:
        """
        判断字符是否是标准 Unicode 编码（非私有区或控制符）。

        :param char: 单个字符
        :return: 如果是标准字符返回 True，否则返回 False
        """
        try:
            unicodedata.name(char)
            return True
        except ValueError:
            return False

    def _load_font_and_build_mapping(self):
        """
        加载字体并构建 PUA 字符（如 \ue53b）到实际可见字符（如 '萱'）的映射字典。
        """
        font = TTFont(self.font_path)
        font.flavor = None
        font.save(self.converted_path)

        glyph_order = font.getGlyphOrder()[1:]  # 跳过 .notdef
        print(glyph_order)
        cmap = {}
        for table in font["cmap"].tables:
            if table.isUnicode():
                cmap.update(table.cmap)
        print(cmap)
        glyphname_to_unicode = {v: chr(k) for k, v in cmap.items()}
        print(glyphname_to_unicode)
        font_dict = {
            i: glyphname_to_unicode.get(g, "")
            for i, g in enumerate(glyph_order)
            if glyphname_to_unicode.get(g)
        }

        self.result_dict = {
            value: self.real_chars[key]
            for key, value in font_dict.items()
            if key < len(self.real_chars)
        }
        print(self.result_dict)

    def decode_text(self, text: str) -> str:
        """
        替换文本中的私有区字符为真实字符。

        :param text: 混淆原始文本
        :return: 解码后的文本
        """
        return ''.join(self.result_dict.get(ch, ch) for ch in text)

    def decode_html_file(self, html_file_path: str,
                         xpath_expr: str = '//div[@class="muye-reader-content noselect"]//p/text()') -> list[str]:
        """
        加载 HTML 文件并提取目标文本节点，自动进行字体解码替换。

        :param html_file_path: HTML 文件路径
        :param xpath_expr: XPath 表达式，用于提取目标混淆段落（默认是 MuYe 小说正文）
        :return: 解码后文本列表
        """
        with open(html_file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
            tree = html.fromstring(html_content)
            return [self.decode_text(item) for item in tree.xpath(xpath_expr)]


if __name__ == '__main__':
    decoder = FontDecoder("dc027189e0ba4cd-500.woff2")  # 不传 chars 就会自动识别！

    lines = decoder.decode_html_file("page.html")
    for line in lines:
        print(line)
