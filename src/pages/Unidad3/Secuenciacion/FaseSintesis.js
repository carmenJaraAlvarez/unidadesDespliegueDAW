function Unidad3SecuenciacionFaseSintesis() {
  return `
    <div class="content">
      <h2>6.3. Fase de Síntesis: Compartir, evaluar y reflexionar sobre nuestros logros</h2>
      <div class="content-section">
        <div class="activity-card">
          <h3>Actividad de síntesis 1: Revisión y presentación de la aplicación segura</h3>
          <div class="activity-content">
            <h4>Descripción</h4>
            <p>Presentar su aplicación con las medidas de seguridad implementadas, demostrando la comprensión y aplicación de los conceptos de seguridad web.</p>
            
            <h4>Recursos</h4>
            <ul>
              <li>Computadoras para la presentación</li>
              <li>Plantilla de presentación</li>
              <li>Rúbrica de evaluación</li>
            </ul>

            <h4>Agrupamiento</h4>
            <p>Presentación grupal</p>

            <h4>Evaluación</h4>
            <p>Los estudiantes serán evaluados en base a:</p>
            <ul>
              <li>Implementación correcta de medidas de seguridad</li>
              <li>Claridad en la explicación de las medidas implementadas</li>
              <li>Capacidad para responder preguntas sobre seguridad</li>
              <li>Calidad de la presentación</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <style>
      .content-section {
        margin: 2rem 0;
      }

      .activity-card {
        margin: 2rem 0;
        padding: 1.5rem;
        border: 1px solid #1976D2;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
      }

      .activity-card h3 {
        color: #1976D2;
        margin-top: 0;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #1976D2;
      }

      .activity-content h4 {
        color: #333;
        margin: 1.5rem 0 0.5rem 0;
      }

      .activity-content ul {
        padding-left: 1.5rem;
        margin: 0.5rem 0;
      }

      .activity-content li {
        margin: 0.5rem 0;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad3SecuenciacionFaseSintesis = Unidad3SecuenciacionFaseSintesis; 