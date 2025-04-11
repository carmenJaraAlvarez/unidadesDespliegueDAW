import Identificacion from './Unidad1/Identificacion.js';
import Justificacion from './Unidad1/Justificacion.js';
import PrincipiosDUA from './Unidad1/PrincipiosDUA.js';
import Descripcion from './Unidad1/Descripcion.js';
import Concrecion from './Unidad1/Concrecion.js';
import Secuenciacion from './Unidad1/Secuenciacion.js';
import Evaluacion from './Unidad1/Evaluacion.js';

function Unidad1() {
  return `
        <section id="Unidad1" class="content-box">
            <h2>Unidad 1: La Paz es Compartir</h2>
            <p class="subtitle">Introducción al Desarrollo Web</p>
            <div class="green-line"></div>

            <div id="Unidad1/Identificacion" class="section-content">
                ${window.Unidad1Identificacion ? window.Unidad1Identificacion() : ''}
            </div>

            <div id="Unidad1/Justificacion" class="section-content">
                ${window.Unidad1Justificacion ? window.Unidad1Justificacion() : ''}
            </div>

            <div id="Unidad1/PrincipiosDUA" class="section-content">
                ${window.Unidad1PrincipiosDUA ? window.Unidad1PrincipiosDUA() : ''}
            </div>

            <div id="Unidad1/Descripcion" class="section-content">
                ${window.Unidad1Descripcion ? window.Unidad1Descripcion() : ''}
            </div>

            <div id="Unidad1/Concrecion" class="section-content">
                ${window.Unidad1Concrecion ? window.Unidad1Concrecion() : ''}
            </div>

            <div id="Unidad1/Secuenciacion" class="section-content">
                ${window.Unidad1Secuenciacion ? window.Unidad1Secuenciacion() : ''}
            </div>

            <div id="Unidad1/Evaluacion" class="section-content">
                ${window.Unidad1Evaluacion ? window.Unidad1Evaluacion() : ''}
            </div>
        </section>
    `;
}

// Make Unidad1 available globally
window.Unidad1 = Unidad1;
