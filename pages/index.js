import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecom Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ecom Store
        </h1>

        <p className={styles.description}>
          Just another ecom store
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="https://nextjs.org/docs">
              <img src="/images/silkshirt.jpg" alt="Chloe Silk Shirt" />
              <h3>Chloe silk shirt</h3>
              <p>$20.00</p>
              <p>This multicoloured Chloé paisley print silk shirt is crafted with a point collar, long sleeves and mother-of-pearl button fastenings. Just like the shapes upon this ornately patterned piece, we're finding a way to weave this Chloé shirt into every outfit.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="https://nextjs.org/learn">
              <img src="/images/marine.jpg" alt="Marine Serre Turtleneck" />
              <h3>Marine Serre Turtleneck</h3>
              <p>$10.00</p>
              <p>This light pink Marine Serre crescent moon print turtleneck top is designed with a high neck to a stretch fit and features long sleeves and all-over signature patterning. Suffice to say, we were over the moon when we saw this Marine Serre top.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="https://github.com/vercel/next.js/tree/master/examples"            >
              <img src="/images/denim.jpg" alt="Bottega Veneta Denim shirt" />
              <h3>Bottega Veneta Denim shirt</h3>
              <p>$10.00</p>
              <p>True to form from a designer with a particularly keen interest in geometry, Daniel Lee designs this Bottega Veneta shirt with an angular patch pocket. This pure-cotton denim style is washed in deep indigo and finished with contrast topstitching.</p>
            </a>
          </li>

        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
