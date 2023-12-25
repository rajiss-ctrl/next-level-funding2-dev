// import Head from 'next/head';
// import Script from 'next/script';

// function IndexPage({ children }) {
//   return (
//     <div>
//     <Head>
//     {children}
//      </Head>
//     <Script
//       src="https://www.googletagmanager.com/gtag/js?id=G-C9HBH2F8Z5"
//       strategy="afterInteractive"
//     />
//     <Script
//       id="ga-script"
//       strategy="afterInteractive"
//       dangerouslySetInnerHTML={{
//         __html: `
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-C9HBH2F8Z5');
//         `,
//       }}
//     />

// <Script
//       dangerouslySetInnerHTML={{
//         __html: `
//          !function(f,b,e,v,n,t,s)
//          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//          n.queue=[];t=b.createElement(e);t.async=!0;
//          t.src=v;s=b.getElementsByTagName(e)[0];
//          s.parentNode.insertBefore(t,s)}(window, document,'script',
//          'https://connect.facebook.net/en_US/fbevents.js');
//          fbq('init', '1458471951396719');
//          fbq('track', 'PageView');
//       `,
//       }}
//     />
//     <noscript>
//       <img
//         height="1"
//         width="1"
//         style={{ display: 'none' }}
//         src="https://www.facebook.com/tr?id=1458471951396719&ev=PageView&noscript=1"
//       />
//     </noscript>
    
//   </div>
//   );
// }

// export default IndexPage;



import Head from 'next/head';
import Script from 'next/script';

function IndexPage({ children }) {
  return (
    <div>
      <Head>
        {children}
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C9HBH2F8Z5"
        strategy="afterInteractive"
      />
      <Script
        id="ga-script"
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
<Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1458471951396719');
      fbq('track', 'PageView');
    `.replace(/\n/g, ''), // Remove line breaks to avoid escape sequence issues
  }}
/>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=1458471951396719&ev=PageView&noscript=1`}  // Replace with your actual Pixel ID
        />
      </noscript>
    </div>
  );
}

export default IndexPage;

