import React from "react";
import useLetras from "../hooks/useLetras";
import Formulario from "./Formulario";
import Alerta from "./Alerta";
import Letra from "./Letra";
import Spiner from "./Spiner";

const AppLetras = () => {
  const { alerta, letra, cargando } = useLetras();
  return (
    <>
      <header>Busqueda de letras de canciones</header>
      <Formulario />
      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : cargando ? (
          <Spiner />
        ) : (
          <p className="text-center">
            Busca las letras de tus artistas favoritos
          </p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
