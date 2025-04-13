function Unidad3SecuenciacionFaseDesarrollo() {
  return `
    <div class="content">
      <h2>6.2. Fase de Desarrollo: Conocer, comprender, pensar, practicar y actuar</h2>
      <div class="content-section">
        <div class="activity-card">
          <h3>Interrogante 1: ¿Cuáles son las vulnerabilidades comunes en aplicaciones web?</h3>
          <div class="activity-content">
            <h4>Actividad de desarrollo 1: Estudio de vulnerabilidades como XSS y SQL Injection</h4>
            <p>Análisis y práctica de las vulnerabilidades más comunes en aplicaciones web.</p>
            
            <h4>Recursos</h4>
            <ul>
              <li>Documentación OWASP</li>
              <li>Tutoriales prácticos sobre vulnerabilidades web</li>
              <li>Laboratorios virtuales para prácticas</li>
            </ul>

            <h4>Agrupamiento</h4>
            <p>Actividad en pareja</p>
          </div>
        </div>

        <div class="activity-card">
          <h3>Interrogante 2: ¿Cómo proteger una aplicación contra ataques comunes?</h3>
          <div class="activity-content">
            <h4>Actividad de desarrollo 2: Implementación de autenticación segura y cifrado de contraseñas</h4>
            <p>Desarrollo de un sistema de autenticación seguro utilizando JWT y bcrypt.</p>
            
            <h4>Recursos</h4>
            <ul>
              <li>Documentación de JWT</li>
              <li>Biblioteca bcrypt</li>
              <li>Ejemplos de implementación segura</li>
            </ul>

            <h4>Agrupamiento</h4>
            <p>Trabajo en equipo</p>
          </div>
        </div>
      </div>
    </div>

    <style>
      .content-section {
        margin: 2rem 0;
      }

      .activity-card {
        margin: 0 0 2rem 0;
        padding: 1.5rem;
        border: 2px solid #1976D2;
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
        color: #1976D2;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
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
window.Unidad3SecuenciacionFaseDesarrollo = Unidad3SecuenciacionFaseDesarrollo; 