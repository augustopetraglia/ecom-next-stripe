import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import products from '../products.json'
import { useCart } from '../hooks/use-cart'


export default function Home() {
  const { 
    subTotal,
    totalItems,
    checkout,
    addToCart 
  } = useCart();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecom Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Simple ecom store with Stripe
        </p>
        
        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, price, description, image } = product;
            return(
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a href="https://nextjs.org/docs">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <p>{description}</p>
                  </a>
                </Link>
                  <p>
                    <button className={styles.button} onClick={() => {
                      addToCart({
                        id
                      })
                    }}>Add To Cart</button>
                  </p>
              </li>
            )
          })}
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
