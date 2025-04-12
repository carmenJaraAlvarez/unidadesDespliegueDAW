function Unidad2SecuenciacionFaseSintesis() {
  return `
    <div class="content">
      <h2>6.3. Fase de Síntesis</h2>
      <div class="content-section">
        <div class="actividad-card">
          <h4>7. Presentación del producto final</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Los/as estudiantes presentan su aplicación desplegada y nos contarán qué y cómo han aplicado elementos para la optimización.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Computadoras</li>
              <li>Conexión a internet</li>
              <li>Aplicación desplegada</li>
              <li>Presentación del proyecto</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Grupo</p>
            
            <div class="subactividad">
              <h5>Aspectos a presentar:</h5>
              <ul>
                <li>Demostración de la aplicación</li>
                <li>Estrategias de optimización implementadas</li>
                <li>Decisiones técnicas y su justificación</li>
                <li>Impacto ambiental y medidas adoptadas</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="actividad-card">
          <h4>8. Evaluación</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Evaluación del pipeline y la colaboración en el grupo mediante rúbrica.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>Rúbrica de evaluación</li>
              <li>Formularios de coevaluación</li>
              <li>Documentación del proyecto</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Colectiva y formativa</p>
            
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
                    <td>Despliegue técnico en la nube</td>
                    <td>La aplicación se despliega correctamente en una plataforma cloud. El pipeline CI/CD está bien configurado y automatizado (uso de GitHub Actions o similar).</td>
                    <td>El despliegue es funcional con pocos errores. El pipeline CI/CD está implementado con algunos ajustes pendientes.</td>
                    <td>La aplicación se despliega parcialmente o con errores. El pipeline está presente pero no automatiza el flujo completo.</td>
                    <td>No hay despliegue funcional o el pipeline no existe o no se configura correctamente.</td>
                  </tr>
                  <tr>
                    <td>Optimización ecológica del despliegue</td>
                    <td>Se han aplicado múltiples estrategias de optimización. Se justifica cada decisión con criterios ambientales y técnicos.</td>
                    <td>Se han aplicado varias estrategias de optimización, aunque algunas no están bien justificadas.</td>
                    <td>Se aplican pocas estrategias de optimización. Hay escasa justificación de las decisiones tomadas.</td>
                    <td>No se ha tenido en cuenta el impacto ecológico del despliegue o no se aplicaron acciones concretas.</td>
                  </tr>
                  <tr>
                    <td>Trabajo colaborativo y gestión del proyecto</td>
                    <td>Buen reparto de tareas, liderazgo compartido, comunicación fluida y gestión del tiempo. Todos/as contribuyen y aprenden</td>
                    <td>Buena colaboración con pequeños desequilibrios. Se organizaron bien y cumplieron con los plazos.</td>
                    <td>Colaboración desigual o falta de organización clara. Algunos miembros participaron más que otros.</td>
                    <td>Poca o nula colaboración. Trabajo realizado de forma individual o mal coordinado. Problemas serios de comunicación.</td>
                  </tr>
                  <tr>
                    <td>Documentación y presentación del proyecto</td>
                    <td>Presentación clara, técnica y bien argumentada. Se explican decisiones técnicas y ecológicas con propiedad. Documentación del proceso completa y útil.</td>
                    <td>La presentación es comprensible y cubre los aspectos esenciales. Documentación suficiente pero mejorable.</td>
                    <td>Presentación apresurada o incompleta. La documentación es confusa o muy escueta.</td>
                    <td>No se presenta o no se explica el proyecto correctamente. Documentación inexistente o muy pobre.</td>
                  </tr>
                  <tr>
                    <td>Reflexión sobre sostenibilidad</td>
                    <td>El equipo demostró conciencia ambiental, con reflexiones profundas y realistas sobre el impacto del cloud computing. Propusieron mejoras para el futuro.</td>
                    <td>Se abordó el impacto ecológico de forma reflexiva y con argumentos. Reconocen aspectos a mejorar.</td>
                    <td>Reflexión superficial o limitada al cumplimiento mínimo. Poca profundidad en el análisis.</td>
                    <td>No se reflexionó sobre el impacto ambiental o se hizo de forma vaga e inconexa.</td>
                  </tr>
                </tbody>
              </table>
              <p class="nota-evaluacion">La evaluación será colectiva y formativa, con uso de coevaluación y autoevaluación.</p>
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
window.Unidad2SecuenciacionFaseSintesis = Unidad2SecuenciacionFaseSintesis; 