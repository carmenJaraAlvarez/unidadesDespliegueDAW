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
            <p class="subtitle">Desarrollo Frontend y Backend</p>
            <div class="green-line"></div>

            <div id="Unidad2/Identificacion" class="section-content">
                ${window.Unidad2Identificacion ? window.Unidad2Identificacion() : ''}
            </div>

            <div id="Unidad2/Justificacion" class="section-content">
                ${window.Unidad2Justificacion ? window.Unidad2Justificacion() : ''}
            </div>

            <div id="Unidad2/PrincipiosDUA" class="section-content">
                ${window.Unidad2PrincipiosDUA ? window.Unidad2PrincipiosDUA() : ''}
            </div>

            <div id="Unidad2/Descripcion" class="section-content">
                ${window.Unidad2Descripcion ? window.Unidad2Descripcion() : ''}
            </div>

            <div id="Unidad2/Concrecion" class="section-content">
                ${window.Unidad2Concrecion ? window.Unidad2Concrecion() : ''}
            </div>

            <div id="Unidad2/Secuenciacion" class="section-content">
                ${window.Unidad2Secuenciacion ? window.Unidad2Secuenciacion() : ''}
            </div>

            <div id="Unidad2/Evaluacion" class="section-content">
                ${window.Unidad2Evaluacion ? window.Unidad2Evaluacion() : ''}
            </div>
        </section>
    `;
}

// Make Unidad2 available globally
window.Unidad2 = Unidad2;
