import { useState } from "react";

function App() {
  const [textoInput, setTextoInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  //vemos cuales son las peliculas pendientes por ver realmente
  const pendientesReales = peliculas.filter((pelicula) => {
    return pelicula.estado == 0;
  }).length;

  //capturamos el valor
  function capturandoTexto(evento) {
    setTextoInput(evento.target.value);
  }

  //agregamos el nuevo elemento
  function agregarNuevaPeli(evento) {
    evento.preventDefault();

    if (textoInput == "") {
      alert("No puedes agregar una peli vacia");
      return;
    }
    //esto es para agregar una pelicula nuevo
    const nuevaPelicula = {
      id: crypto.randomUUID(),
      nombre: textoInput.trim(),
      estado: 0,
    };

    setPeliculas([...peliculas, nuevaPelicula]);
    setTextoInput("");
  }

  //actualizamos el estado
  function cambiandoElEstadoDeLaPeli(id, checkado) {
    //console.log(id, checkado);
    const peliculasActualizadas = peliculas.map((pelicula) => {
      if (pelicula.id == id) {
        return {
          ...pelicula,
          estado: checkado ? 1 : 0,
        };
      }
      return pelicula;
    });

    setPeliculas(peliculasActualizadas);
  }

  //borramos la peli
  function eliminandoLaPeli(id) {
    const listaSinLaPeli = peliculas.filter((pelicula) => {
      return pelicula.id != id;
    });

    setPeliculas(listaSinLaPeli);
  }

  return (
    <main className="cinema-app">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Inicio de Corte">
          <span className="brand-icon" aria-hidden="true">
            ▶
          </span>
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
            <span className="panel-number" aria-hidden="true">
              01 /
            </span>
            <h2 id="add-title">A la lista.</h2>
            <p>¿Qué película te recomendaron?</p>

            <form className="movie-form" onSubmit={agregarNuevaPeli}>
              <label htmlFor="movie-title">Título de la película</label>

              <input
                id="movie-title"
                name="titulo"
                type="text"
                placeholder="Ej. El viaje de Chihiro"
                maxLength={100}
                autoComplete="off"
                value={textoInput}
                onChange={capturandoTexto}
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

            <span className="pending-badge">{pendientesReales} por ver</span>
          </header>

          <ul className="movie-list">
            {peliculas.length > 0
              ? peliculas.map((pelicula) => {
                  return (
                    <li
                      key={pelicula.id}
                      className={`movie-card ${pelicula.estado == 1 ? "is-watched" : ""}`}
                    >
                      <div className="movie-symbol" aria-hidden="true">
                        {pelicula.estado != 1 ? "▶" : "✓"}
                      </div>

                      <div className="movie-info">
                        <span className="movie-status">
                          {pelicula.estado != 1 ? "POR VER" : "YA LA VI"}
                        </span>
                        <h3>{pelicula.nombre}</h3>
                      </div>

                      <div className="movie-actions">
                        <label className="watched-control">
                          <input
                            type="checkbox"
                            onChange={(evento) => {
                              cambiandoElEstadoDeLaPeli(
                                pelicula.id,
                                evento.target.checked,
                              );
                            }}
                          />
                          <span>
                            {pelicula.estado != 1 ? "POR VER" : "VISTA"}
                          </span>
                        </label>

                        <button
                          className="delete-button"
                          type="button"
                          aria-label={`Eliminar ${pelicula.nombre}`}
                          onClick={() => {
                            eliminandoLaPeli(pelicula.id);
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </li>
                  );
                })
              : `Nada en la lista. Agrega nuevas pelis`}
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
