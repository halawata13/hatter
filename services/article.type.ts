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
] as const;

export type Category = typeof categories[number];
