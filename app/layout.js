import { Inter } from 'next/font/google'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mia Smart SRL',
  description: 'Serviciu de Reparatii si Instalatii Sanitare',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="../css/bootstrap.min.css"/>
        <link rel="stylesheet" href="../css/fontawesome.min.css"/>
        <link rel="stylesheet" href="../css/magnific-popup.min.css"/>
        <link rel="stylesheet" href="../css/slick.min.css"/>
        <link rel="stylesheet" href="../css/style.css"/>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16761455676"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16761455676');
        </script>
      </head>
      
      <body>
        {children}
      </body>
        
        <Script type="text/javascript" src="../js/vendor/jquery-3.6.0.min.js"/>
        <Script type="text/javascript" src="../js/slick.min.js"/>
        <Script type="text/javascript" src="../js/bootstrap.min.js"/>
        <Script type="text/javascript" src="../js/jquery.magnific-popup.min.js"/>
        <Script type="text/javascript" src="../js/jquery.counterup.min.js"/>
        <Script type="text/javascript" src="../js/jquery-ui.min.js"/>
        <Script type="text/javascript" src="../js/imagesloaded.pkgd.min.js"/>
        <Script type="text/javascript" src="../js/isotope.pkgd.min.js"/>
        <Script type="text/javascript" src="../js/main.js"/>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16761455676"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16761455676');
        </script>
    </html>
  )
}
