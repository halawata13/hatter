import { Article, Category, Type } from './article.type';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { DateTime } from 'luxon';

export const getArticles = async (category: Category, type: Type): Promise<Article[]> => {
  const response = await axios.get<string>(`https://b.hatena.ne.jp/${type}/${category}.rss`);
  const parser = new XMLParser();
  const json = parser.parse(response.data);
  const items: any[] = json['rdf:RDF']?.item ?? [];

  return items.map(item => ({
    title: hexNumRefToString(item.title),
    link: String(item.link),
    description: hexNumRefToString(item.description),
    date: DateTime.fromISO(item['dc:date']).toFormat('yyyy/MM/dd'),
    imageUrl: String(item['hatena:imageurl']),
  }));
};

export const getCategoryLabel = (category: Category) => {
  switch (category) {
    case 'general':
      return '一般';
    case 'social':
      return '世の中';
    case 'economics':
      return '政治と経済';
    case 'life':
      return '暮らし';
    case 'knowledge':
      return '学び';
    case 'it':
      return 'テクノロジー';
    case 'fun':
      return 'おもしろ';
    case 'entertainment':
      return 'エンタメ';
    case 'game':
      return 'アニメとゲーム';
  }
};

const hexNumRefToString = (hexNumRef: string) => {
  return hexNumRef.replace(/&#x([0-9a-f]+);/ig, (_, $1) => {
    return String.fromCharCode(Number('0x' + $1));
  });
};
