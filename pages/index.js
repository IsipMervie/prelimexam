import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Mervie V. Isip, a 21-year-old Information Technology student from Apalit, Pampanga.
I'm currently in my second year at the University of the Assumption, where I'm thoroughly enjoying my course.
Coding and exploring various aspects of IT have become my passions alongside playing the guitar and watching movies.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}