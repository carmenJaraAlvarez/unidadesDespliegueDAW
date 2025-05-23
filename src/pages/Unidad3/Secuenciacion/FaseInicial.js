function Unidad3SecuenciacionFaseInicial() {
  return `
    <div class="content">
      <h2>6.1. Fase Inicial</h2>
      <div class="content-section">
        <h4>1. Introducción a la seguridad en el desarrollo web</h4>
        <div class="actividad-card">
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Exploración de los principios fundamentales de seguridad en el desarrollo web y su importancia en el ciclo de vida del software.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Presentación sobre seguridad web</li>
              <li>Video: "Seguridad Web en 5 minutos"</li>
              <li>Casos de estudio de vulnerabilidades</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Grupo completo</p>
            
            <div class="subactividad">
              <h5>Activación de conocimientos previos:</h5>
              <ul>
                <li>¿Qué sabemos sobre seguridad web?</li>
                <li>Experiencias previas con vulnerabilidades</li>
                <li>Identificación de amenazas comunes</li>
              </ul>
            </div>
          </div>
        </div>

        <h4>2. Análisis de necesidades y planificación</h4>
        <div class="actividad-card">
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Los estudiantes identifican necesidades específicas para la implementación de seguridad en sus proyectos.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Plantillas de planificación</li>
              <li>Herramientas de gestión de proyectos</li>
              <li>Ejemplos de casos reales</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Grupos de 3-4 estudiantes</p>
            
            <div class="subactividad">
              <h5>Tareas de planificación:</h5>
              <ul>
                <li>Definición de objetivos del proyecto</li>
                <li>Identificación de requisitos de seguridad</li>
                <li>Creación de cronograma inicial</li>
                <li>Asignación de roles y responsabilidades</li>
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

      .subactividad {
        margin: 1rem 0;
        padding: 1rem;
        background-color: #f8f9fa;
        border-radius: 4px;
      }

      .actividad-details ul {
        padding-left: 1.5rem;
        margin: 0.5rem 0;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad3SecuenciacionFaseInicial = Unidad3SecuenciacionFaseInicial; 