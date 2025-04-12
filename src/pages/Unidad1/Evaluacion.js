function Unidad1Evaluacion() {
  return `
    <div class="content">
      <h2>7. Evaluación</h2>
      <div class="content-section">
        <h3>Unidad 1: La Paz es Compartir</h3>
        
        <div class="evaluacion-card">
          <h4>Autoevaluación</h4>
          <p>Los estudiantes realizarán una autoevaluación mediante un formulario en línea que incluirá:</p>
          <ul>
            <li>Valoración del aprendizaje personal y progreso</li>
            <li>Identificación de puntos fuertes y áreas de mejora</li>
            <li>Reflexión sobre la participación en el equipo</li>
            <li>Evaluación de las competencias técnicas adquiridas</li>
            <li>Análisis del proceso de aprendizaje personal</li>
          </ul>
        </div>


        <div class="evaluacion-card">
          <h4>Evaluación de la Unidad Didáctica</h4>
          <p>Los estudiantes evaluarán la unidad mediante un formulario que abordará:</p>
          <ul>
            <li>Relevancia y utilidad de los contenidos para su formación</li>
            <li>Efectividad de las metodologías y recursos utilizados</li>
            <li>Claridad en la presentación de conceptos y materiales</li>
            <li>Adecuación de las actividades a los objetivos</li>
            <li>Sugerencias y propuestas de mejora para futuras ediciones</li>
          </ul>
          <p class="nota">Los resultados de estas evaluaciones se utilizarán para mejorar la unidad y adaptar las metodologías a las necesidades del alumnado.</p>
        </div>
      </div>
    </div>

    <style>
      .content-section {
        margin: 2rem 0;
      }

      .evaluacion-card {
        margin: 2rem 0;
        padding: 1.5rem;
        border: 1px solid #1976D2;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
      }

      .evaluacion-card h4 {
        color: #1976D2;
        margin-top: 0;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #1976D2;
      }

      ul {
        padding-left: 1.5rem;
        margin: 0.5rem 0;
      }

      li {
        margin: 0.5rem 0;
      }

      .nota {
        margin-top: 1.5rem;
        font-style: italic;
        color: #666;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad1Evaluacion = Unidad1Evaluacion;
