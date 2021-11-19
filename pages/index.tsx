import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getArticles } from '../services/article.service';
import { Article, categories, Category } from '../services/article.type';

interface Props {
  articles: Article[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const articles = await getArticles('it');
  return { props: { articles } };
};

const Home: NextPage<Props> = props => {

  return (
    <>
      <aside></aside>
      <main>
        <ul>
          {props.articles.map((article, index) => (
            <li key={index}>{article.title}{article.date}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
