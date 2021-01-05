import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js 101</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col justify-center min-h-screen'>
        <img
          className='w-24 m-auto my-4 sm:w-auto'
          alt='Ihatetomatoes'
          src='/assets/img_logo.svg'
        />
        <h1 className='mx-auto text-4xl font-bold'>Welcome to Next.js 101!</h1>
      </main>
    </div>
  );
}
