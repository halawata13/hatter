import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getArticles } from '../services/article.service';
import { Article, categories, Category, types } from '../services/article.type';
import { Header } from "../layouts/header";
import { Main } from "../layouts/main";
import { Page } from "../layouts/page";

interface Props {
  articles: Article[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // const articles = await getArticles('it', 'entrylist');
  return { props: { articles: [] } };
};

const Home: NextPage<Props> = props => {

  return (
    <Page>
      <Header />
      <Main categories={categories} types={types} articles={props.articles} />
    </Page>
  );
};

export default Home;
