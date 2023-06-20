import { useContext } from 'react';
import BeersContext from '../PlayerContext';

const BeersList = () => {
  const { beers, showModal, addBeer } = useContext(BeersContext);
  return (
    <main className={showModal ? 'opacity' : null}>
      <header>
        <h1>Cervezas</h1>
      </header>
      <section>
        <ol>
          {beers.map((beer) => (
            <article key={beer.name}>
              <header>
                <img src={`img/${beer.img}`} alt='beer' />
                <h2>{beer.name}</h2>
                <p className='description'>{beer.description}</p>
                <p className='price'>
                  $
                  {new Intl.NumberFormat('es-ES', {
                    maximumSignificantDigits: 3,
                  }).format(beer.price)}
                </p>
              </header>
              <div>
                <button onClick={addBeer}>Agregar</button>
              </div>
            </article>
          ))}
        </ol>
        <aside>
          <div>
            <p>Sigue mercando</p>
            <h3>Vinos</h3>
          </div>
          <img src='/svg/arrow-right.svg'></img>
        </aside>
      </section>
    </main>
  );
};

export default BeersList;
