import Head from 'next/head';

function IndexPage({ children }) {
  return (
    <div>
      <Head>
        <title>{children}</title>
        <meta
          name="NextLevelFunding"
          content="With our program, you can get funded up to £1,000,000 with up to a 90% profit split. Unlock Your Trading Potential with Our Leading Proprietary Trading Firm."
        />
        <meta property="og:title" content={children} />
      </Head>
    </div>
  );
}

export default IndexPage;
