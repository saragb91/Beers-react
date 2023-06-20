import { useContext } from 'react';
import BeersContext from '../PlayerContext';

const Modal = () => {
  const { filters, setShowModal, selectBeer, cleanSelection, filterBeers } =
    useContext(BeersContext);

  return (
    <div className='modal-container'>
      <div className='close-icon-container'>
        <img
          className='close-icon'
          src='/svg/close.svg'
          onClick={() => setShowModal(false)}
        />
      </div>
      <h3>Filtros</h3>
      <form>
        <label>
          Rubia
          <input
            type='checkbox'
            key={1}
            defaultChecked={filters.includes(1)}
            onClick={() => selectBeer(1)}
          />
        </label>
        <label>
          Morena
          <input
            type='checkbox'
            key={2}
            defaultChecked={filters.includes(2)}
            onClick={() => selectBeer(2)}
          />
        </label>
        <label>
          Roja
          <input
            type='checkbox'
            key={3}
            defaultChecked={filters.includes(3)}
            onClick={() => selectBeer(3)}
          />
        </label>
      </form>
      <div className='modal-buttons-container'>
        <button disabled={!filters.length} onClick={cleanSelection}>
          Limpiar
        </button>
        <button className='filter-button' onClick={filterBeers}>
          <div className='filter-button-label'>
            <span>Filtrar</span>
            <img src='/svg/filters.svg'></img>
            {filters.length > 0 && (
              <div className='total-beers'>{filters.length}</div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Modal;
