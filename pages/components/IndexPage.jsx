import Head from 'next/head';
import Script from 'next/script';

function IndexPage({ children }) {
  return (
      <Head>
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C9HBH2F8Z5"
          strategy="afterInteractive"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C9HBH2F8Z5');
            `,
          }}
        />

      </Head>
  );
}

export default IndexPage;
