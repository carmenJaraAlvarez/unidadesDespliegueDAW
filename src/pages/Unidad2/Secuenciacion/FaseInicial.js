function Unidad2SecuenciacionFaseInicial() {
  return `
    <div class="content">
      <h2>6.1. Fase Inicial: Situamos al alumnado</h2>
      <div class="content-section">
        <div class="activity-card">
          <h3>Actividad 1: Introducción a la computación en la nube y su impacto ambiental</h3>
          <div class="activity-content">
            <h4>Descripción</h4>
            <p>En esta actividad inicial, los estudiantes explorarán los conceptos básicos de la computación en la nube y su relación con el cambio climático.</p>
            
            <h4>Recursos</h4>
            <ul>
              <li>Video introductorio sobre computación en la nube</li>
              <li>Artículo sobre el impacto ambiental de los centros de datos</li>
              <li>Presentación sobre sostenibilidad en TI</li>
            </ul>

            <h4>Agrupamiento</h4>
            <p>Pequeños grupos de 3-4 estudiantes</p>

            <h4>Activar conocimientos previos</h4>
            <p>Los estudiantes compartirán sus experiencias previas con servicios en la nube y discutirán sobre su percepción del impacto ambiental de la tecnología.</p>
          </div>
        </div>

        <div class="activity-card">
          <h3>Actividad 2: Análisis de la huella de carbono digital</h3>
          <div class="activity-content">
            <h4>Descripción</h4>
            <p>Los estudiantes investigarán y calcularán la huella de carbono de diferentes servicios web y aplicaciones.</p>
            
            <h4>Recursos</h4>
            <ul>
              <li>Calculadora de huella de carbono digital</li>
              <li>Estudios de caso de empresas tecnológicas</li>
              <li>Herramientas de medición de consumo energético</li>
            </ul>

            <h4>Agrupamiento</h4>
            <p>Parejas de estudiantes</p>

            <h4>Activar conocimientos previos</h4>
            <p>Discusión sobre el consumo energético de dispositivos cotidianos y su impacto ambiental.</p>
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
window.Unidad2SecuenciacionFaseInicial = Unidad2SecuenciacionFaseInicial; 