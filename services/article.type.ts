export interface Article {
  title: string;
  link: string;
  description: string;
  date: string;
  imageUrl: string;
}

export const categories = [
  'general',
  'social',
  'economics',
  'life',
  'knowledge',
  'it',
  'fun',
  'entertainment',
  'game',
];

const Categories = [
  'general',
  'social',
  'economics',
  'life',
  'knowledge',
  'it',
  'fun',
  'entertainment',
  'game',
] as const;

export type Category = typeof Categories[number];

export const types = [
  'entrylist',
  'hotentry',
];

export const Types = [
  'entrylist',
  'hotentry',
] as const;

export type Type = typeof Types[number];
