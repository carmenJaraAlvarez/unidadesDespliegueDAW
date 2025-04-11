import Identificacion from './Unidad1/Identificacion.js';
import Justificacion from './Unidad1/Justificacion.js';
import PrincipiosDUA from './Unidad1/PrincipiosDUA.js';
import Descripcion from './Unidad1/Descripcion.js';
import Concrecion from './Unidad1/Concrecion.js';
import Secuenciacion from './Unidad1/Secuenciacion.js';
import Evaluacion from './Unidad1/Evaluacion.js';

function Unidad1() {
  return `
    <section class="content-box">
      <h2>Unidad 1: La Paz es Compartir</h2>
      <p class="subtitle">Introducción al Desarrollo Web</p>
      <div class="green-line"></div>
      <p>Selecciona una sección del menú lateral para ver su contenido.</p>
    </section>
  `;
}

// Make Unidad1 available globally
window.Unidad1 = Unidad1;
