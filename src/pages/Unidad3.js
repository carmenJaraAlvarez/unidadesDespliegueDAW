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
                ${window.Unidad3Identificacion ? window.Unidad3Identificacion() : ''}
            </div>

            <div id="Unidad3/Justificacion" class="section-content">
                ${window.Unidad3Justificacion ? window.Unidad3Justificacion() : ''}
            </div>

            <div id="Unidad3/PrincipiosDUA" class="section-content">
                ${window.Unidad3PrincipiosDUA ? window.Unidad3PrincipiosDUA() : ''}
            </div>

            <div id="Unidad3/Descripcion" class="section-content">
                ${window.Unidad3Descripcion ? window.Unidad3Descripcion() : ''}
            </div>

            <div id="Unidad3/Concrecion" class="section-content">
                ${window.Unidad3Concrecion ? window.Unidad3Concrecion() : ''}
            </div>

            <div id="Unidad3/Secuenciacion" class="section-content">
                ${window.Unidad3Secuenciacion ? window.Unidad3Secuenciacion() : ''}
            </div>

            <div id="Unidad3/Evaluacion" class="section-content">
                ${window.Unidad3Evaluacion ? window.Unidad3Evaluacion() : ''}
            </div>
        </section>
    `;
}

// Make Unidad3 available globally
window.Unidad3 = Unidad3;
