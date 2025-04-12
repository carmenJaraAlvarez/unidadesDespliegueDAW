function Unidad1SecuenciacionSecuenciacion() {
  return `
    <div class="content">
      <h2>6. Secuenciación Didáctica</h2>
      <div class="content-section">
        <div class="phases-container">
          <div onclick="loadPage('Unidad1/Secuenciacion/FaseInicial')" class="phase-link">
            <div class="phase-item">
              <h3>6.1. Fase Inicial: Situamos al alumnado</h3>
              <p>Activación de conocimientos previos y motivación</p>
            </div>
          </div>

          <div onclick="loadPage('Unidad1/Secuenciacion/FaseDesarrollo')" class="phase-link">
            <div class="phase-item">
              <h3>6.2. Fase de Desarrollo</h3>
              <p>Conocer, comprender, pensar, practicar y actuar</p>
            </div>
          </div>

          <div onclick="loadPage('Unidad1/Secuenciacion/FaseSintesis')" class="phase-link">
            <div class="phase-item">
              <h3>6.3. Fase de Síntesis</h3>
              <p>Compartir, evaluar y reflexionar sobre nuestros logros</p>
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

      .phases-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .phase-link {
        text-decoration: none;
        color: inherit;
        transition: transform 0.2s ease;
        cursor: pointer;
      }

      .phase-link:hover {
        transform: translateX(10px);
      }

      .phase-item {
        padding: 1.5rem;
        border-left: 4px solid #1976D2;
        background-color: white;
        border-radius: 0 8px 8px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .phase-item:hover {
        background-color: #f5f5f5;
        border-left-width: 8px;
      }

      .phase-item h3 {
        color: #1976D2;
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
      }

      .phase-item p {
        color: #666;
        margin: 0;
        font-size: 1rem;
      }
    </style>
  `;
}

// Make the component globally available
window.Unidad1SecuenciacionSecuenciacion = Unidad1SecuenciacionSecuenciacion; 