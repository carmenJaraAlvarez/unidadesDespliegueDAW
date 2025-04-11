import Identificacion from './Unidad2/Identificacion.js';
import Justificacion from './Unidad2/Justificacion.js';
import PrincipiosDUA from './Unidad2/PrincipiosDUA.js';
import Descripcion from './Unidad2/Descripcion.js';
import Concrecion from './Unidad2/Concrecion.js';
import Secuenciacion from './Unidad2/Secuenciacion.js';
import Evaluacion from './Unidad2/Evaluacion.js';

function Unidad2() {
  return `
    <section class="content-box">
      <h2>Unidad 2: Una nube sin agua</h2>
      <p class="subtitle">Desarrollo de Aplicaciones Web</p>
      <div class="green-line"></div>
      <p>Selecciona una sección del menú lateral para ver su contenido.</p>
    </section>
  `;
}

// Make Unidad2 available globally
window.Unidad2 = Unidad2;
