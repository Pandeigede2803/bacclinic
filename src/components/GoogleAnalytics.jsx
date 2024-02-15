import Script from "next/script";

// Menggunakan JavaScript biasa, tanpa anotasi tipe TypeScript
const GoogleAnalytics = ({ ga_id }) => (
  <>    
    <Script 
      src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`} 
      strategy="afterInteractive" 
      async 
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga_id}');
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;
