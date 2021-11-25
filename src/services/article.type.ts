export interface Article {
  title: string;
  link: string;
  linkHost: string;
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
] as const;

export type Category = typeof categories[number];

export const types = [
  'entrylist',
  'hotentry',
] as const;

export type Type = typeof types[number];
