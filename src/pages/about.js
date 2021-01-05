import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Us Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col justify-center min-h-screen'>
        <img
          className='w-24 m-auto my-4 sm:w-auto'
          alt='Ihatetomatoes'
          src='/assets/img_logo.svg'
        />
        <h1 className='mx-auto text-4xl font-bold'>Welcome to About Page</h1>
        <Link href='/'>
          <a className='mx-auto'>Go Back Home</a>
        </Link>
      </main>
    </div>
  );
}
