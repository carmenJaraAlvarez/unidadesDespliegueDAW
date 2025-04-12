function Unidad1Concrecion() {
  return `
    <div class="content">
      <h2>5. Concreción Curricular</h2>
      <div class="content-section">
        <table class="curricular-table">
          <thead>
            <tr>
              <th>Resultados de aprendizaje</th>
              <th>Criterios de evaluación</th>
              <th>Contenidos básicos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Automatizar los procesos de desarrollo y despliegue de aplicaciones.</td>
              <td>Implementar pipelines de integración y entrega continua.</td>
              <td>DevOps: Jenkins, GitHub Actions, Docker.</td>
            </tr>
            <tr>
              <td>Trabajar con herramientas de automatización en el ciclo de vida del software.</td>
              <td>Configurar pipelines para pruebas y despliegue automatizado.</td>
              <td>Automatización de despliegue: Docker, Kubernetes.</td>
            </tr>
            <tr>
              <td>Trabajar en equipo bajo el enfoque de colaboración activa.</td>
              <td>Evaluar la efectividad del trabajo colaborativo y la distribución de roles.</td>
              <td>Trabajo en equipo, gestión de proyectos.</td>
            </tr>
            <tr>
              <td>Desarrollar aplicaciones web utilizando HTML, CSS y JavaScript.</td>
              <td>Implementar correctamente una landing page funcional.</td>
              <td>HTML5, CSS3, JavaScript.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <style>
      .curricular-table {
        width: 100%;
        border-collapse: collapse;
        margin: 2rem 0;
      }

      .curricular-table th,
      .curricular-table td {
        border: 1px solid #ddd;
        padding: 1rem;
        text-align: left;
      }

      .curricular-table th {
        background-color: #f5f5f5;
      }

      .content-section {
        margin: 2rem 0;
      }

      h2 {
        margin-top: 2rem;
        color: #333;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad1Concrecion = Unidad1Concrecion; 