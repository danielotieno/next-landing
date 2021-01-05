import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

function Home() {
  return (
    <Layout>
      <div className='min-h-screen mx-auto md:max-w-3xl md:px-4'>
        <Head>
          <title>Next.js 101</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='p-4 bg-white'>
          <Hero />
        </main>
      </div>
    </Layout>
  );
}

export default Home;
