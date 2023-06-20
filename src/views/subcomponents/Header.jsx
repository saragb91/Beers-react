import { useContext } from 'react';
import BeersContext from '../PlayerContext';

const Header = () => {
  const { counter } = useContext(BeersContext);

  return (
    <header className='header'>
      <div>
        <img src='/svg/menu.svg' />
        <img src='/svg/logo.svg' />
      </div>
      <div>
        <img src='/svg/search.svg' />
        <div className='cart-container'>
          <img src='/svg/cart.svg' />
          <div className='cart-counter'>
            <p>{counter}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
