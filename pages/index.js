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
        <p><strong>Introduction</strong><br></br>
Hello, I am Mervie Isip, currently a third-year student in the Bachelor of Science in Information Technology program at the University of the Assumption. My interests are quite varied, including watching, playing musical instruments, and coding. I have a particular fondness for playing the guitar and exploring tutorials related to it. When it comes to food, I have a preference for dishes like sisig and kare-kare. These hobbies and tastes contribute to both my personal fulfillment and professional growth.<br></br>
<br></br>
<strong>Why did I take up IT?</strong><br></br>
I decided to pursue a degree in Information Technology because of my deep interest in technology and its role in fostering innovation. The ever-evolving nature of the IT industry, along with its importance in problem-solving and shaping the future, resonates with my enthusiasm for lifelong learning and advancement. The chance to engage with cutting-edge technologies and contribute to impactful projects was a key motivator for me to choose this field.<br></br>
<br></br>
<strong>What career do I see yourself exploring after graduation?</strong><br></br>
I aim to build a career in software development and cybersecurity. I am especially keen on developing games and websites. My objective is to make meaningful contributions to the industry and grow in a role that leverages my skills and interests effectively.<br></br>
<br></br>
<strong>What do I expect to learn in this subject?</strong><br></br>
I look forward to gaining a thorough understanding of programming and system development. I am eager to acquire both practical skills and theoretical knowledge that will enhance my ability to address complex problems and implement best practices in real-world applications.<br></br>
<br></br>
<strong>What topics I want to be discussed in this subject?</strong><br></br>
I would appreciate it if the subject could cover topics related to successful IT projects with HTML, CSS, Javascript, and more creating websites. These areas are particularly intriguing to me and I believe they will offer valuable insights and greatly contribute to my professional growth.<br></br></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}