import Head from 'next/head'
 
function IndexPage({children}) {
  return (
    <div>
      <Head>
        <title>{children}</title>
      <meta property="og:title" content="With our program, you can get funded up to £1,000,000 with up to a 90% profit split. Unlock Your Trading Potential with Our Leading Proprietary   Trading   Firm." key="title" />      
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>

    </div>
  )
}
 
export default IndexPage