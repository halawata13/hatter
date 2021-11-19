import { Article, Category } from './article.type';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { DateTime } from 'luxon';

export const getArticles = async (category: Category): Promise<Article[]> => {
  const response = await axios.get<string>(`https://b.hatena.ne.jp/entrylist/${category}.rss`);
  const parser = new XMLParser();
  const json = parser.parse(response.data);
  const items: any[] = json['rdf:RDF'].item;

  return items.map(item => ({
    title: hexNumRefToString(item.title),
    link: String(item.link),
    description: hexNumRefToString(item.description),
    date: DateTime.fromISO(item['dc:date']).toFormat('yyyy/MM/dd'),
    imageUrl: String(item['hatena:imageurl']),
  }));
};

const hexNumRefToString = (hexNumRef: string) => {
  return hexNumRef.replace(/&#x([0-9a-f]+);/ig, (_, $1) => {
    return String.fromCharCode(Number('0x' + $1));
  });
};
