import { useContext } from 'react';
import '../../public/main.css';
import BeersList from './subcomponents/BeersList';
import Footer from './subcomponents/Footer';
import Header from './subcomponents/Header';
import Modal from './subcomponents/Modal';
import BeersContext from './PlayerContext';

function App() {
  const { showModal, setShowModal } = useContext(BeersContext);
  return (
    <>
      <Header />
      <BeersList />
      <Footer />
      {!showModal ? (
        <div className='filter-button-container'>
          <button onClick={() => setShowModal(true)}>
            <div className='filter-button-label'>
              <span>Filtrar</span>
              <img src='/svg/filters.svg'></img>
            </div>
          </button>
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
}

export default App;
