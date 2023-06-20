import { createContext, useCallback, useEffect, useState } from 'react';
import { products } from '../../products.json';

const CACHE_KEY = 'beers-filter';

const BeersContext = createContext();
export default BeersContext;

export const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState(products);
  const [filters, setFilters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let beersFilter = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (beersFilter && beersFilter.length) {
      setFilters(beersFilter);
      setBeers(products.filter((beer) => beersFilter.includes(beer.filterId)));
    }
  }, []);

  const selectBeer = useCallback(
    (value) => {
      if (filters.includes(value)) {
        setFilters(filters.filter((id) => id !== value));
      } else {
        setFilters([...filters, value]);
      }
    },
    [filters]
  );

  const cleanSelection = useCallback(() => {
    const filters = JSON.stringify([]);
    localStorage.setItem(CACHE_KEY, filters);

    setFilters([]);
    setShowModal(false);
    setBeers(products);
  }, []);

  const filterBeers = useCallback(() => {
    const stringifyFilters = JSON.stringify(filters);
    localStorage.setItem(CACHE_KEY, stringifyFilters);

    if (filters.length) {
      const filteredBeers = products.filter((beer) =>
        filters.includes(beer.filterId)
      );
      setBeers(filteredBeers);
    } else {
      setBeers(products);
    }
    setShowModal(false);
  }, [filters]);

  const addBeer = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <BeersContext.Provider
      value={{
        beers,
        filters,
        showModal,
        counter,
        setShowModal,
        selectBeer,
        cleanSelection,
        filterBeers,
        addBeer,
      }}
    >
      {beers && children}
    </BeersContext.Provider>
  );
};
