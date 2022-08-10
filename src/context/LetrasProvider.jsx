import { useState, createContext } from "react";
import axios from "axios";

const letrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState("");
  const [letra, setLetra] = useState("");
  const [cargando, setCargando] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [artista, setArtista] = useState("");

  const busquedaLetra = async (busqueda) => {
    setCargando(true);
    try {
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios(url);
      setLetra(data.lyrics);
      setAlerta("");
      console.log(data.lyrics);
    } catch (error) {
      setAlerta("Cancion No Encontrada");
    }
    setCargando(false);
  };

  const recibirTitulo = (busqueda) => {
    const { artista, cancion } = busqueda;

    setTitulo(cancion);
    setArtista(artista);
  };

  return (
    <letrasContext.Provider
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
        cargando,
        recibirTitulo,
        titulo,
        artista,
      }}
    >
      {children}
    </letrasContext.Provider>
  );
};

export { LetrasProvider };

export default letrasContext;
