function Unidad2SecuenciacionFaseDesarrollo() {
  return `
    <div class="content">
      <h2>6.2. Fase de Desarrollo</h2>
      <div class="content-section">
        <div class="actividad-card">
          <h4>3. ¿Qué es la computación en la nube y cómo funciona?</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Estudio de las plataformas de nube. Lectura, resumen y puesta en común de dudas.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li><a href="https://es.wikipedia.org/wiki/Computaci%C3%B3n_en_la_nube" target="_blank">Wikipedia: Computación en la nube</a></li>
            </ul>
            <p><strong>Agrupamiento:</strong> Trabajo en pareja y puesta en común en asamblea</p>
            
            <div class="subactividad">
              <h5>Aspectos a investigar:</h5>
              <ul>
                <li>Tipos de servicios cloud (IaaS, PaaS, SaaS)</li>
                <li>Principales proveedores</li>
                <li>Arquitecturas en la nube</li>
                <li>Ventajas y desventajas</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="actividad-card">
          <h4>4. ¿Cómo se realiza el despliegue de una aplicación en la nube?</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Despliegue de una aplicación simple en nube comercial (AWS, Google Cloud, etc.), considerando criterios ecológicos.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li>AWS EC2 o alternativa elegida</li>
              <li>Tutoriales de despliegue</li>
              <li>Documentación sobre eficiencia energética de proveedores cloud</li>
            </ul>
            <p><strong>Agrupamiento:</strong> Actividad práctica en grupos</p>
            
            <div class="subactividad">
              <h5>Criterios de selección de proveedor:</h5>
              <ul>
                <li>Tipo de energía utilizada</li>
                <li>Ubicación de los servidores</li>
                <li>Políticas de sostenibilidad</li>
                <li>Eficiencia energética</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="actividad-card">
          <h4>5. Optimización del consumo en la nube</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Elección y aplicación de estrategias de optimización por grupos.</p>
            <p><strong>Recursos:</strong> Búsqueda autónoma según la estrategia elegida</p>
            <p><strong>Agrupamiento:</strong> Grupos</p>
            
            <div class="subactividad">
              <h5>Posibles estrategias (no repetibles entre grupos):</h5>
              <ul>
                <li>Optimización del código con patrones eficientes</li>
                <li>Optimización frontend (compresión, minimización, WebP)</li>
                <li>Optimización de consultas SQL</li>
                <li>Asincronía y paralelismo</li>
                <li>Herramientas de monitoreo</li>
                <li>Propuestas propias del grupo</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="actividad-card">
          <h4>6. Documentación del proyecto</h4>
          <div class="actividad-details">
            <p><strong>Descripción:</strong> Documentar estrategias de sostenibilidad y crear wiki común del aula.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
              <li><a href="https://docs.github.com/es/communities/documenting-your-project-with-wikis" target="_blank">Documentación de GitHub sobre wikis</a></li>
            </ul>
            <p><strong>Agrupamiento:</strong> Grupos</p>
            
            <div class="subactividad">
              <h5>Contenido a documentar:</h5>
              <ul>
                <li>Estrategias de optimización implementadas</li>
                <li>Justificación de decisiones técnicas</li>
                <li>Análisis de impacto ambiental</li>
                <li>Propuestas de mejora</li>
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

      a {
        color: #1976D2;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad2SecuenciacionFaseDesarrollo = Unidad2SecuenciacionFaseDesarrollo; 