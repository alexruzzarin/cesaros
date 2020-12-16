import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { initGA, logPageView } from '../utils/analytics';

import './_app.css';

const PagerApp = ({ Component, pageProps }) => {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
        <meta name="language" content="pt-br" />
        <title>Césaros Buffet</title>
        <meta
          name="description"
          content="Localizado na região da serra do Rio Grande do Sul, o Césaros Buffet está desde 2000 a servir aos seus clientes as suas especialidades em buffet."
        />
        <meta property="og:title" content="Césaros Buffet" />
        <meta property="og:url" content="http://www.cesaros.com.br" />
        <meta property="og:type" content="restaurant.restaurant" />
        <meta
          property="og:description"
          content="Localizado na região da serra do Rio Grande do Sul, o Césaros Buffet está desde 2000 a servir aos seus clientes as suas especialidades em buffet."
        />
        <meta
          property="og:image"
          content="http://www.cesaros.com.br/images/background/bg-01-xlarge.jpg"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="restaurant:contact_info:street_address"
          content="Rua Dal Canale, 2217"
        />
        <meta
          property="restaurant:contact_info:locality"
          content="Caxias do Sul"
        />
        <meta property="restaurant:contact_info:region" content="RS" />
        <meta
          property="restaurant:contact_info:postal_code"
          content="95020-371"
        />
        <meta
          property="restaurant:contact_info:country_name"
          content="Brasil"
        />
        <meta
          property="restaurant:contact_info:email"
          content="contato&#064;cesaros.com.br"
        />
        <meta
          property="restaurant:contact_info:phone_number"
          content="+55 (54) 3538-9070"
        />
        <meta
          property="restaurant:contact_info:website"
          content="http://www.cesaros.com.br"
        />
        <meta property="restaurant:price_rating" content="2" />
        <meta property="restaurant:category" content="" />
        <meta property="place:location:latitude" content="-29.171317" />
        <meta property="place:location:longitude" content="-51.183841" />
        <meta property="fb:admins" content="1826972544" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@cesarosbuffet" />
        <meta name="twitter:title" content="Césaros Buffet" />
        <meta
          name="twitter:description"
          content="Localizado na região da serra do Rio Grande do Sul, o Césaros Buffet está desde 2000 a servir aos seus clientes as suas especialidades em buffet."
        />
        <meta
          name="twitter:image"
          content="http://www.cesaros.com.br/images/background/bg-01-xlarge.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default PagerApp;
