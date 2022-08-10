import { useContext } from "react";
import letrasContext from "../context/LetrasProvider";

const useLetras = () => {
  return useContext(letrasContext);
};
export default useLetras;
