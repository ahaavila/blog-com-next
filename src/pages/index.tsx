import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FiCalendar, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Blog com Next</title>
      </Head>
      <main className={styles.contentContainer}>
        <div className={styles.contentLogo}>
          <img src="/logo.svg" alt="logo" />
        </div>

        <div>
          <div className={styles.contentPost}>
            <h2 className={styles.title}>Como utilizar Hooks</h2>
            <p className={styles.subtitle}>
              Pensando em sincronização em vez de ciclos de vida.
            </p>
            <div>
              <FiCalendar className={styles.icon} />
              <span>15 Mar 2021</span>
              <FiUser className={styles.icon} />
              <span>Joseph Oliveira</span>
            </div>
          </div>
          <div className={styles.contentPost}>
            <h2 className={styles.title}>Criando um app CRA do zero</h2>
            <p className={styles.subtitle}>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App
            </p>
            <div>
              <FiCalendar className={styles.icon} />
              <span>19 Abr 2021</span>
              <FiUser className={styles.icon} />
              <span>Danilo Vieira</span>
            </div>
          </div>
          <div className={styles.contentPost}>
            <h2 className={styles.title}>Como utilizar Hooks</h2>
            <p className={styles.subtitle}>
              Pensando em sincronização em vez de ciclos de vida.
            </p>
            <div>
              <FiCalendar className={styles.icon} />
              <span>15 Mar 2021</span>
              <FiUser className={styles.icon} />
              <span>Joseph Oliveira</span>
            </div>
          </div>
          <div className={styles.contentPost}>
            <h2 className={styles.title}>Criando um app CRA do zero</h2>
            <p className={styles.subtitle}>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App
            </p>
            <div>
              <FiCalendar className={styles.icon} />
              <span>19 Abr 2021</span>
              <FiUser className={styles.icon} />
              <span>Danilo Vieira</span>
            </div>
          </div>
          <div className={styles.contentPost}>
            <h2 className={styles.title}>Como utilizar Hooks</h2>
            <p className={styles.subtitle}>
              Pensando em sincronização em vez de ciclos de vida.
            </p>
            <div>
              <FiCalendar className={styles.icon} />
              <span>15 Mar 2021</span>
              <FiUser className={styles.icon} />
              <span>Joseph Oliveira</span>
            </div>
          </div>
          <p className={styles.loadPost}>Carregar mais posts</p>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
