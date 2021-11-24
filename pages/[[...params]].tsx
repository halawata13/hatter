import type { GetServerSideProps, NextPage } from 'next';
import { Article, categories, Category, Type, types } from '../services/article.type';
import { Header } from "../layouts/header";
import { Main } from "../layouts/main";
import { Page } from "../layouts/page";
import { getArticles } from '../services/article.service';

interface Props {
  articles: Article[];
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const [ category, type ] = (() => {
    const category = ((categories as ReadonlyArray<string>).includes(String(context.params?.[0])) ? String(context.params?.[0]) : 'it') as Category;
    const type = ((types as ReadonlyArray<string>).includes(String(context.params?.[1])) ? String(context.params?.[1]) : 'entrylist') as Type;
    return [category, type];
  })();
  // const articles = await getArticles(category, type);
  // return { props: { articles } };
  return { props: { articles: Array.from(Array(10)).map(() => ({
          title: 'タイトル',
          date: '2021-11-23',
          description: '私も場合もっともその通知順という方の限りが勧めますべき。もとより時間が建設心も毫もその解なりまいかもにできしみるありがも啓発しうですて、少しにはしないましませた。シャツが見つからなけれ事はいよいよ時分がついになけれないた。',
          imageUrl: '',
          link: '',
        })) } };
};

const Articles: NextPage<Props> = props => {

  return (
    <Page>
      <Header />
      <Main categories={categories} types={types} articles={props.articles} />
    </Page>
  );
};

export default Articles;
