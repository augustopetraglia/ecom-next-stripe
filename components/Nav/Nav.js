import { FaShoppingCart } from 'react-icons/fa';

import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <p>Ecom Store</p>
      <p>
        <button><FaShoppingCart /> $0.00</button>
      </p>
    </nav>
  )
}

export default Nav;