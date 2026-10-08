
function App() {
  return (
    <main className="cinema-app">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Inicio de Corte">
          <span className="brand-icon" aria-hidden="true">▶</span>
          CORTE
        </a>

        <span className="topbar-caption">TU PRÓXIMA FUNCIÓN</span>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">LISTA PERSONAL / VOL. 01</p>

        <h1 id="page-title">
          Menos scroll.
          <br />
          <span>Más películas.</span>
        </h1>

        <p className="intro-description">
          Guarda esos títulos que siempre dices que vas a ver.
        </p>
      </section>

      <div className="cinema-layout">
        <aside className="sidebar">
          <section className="add-panel" aria-labelledby="add-title">
            <span className="panel-number" aria-hidden="true">01 /</span>
            <h2 id="add-title">A la lista.</h2>
            <p>¿Qué película te recomendaron?</p>

            <form className="movie-form">
              <label htmlFor="movie-title">Título de la película</label>

              <input
                id="movie-title"
                name="titulo"
                type="text"
                placeholder="Ej. El viaje de Chihiro"
                maxLength={100}
                autoComplete="off"
              />

              <button className="add-button" type="submit">
                Agregar película
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          </section>

          <div className="sidebar-note">
            <span aria-hidden="true">✳</span>
            <p>Ese “algún día la veo” ya tiene dónde quedarse.</p>
          </div>
        </aside>

        <section className="collection" aria-labelledby="collection-title">
          <header className="collection-header">
            <div>
              <p className="eyebrow">EN CARTELERA</p>
              <h2 id="collection-title">Mi selección</h2>
            </div>

            <span className="pending-badge">2 por ver</span>
          </header>

          <ul className="movie-list">
            <li className="movie-card">
              <div className="movie-symbol" aria-hidden="true">▶</div>

              <div className="movie-info">
                <span className="movie-status">POR VER</span>
                <h3>El viaje de Chihiro</h3>
              </div>

              <div className="movie-actions">
                <label className="watched-control">
                  <input type="checkbox" />
                  <span>Vista</span>
                </label>

                <button
                  className="delete-button"
                  type="button"
                  aria-label="Eliminar El viaje de Chihiro"
                >
                  Eliminar
                </button>
              </div>
            </li>

            <li className="movie-card">
              <div className="movie-symbol" aria-hidden="true">▶</div>

              <div className="movie-info">
                <span className="movie-status">POR VER</span>
                <h3>Interestelar</h3>
              </div>

              <div className="movie-actions">
                <label className="watched-control">
                  <input type="checkbox" />
                  <span>Vista</span>
                </label>

                <button
                  className="delete-button"
                  type="button"
                  aria-label="Eliminar Interestelar"
                >
                  Eliminar
                </button>
              </div>
            </li>

            <li className="movie-card is-watched">
              <div className="movie-symbol" aria-hidden="true">✓</div>

              <div className="movie-info">
                <span className="movie-status">YA LA VI</span>
                <h3>Ratatouille</h3>
              </div>

              <div className="movie-actions">
                <label className="watched-control">
                  <input type="checkbox" defaultChecked />
                  <span>Vista</span>
                </label>

                <button
                  className="delete-button"
                  type="button"
                  aria-label="Eliminar Ratatouille"
                >
                  Eliminar
                </button>
              </div>
            </li>
          </ul>

          <footer className="collection-footer">
            <span className="live-dot" aria-hidden="true" />
            Tu lista, a tu ritmo.
          </footer>
        </section>
      </div>

      <footer className="page-footer">
        <span>CORTE — CINE SIN PRISA</span>
        <span>PREPARA LAS COTUFAS.</span>
      </footer>
    </main>
  );
}

export default App;