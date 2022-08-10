import React from "react";
import useLetras from "../hooks/useLetras";
import Spiner from "./Spiner";

const Letra = () => {
  const { letra, titulo, artista, cargando } = useLetras();
  return cargando ? (
    <Spiner />
  ) : (
    <>
      <h1 className="tema">{titulo}</h1>
      <h3 className="banda">{artista}</h3>
      <div className="letra">{letra}</div>;
    </>
  );
};

export default Letra;
