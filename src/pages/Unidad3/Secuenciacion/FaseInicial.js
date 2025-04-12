function Unidad3SecuenciacionFaseInicial() {
  return `
    <div class="content">
      <h2>6.1. Fase Inicial: Situamos al alumnado</h2>
      <div class="content-section">
        <div class="activity-card">
          <h3>Actividad 1: Introducción a la seguridad en aplicaciones web</h3>
          <div class="activity-content">
            <h4>Descripción</h4>
            <p>Explicación de los conceptos básicos sobre seguridad y sus amenazas más comunes.</p>
            
            <h4>Recursos</h4>
            <ul>
              <li><a href="https://www.incibe.es/empresas/blog/medidas-para-proteger-la-informacion-defiende-el-principal-activo-de-tu-empresa" target="_blank">Medidas para proteger la información: defiende el principal activo de tu empresa</a></li>
              <li><a href="https://www.youtube.com/watch?v=51MSd7vhQjY" target="_blank">Video: Introducción a la seguridad web</a></li>
            </ul>

            <h4>Agrupamiento</h4>
            <p>Asamblea</p>

            <h4>Activar conocimientos previos</h4>
            <p>Discusión sobre experiencias personales con problemas de seguridad en la web y su impacto.</p>
          </div>
        </div>

        <div class="activity-card">
          <h3>Actividad 2: Debate sobre la importancia de la seguridad en el desarrollo web</h3>
          <div class="activity-content">
            <h4>Descripción</h4>
            <p>Reflexión sobre incidentes de seguridad recientes y su impacto en las empresas.</p>
            
            <h4>Recursos</h4>
            <ul>
              <li><a href="https://cadenaser.com/cmadrid/2025/03/25/diez-de-cada-seis-pymes-que-sufre-un-ciberataque-termina-cerrando-su-negocio-ser-madrid-sur/" target="_blank">Artículo sobre el impacto de los ciberataques en las PYMES</a></li>
            </ul>

            <h4>Agrupamiento</h4>
            <p>Asamblea</p>

            <h4>Activar conocimientos previos</h4>
            <p>Análisis de casos reales de ciberataques y sus consecuencias para las empresas.</p>
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

      .activity-content a {
        color: #1976D2;
        text-decoration: none;
      }

      .activity-content a:hover {
        text-decoration: underline;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad3SecuenciacionFaseInicial = Unidad3SecuenciacionFaseInicial; 