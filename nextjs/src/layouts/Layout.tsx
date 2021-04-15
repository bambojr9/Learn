import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './layouts.module.scss';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({
  children,
  title = 'This is the default title',
}: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Header />

        <div> {children} </div>
        <Footer />
        {/* css   */}
        <div className={styles.text}>day la dong test 1</div>
        <div className={styles.text__2}> text 2</div>
        <div className="text"> text 33</div>

        <style jsx>{`
          .text {
            color: orange;
          }

          /* @media (max-width: 600px) {
            div {
              background: blue;
            }
          } */
        `}</style>
        {/* <style global jsx>{`
          body {
            background: black;
          }
        `}</style> */}
      </body>
    </div>
  );
};
