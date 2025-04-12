function Unidad1PrincipiosDUA() {
  return `
    <div class="content">
      <h2>3. Principios DUA</h2>
      <div class="content-section">
        <h3>Acciones de la propuesta encaminadas a la atención a la diversidad</h3>
        <div class="dua-principles">
          <table class="dua-table">
            <thead>
              <tr>
                <th></th>
                <th>Ofrecer múltiples formas de implicar y motivar a los aprendices</th>
                <th>Ofrecer múltiples formas de representación de la información y el contenido</th>
                <th>Ofrecer múltiples formas de acción, expresión y monitoreo del aprendizaje</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pautas de Acceso</strong></td>
                <td>
                  <ul>
                    <li>Se contextualizan los contenidos (relacionados con cultura de paz y trabajo colaborativo)</li>
                    <li>Se promueve la elaboración de respuestas personales (en proyectos grupales)</li>
                    <li>Se da refuerzo positivo durante todo el proceso</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Se presentan contenidos en distintos formatos (videos, tutoriales, lecturas)</li>
                    <li>Se permiten diferentes formas de interactuar con los contenidos (debate, trabajo en grupo, visualización de ejemplos)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Uso de feedback constante en el trabajo colaborativo</li>
                    <li>El alumno puede exponer sus dudas y compartir soluciones de forma activa en clase</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>Pautas de Construcción</strong></td>
                <td>
                  <ul>
                    <li>Las tareas están divididas en pasos pequeños (por ejemplo, diseño y desarrollo de la landing page)</li>
                    <li>Fomento de la interacción entre iguales (trabajo en equipo, discusión de conceptos y herramientas)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Se ofrece apoyo visual en los contenidos (tutoriales en video sobre Git, DevOps, herramientas de CI/CD)</li>
                    <li>Se usan imágenes mentales (diagramas de flujo, mapas conceptuales)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Se proporcionan ejemplos de soluciones, como la implementación de un pipeline CI/CD</li>
                    <li>En el trabajo grupal se realiza una evaluación continua del avance</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>Pautas de Internalización</strong></td>
                <td>
                  <ul>
                    <li>Uso de rúbricas claras de evaluación (para autoevaluación y coevaluación)</li>
                    <li>Propuestas de autoevaluación para reflexionar sobre el aprendizaje colaborativo</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Se sacan a la luz los conocimientos previos</li>
                    <li>Apoyo gradual para cada fase del proyecto, con ejemplos prácticos</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Se recuerdan los objetivos de cada fase del proyecto (desarrollo, implementación y despliegue)</li>
                    <li>Las metas a largo plazo se dividen en objetivos a corto plazo (por ejemplo, tener un primer commit en GitHub, automatizar el despliegue)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <style>
      .dua-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
      }

      .dua-table th, .dua-table td {
        border: 1px solid #ddd;
        padding: 0.8rem;
        text-align: left;
        vertical-align: top;
      }

      .dua-table th {
        background-color: #f5f5f5;
      }

      .dua-table ul {
        margin: 0;
        padding-left: 1.2rem;
      }

      .dua-table li {
        margin-bottom: 0.5rem;
      }

      .content-section {
        margin: 2rem 0;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad1PrincipiosDUA = Unidad1PrincipiosDUA; 