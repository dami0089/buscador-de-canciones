import { React, useState } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {
  const { setAlerta, busquedaLetra, recibirTitulo } = useLetras();
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Coloca nombre de artista y cancion");
    }
    busquedaLetra(busqueda);
    recibirTitulo(busqueda);
  };
  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por Artistas y Canciones</legend>
      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Nombre Artista"
            value={busqueda.artista}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Cancion</label>
          <input
            type="text"
            name="cancion"
            placeholder="Nombre de la Cancion"
            value={busqueda.cancion}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
