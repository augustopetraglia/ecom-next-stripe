import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json'
import { initiateCheckout } from '../lib/payments'

const defaultCart = {
  products: {}
}

export default function Home() {

  const [cart, updateCart] = useState(defaultCart)

  const cartItems = Object.keys(cart.products).map(key => {
    
  })
  console.log("cart es", cart)
  
  function addToCart({ id } = {}) {
    updateCart(prev => {
      let cartState = {...prev};

      if (cartState.products[id]) {
        cartState.products[id].quantity = cartState.products[id].quantity + 1;
      } else {
        cartState.products[id] = {
          id,
          quantity: 1
        }
      }

      return cartState;
    })
  }
  
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

        <p className={styles.description}>
          <strong>Items:</strong> 2
          <br />
          <strong>Total Cost:</strong> $20
          <br />
          <button className={styles.button}>Check Out</button>
        </p>

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, price, description, image } = product;
            return(
              <li key={id} className={styles.card}>
                <a href="https://nextjs.org/docs">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>${price}</p>
                  <p>{description}</p>
                </a>
                <p>
                  <button className={styles.button} onClick={() => {
                    // initiateCheckout({
                    //   lineItems: [
                    //     {
                    //       price: id,
                    //       quantity: 1,
                    //     }
                    //   ]
                    // });
                    addToCart({
                      id
                    })
                  }}>Buy Now</button>
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
