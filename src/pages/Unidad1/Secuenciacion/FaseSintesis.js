function Unidad1SecuenciacionFaseSintesis() {
  return `
    <div class="content">
      <h2>6.3. Fase de Síntesis</h2>
      <div class="content-section">
        <div class="actividad-card">
          <h4>6. Presentación de proyectos</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Los equipos presentan sus sistemas de despliegue implementados y comparten sus experiencias.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Proyectos desarrollados</li>
              <li>Presentaciones preparadas</li>
              <li>Documentación generada</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Grupos de proyecto</p>
            
            <div class="subactividad">
              <h5>Aspectos a cubrir:</h5>
              <ul>
                <li>Arquitectura del sistema</li>
                <li>Decisiones técnicas</li>
                <li>Desafíos y soluciones</li>
                <li>Demostración en vivo</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="actividad-card">
          <h4>7. Evaluación y retroalimentación</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Sesión de evaluación conjunta y retroalimentación constructiva entre equipos.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Rúbricas de evaluación</li>
              <li>Formularios de retroalimentación</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Grupo completo</p>
            
            <div class="rubrica">
              <h5>RÚBRICA DE EVALUACIÓN</h5>
              <table>
                <thead>
                  <tr>
                    <th>Criterios</th>
                    <th>Excelente (4)</th>
                    <th>Bueno (3)</th>
                    <th>Satisfactorio (2)</th>
                    <th>Insuficiente (1)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Calidad del código y la funcionalidad</td>
                    <td>El código está perfectamente estructurado, limpio y bien comentado. La landing page es completamente funcional.</td>
                    <td>El código es claro y funcional con pequeños errores de estructura o comentarios.</td>
                    <td>El código es funcional pero desordenado y mal estructurado. La landing page presenta algunos fallos.</td>
                    <td>El código no es funcional o tiene errores graves en la estructura y funcionamiento.</td>
                  </tr>
                  <tr>
                    <td>Trabajo en equipo y colaboración</td>
                    <td>El equipo ha trabajado de manera excelente, con una distribución de tareas equilibrada y buena comunicación.</td>
                    <td>El equipo ha trabajado bien, pero podría haber mejorado la distribución de tareas y comunicación.</td>
                    <td>El equipo ha trabajado de manera desigual y con problemas de comunicación.</td>
                    <td>El equipo no ha trabajado bien, con escasa colaboración y distribución de tareas.</td>
                  </tr>
                  <tr>
                    <td>Uso de Git y GitHub</td>
                    <td>Se ha utilizado Git y GitHub de manera excelente, con commits regulares, ramas bien gestionadas y pull requests claros.</td>
                    <td>Se ha utilizado Git y GitHub correctamente, con algunos errores menores en la gestión de ramas o commits.</td>
                    <td>Uso básico de Git y GitHub, sin una gestión clara de ramas ni commits regulares.</td>
                    <td>No se ha utilizado Git o GitHub adecuadamente o no se ha realizado control de versiones.</td>
                  </tr>
                  <tr>
                    <td>Implementación de DevOps (CI/CD y despliegue continuo)</td>
                    <td>El proceso de CI/CD se ha implementado correctamente con GitHub Actions y la landing page se ha desplegado sin errores.</td>
                    <td>La implementación de CI/CD es correcta, pero con algunos fallos menores en la integración continua.</td>
                    <td>La implementación de CI/CD tiene problemas significativos, pero el despliegue continuo es funcional.</td>
                    <td>No se ha implementado CI/CD de manera efectiva y el despliegue continuo no ha sido realizado.</td>
                  </tr>
                </tbody>
              </table>
              <p class="nota-evaluacion">La evaluación será colectiva, y tendrá en cuenta tanto la calidad técnica del producto final como el grado de colaboración en el equipo.</p>
            </div>
          </div>
        </div>

        <div class="actividad-card">
          <h4>8. Reflexión final</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Los estudiantes reflexionan sobre su aprendizaje y experiencia en el desarrollo del proyecto.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Diario de aprendizaje</li>
              <li>Portfolio del proyecto</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Individual</p>
            
            <div class="subactividad">
              <h5>Puntos de reflexión:</h5>
              <ul>
                <li>Conocimientos adquiridos</li>
                <li>Habilidades desarrolladas</li>
                <li>Áreas de mejora</li>
                <li>Aplicación práctica</li>
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
      }

      .actividad-card {
        margin: 2rem 0;
        padding: 1.5rem;
        border: 1px solid #1976D2;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
      }

      .actividad-card h4 {
        color: #1976D2;
        margin-top: 0;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #1976D2;
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

      .rubrica {
        margin-top: 2rem;
        padding: 1rem;
        background-color: #f8f9fa;
        border-radius: 4px;
      }

      .rubrica table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background-color: white;
      }

      .rubrica th,
      .rubrica td {
        border: 1px solid #ddd;
        padding: 0.8rem;
        text-align: left;
      }

      .rubrica th {
        background-color: #f5f5f5;
      }

      .nota-evaluacion {
        margin-top: 1rem;
        font-style: italic;
        color: #666;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad1SecuenciacionFaseSintesis = Unidad1SecuenciacionFaseSintesis; 