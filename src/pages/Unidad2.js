import Identificacion from './Unidad2/Identificacion.js';
import Justificacion from './Unidad2/Justificacion.js';
import PrincipiosDUA from './Unidad2/PrincipiosDUA.js';
import Descripcion from './Unidad2/Descripcion.js';
import Concrecion from './Unidad2/Concrecion.js';
import Secuenciacion from './Unidad2/Secuenciacion.js';
import Evaluacion from './Unidad2/Evaluacion.js';

function Unidad2() {
  return `
        <section id="Unidad2" class="content-box">
            <h2>Unidad 2: Una nube sin agua</h2>
            <p class="subtitle">Introducción al Desarrollo Web</p>
            <div class="green-line"></div>

            <div id="Unidad2/Identificacion" class="section-content">
                ${Identificacion()}
            </div>

            <div id="Unidad2/Justificacion" class="section-content">
                ${Justificacion()}
            </div>

            <div id="Unidad2/PrincipiosDUA" class="section-content">
                ${PrincipiosDUA()}
            </div>

            <div id="Unidad2/Descripcion" class="section-content">
                ${Descripcion()}
            </div>

            <div id="Unidad2/Concrecion" class="section-content">
                ${Concrecion()}
            </div>

            <div id="Unidad2/Secuenciacion" class="section-content">
                ${Secuenciacion()}
            </div>

            <div id="Unidad2/Evaluacion" class="section-content">
                ${Evaluacion()}
            </div>
        </section>
    `;
}

export default Unidad2;
