import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getArticles } from '../services/article.service';
import { Article, Category } from '../services/article.type';

interface Props {
  articles: Article[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const articles = await getArticles(Category.IT);
  return { props: { articles } };
};

const Home: NextPage<Props> = props => {
  return (
    <ul>
      {props.articles.map((article, index) => (
        <li key={index}>{article.title}{article.date}</li>
      ))}
    </ul>
  );
};

export default Home;
