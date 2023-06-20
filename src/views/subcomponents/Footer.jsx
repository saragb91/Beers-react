import { useContext } from 'react';
import BeersContext from '../PlayerContext';

const Footer = () => {
  const { showModal } = useContext(BeersContext);
  return (
    <footer className={showModal ? 'opacity' : null}>
      <h4>¿Podemos ayudarte?</h4>
      <div className='help-container'>
        <div>
          <div className='help-button-container'>
            <img src='/svg/intercom.svg' />
          </div>
          <p className='help-paragraph'>Chat</p>
        </div>
        <div>
          <div className='help-button-container'>
            <img src='/svg/phone.svg' />
          </div>
          <p className='help-paragraph'>Llamar</p>
        </div>
      </div>
      <section>
        <ul>
          <li>
            <a href='#'>Sobre nosotros</a>
          </li>
          <li>
            <a href='#'>Medidas de seguridad(COVID-19)</a>
          </li>
          <li>
            <a href='#'>Cómo mercar</a>
          </li>
          <li>
            <a href='#'>Proveedores</a>
          </li>
          <li>
            <a href='#'>Contáctenos</a>
          </li>
          <li>
            <a href='#'>Zona de cobertura</a>
          </li>
        </ul>
        <hr />
        <div className='instagram-container'>
          <img src='/svg/instagram.svg'></img>
        </div>
        <h6>Politica de tratamiento de datos personales</h6>
      </section>
    </footer>
  );
};

export default Footer;
