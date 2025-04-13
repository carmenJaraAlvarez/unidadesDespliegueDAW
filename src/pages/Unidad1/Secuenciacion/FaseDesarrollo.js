function Unidad1SecuenciacionFaseDesarrollo() {
  return `
    <div class="content">
      <h2>6.2. Fase de Desarrollo</h2>
      <div class="content-section">
        <h4>3. Investigación sobre herramientas de despliegue</h4>
        <div class="actividad-card">
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Los estudiantes investigan diferentes herramientas y plataformas para el despliegue de aplicaciones web.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Documentación oficial de herramientas de despliegue</li>
              <li>Tutoriales y guías de mejores prácticas</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Grupos de 3-4 estudiantes</p>
            
            <div class="subactividad">
              <h5>Tareas:</h5>
              <ul>
                <li>Comparar diferentes plataformas de despliegue</li>
                <li>Analizar ventajas y desventajas</li>
                <li>Preparar presentación para compartir hallazgos</li>
              </ul>
            </div>
          </div>
        </div>

        <h4>4. Implementación de un sistema de despliegue</h4>
        <div class="actividad-card">
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Configuración y puesta en marcha de un sistema de despliegue para una aplicación web de ejemplo.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Entorno de desarrollo local</li>
              <li>Herramientas de control de versiones</li>
              <li>Plataforma de despliegue seleccionada</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Trabajo en parejas</p>
            
            <div class="subactividad">
              <h5>Pasos:</h5>
              <ul>
                <li>Configuración del entorno</li>
                <li>Implementación del pipeline de despliegue</li>
                <li>Pruebas y verificación</li>
              </ul>
            </div>
          </div>
        </div>

        <h4>5. Documentación y colaboración</h4>
        <div class="actividad-card">
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Creación de documentación técnica y establecimiento de protocolos de colaboración.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Herramientas de documentación colaborativa</li>
              <li>Sistemas de control de versiones</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Grupos de proyecto</p>
            
            <div class="subactividad">
              <h5>Entregables:</h5>
              <ul>
                <li>Manual técnico</li>
                <li>Guía de contribución</li>
                <li>Documentación de API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>
      .content-section {
        margin: 2rem 0;
      }

      h2 {
        margin-top: 2rem;
        color: #333;
        font-size: 1.5rem;
        font-weight: 600;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #1976D2;
      }

      h4 {
        color: #1976D2;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
      }

      .actividad-card {
        margin: 0 0 2rem 0;
        padding: 1.5rem;
        border: 2px solid #1976D2;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
      }

      .actividad-details ul {
        padding-left: 1.5rem;
        margin: 0.5rem 0;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad1SecuenciacionFaseDesarrollo = Unidad1SecuenciacionFaseDesarrollo; 