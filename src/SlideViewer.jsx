
export function SlideViewer({ slides }) {
  return (
    <div id="slideSection">
      <div id="buttonsDiv">
        <button
          id="backBtn"
          className="slide-btn"
          data-testid="back"
        >
          Anterior
        </button>
        <button
          id="nextBtn"
          data-testid="next"
          className="slide-btn"
        >
          Próximo
        </button>
      </div>
      <div id="slide-box">
        <h2>Titulo do slide</h2>
        <p>Descrição do slide</p>
      </div>
    </div>
  );
}
