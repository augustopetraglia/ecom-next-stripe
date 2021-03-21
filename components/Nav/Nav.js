import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import  { useCart } from "../../hooks/use-cart";
import styles from './Nav.module.css';

const Nav = () => {
  const { subTotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>Ecom Store</p>
      <p className={styles.navCart}>
      <Link href="/cart">
          <a>
            <FaShoppingCart /> ${subTotal.toFixed(2)}
          </a>
        </Link>
      </p>
    </nav>
  )
}

export default Nav;