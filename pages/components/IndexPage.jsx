import Head from 'next/head';

function IndexPage({ children }) {
  return (
      <Head>
        {children}
      </Head>
  );
}

export default IndexPage;
