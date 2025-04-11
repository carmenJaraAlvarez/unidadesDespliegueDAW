function Unidad1() {
  return `
    <div class="content">
      <section class="unit-hero">
        <div class="unit-hero-content">
          <i class="fas fa-handshake hero-icon"></i>
          <h1>Unidad 1: La Paz es Compartir</h1>
          <p class="unit-subtitle">Desarrollo web colaborativo y control de versiones</p>
        </div>
      </section>

      <section class="unit-overview">
        <div class="overview-grid">
          <div class="overview-card">
            <i class="fas fa-clock"></i>
            <h3>Duración</h3>
            <p>12 sesiones</p>
          </div>
          <div class="overview-card">
            <i class="fas fa-calendar"></i>
            <h3>Trimestre</h3>
            <p>Primer trimestre</p>
          </div>
          <div class="overview-card">
            <i class="fas fa-graduation-cap"></i>
            <h3>Curso</h3>
            <p>2º DAW</p>
          </div>
        </div>
      </section>

      <section class="unit-description">
        <h2>Descripción de la Unidad</h2>
        <div class="description-content">
          <p>En esta unidad exploraremos las herramientas y metodologías para el desarrollo web colaborativo,
             centrándonos en el control de versiones y las mejores prácticas para trabajar en equipo.</p>
        </div>
      </section>

      <section class="unit-sections">
        <h2>Contenidos de la Unidad</h2>
        <div class="sections-grid">
          <div class="section-card">
            <a href="#Unidad1/Identificacion">
              <h3>1. Datos de Identificación</h3>
              <p>Información básica sobre la unidad didáctica</p>
            </a>
          </div>
          <div class="section-card">
            <a href="#Unidad1/Justificacion">
              <h3>2. Justificación</h3>
              <p>Relevancia y contexto de la unidad</p>
            </a>
          </div>
          <div class="section-card">
            <a href="#Unidad1/PrincipiosDUA">
              <h3>3. Principios DUA</h3>
              <p>Diseño Universal del Aprendizaje</p>
            </a>
          </div>
          <div class="section-card">
            <a href="#Unidad1/Descripcion">
              <h3>4. Descripción del Producto Final</h3>
              <p>Objetivos y resultados esperados</p>
            </a>
          </div>
          <div class="section-card">
            <a href="#Unidad1/Concrecion">
              <h3>5. Concreción Curricular</h3>
              <p>Competencias y criterios de evaluación</p>
            </a>
          </div>
          <div class="section-card">
            <a href="#Unidad1/Secuenciacion">
              <h3>6. Secuenciación Didáctica</h3>
              <p>Planificación y actividades</p>
            </a>
          </div>
          <div class="section-card">
            <a href="#Unidad1/Evaluacion">
              <h3>7. Evaluación</h3>
              <p>Criterios y métodos de evaluación</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

// Make Unidad1 available globally
window.Unidad1 = Unidad1;
