function Home() {
  return `
        <section id="inicio" class="hero">
            <div class="hero-content">
                <h1>Desarrollo de Aplicaciones Web</h1>
                <p>Propuesta Formativa: Unidades Didácticas</p>
                <a href="#Unidad1" class="cta-button">Explorar Unidades</a>
            </div>
        </section>

        <section id="unidades" class="services">
            <h2>Unidades Didácticas</h2>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-handshake"></i>
                    <h3>Unidad 1: La Paz es Compartir</h3>
                    <p>Colaboración y DevOps en el desarrollo web</p>
                    <a href="#Unidad1" class="cta-button">Ver Unidad</a>
                </div>
                <div class="service-card">
                    <i class="fas fa-cloud"></i>
                    <h3>Unidad 2: Una nube sin agua</h3>
                    <p>Computación en la nube y cambio climático</p>
                    <a href="#Unidad2" class="cta-button">Ver Unidad</a>
                </div>
                <div class="service-card">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Unidad 3: Defenderse o morir</h3>
                    <p>Seguridad en Aplicaciones Web</p>
                    <a href="#Unidad3" class="cta-button">Ver Unidad</a>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <h2>Sobre el Proyecto</h2>
            <div class="about-content">
                <p>Esta propuesta formativa está diseñada para introducir a los estudiantes en el desarrollo de aplicaciones web modernas, 
                   abordando temas fundamentales como la colaboración, DevOps, computación en la nube y seguridad web.</p>
            </div>
        </section>

        <section id="anexos" class="about">
            <h2>Anexos</h2>
            <div class="about-content">
                <p>Consulta información adicional sobre el módulo y recursos complementarios.</p>
                <a href="#Anexos" class="cta-button">Ver Anexos</a>
            </div>
        </section>
    `;
}
