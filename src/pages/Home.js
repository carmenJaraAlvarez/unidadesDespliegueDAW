function Home() {
  return `
    <div class="content">
      <h2>Propuesta Didáctica</h2>

      <section class="home-intro">
        <div class="intro-content">
          <p>Esta propuesta didáctica parcial ha sido elaborada por <strong>Carmen Jara Álvarez</strong>, durante el aprendizaje de la asignatura <strong>AEMI</strong> del Máster Universitario en Profesorado en Enseñanza Secundaria Obligatoria y Bachillerato Formación Profesional y Enseñanzas de Idiomas de la Universidad de Sevilla.</p>
          
        </div>
      </section>

      <section class="home-framework">
        <div class="framework-content">
          <p>La propuesta formativa está alineada con la legislación vigente, asegurando que las unidades didácticas, los módulos profesionales y las competencias profesionales se adecuan a:</p>
          
          <ul class="legal-list">
            <li>
              <i class="fas fa-gavel"></i>
              <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2002-12018" target="_blank">
                Ley Orgánica 5/2002, de 19 de junio, sobre las Cualificaciones y la Formación Profesional.
              </a>
            </li>
            <li>
              <i class="fas fa-book-open"></i>
              <a href="https://www.boe.es/buscar/doc.php?id=BOE-A-2003-17588" target="_blank">
                Real Decreto 1128/2003 y Real Decreto 1087/2005, que regulan el Catálogo Nacional de Cualificaciones Profesionales y los módulos formativos.
              </a>
            </li>
            <li>
              <i class="fas fa-graduation-cap"></i>
              <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2006-7899" target="_blank">
                Ley Orgánica 2/2006, de 3 de mayo, sobre Educación y Real Decreto 1147/2011, que establece la ordenación general de la formación profesional en el sistema educativo.
              </a>
            </li>
            <li>
              <i class="fas fa-landmark"></i>
              <a href="https://www.juntadeandalucia.es/boja/2008/182/1" target="_blank">
                Decreto 436/2008 de la Ley 17/2007, que regula la formación profesional en Andalucía.
              </a>
            </li>
            <li>
              <i class="fas fa-file-alt"></i>
              Las órdenes relacionadas que establecen los procedimientos de admisión y evaluación del alumnado en Andalucía.
            </li>
          </ul>
        </div>
      </section>

      <section class="home-conclusion">
        <div class="conclusion-content">
          <p>Este enfoque asegura que la formación no solo cumpla con los requisitos académicos, sino también con los requisitos legales para la obtención de la titulación oficial y la inserción laboral de nuestro alumnado.</p>
        </div>
      </section>
      <p class="date">Septiembre 2025</p>
    </div>
  `;
}

// Make Home available globally
window.Home = Home;
