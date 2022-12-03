import type { GetServerSideProps, NextPage } from 'next';
import { Article, categories, Category, Type, types } from '../services/article.type';
import { Header } from "../layouts/header";
import { Main } from "../layouts/main";
import { Page } from "../layouts/page";
import { getArticles, getCategoryLabel, getTypeLabel } from '../services/article.service';
import Head from 'next/head';

interface Props {
  category: Category;
  type: Type;
  articles: Article[];
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const [ category, type ] = (() => {
    const params = context.params?.params;
    const category = ((categories as ReadonlyArray<string>).includes(String(params?.[0])) ? String(params?.[0]) : 'it') as Category;
    const type = ((types as ReadonlyArray<string>).includes(String(params?.[1])) ? String(params?.[1]) : 'entrylist') as Type;

    return [category, type];
  })();

  const articles = await getArticles(category, type);
  return {
    props: {
      category,
      type,
      articles,
    },
  };
};

const Articles: NextPage<Props> = props => {

  return (
    <>
      <Head>
        <title>{`${getCategoryLabel(props.category)} - ${getTypeLabel(props.type)} | Hatter`}</title>
      </Head>
      <Page>
        <Header categories={categories} />
        <Main categories={categories} types={types} articles={props.articles} />
      </Page>
    </>
  );
};

export default Articles;
