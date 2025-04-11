import Identificacion from './Unidad3/Identificacion.js';
import Justificacion from './Unidad3/Justificacion.js';
import PrincipiosDUA from './Unidad3/PrincipiosDUA.js';
import Descripcion from './Unidad3/Descripcion.js';
import Concrecion from './Unidad3/Concrecion.js';
import Secuenciacion from './Unidad3/Secuenciacion.js';
import Evaluacion from './Unidad3/Evaluacion.js';

function Unidad3() {
  return `
        <section id="Unidad3" class="content-box">
            <h2>Unidad 3: Defenderse o morir</h2>
            <p class="subtitle">Seguridad en Aplicaciones Web</p>
            <div class="green-line"></div>

            <div id="Unidad3/Identificacion" class="section-content">
                ${Identificacion()}
            </div>

            <div id="Unidad3/Justificacion" class="section-content">
                ${Justificacion()}
            </div>

            <div id="Unidad3/PrincipiosDUA" class="section-content">
                ${PrincipiosDUA()}
            </div>

            <div id="Unidad3/Descripcion" class="section-content">
                ${Descripcion()}
            </div>

            <div id="Unidad3/Concrecion" class="section-content">
                ${Concrecion()}
            </div>

            <div id="Unidad3/Secuenciacion" class="section-content">
                ${Secuenciacion()}
            </div>

            <div id="Unidad3/Evaluacion" class="section-content">
                ${Evaluacion()}
            </div>
        </section>
    `;
}

export default Unidad3;
