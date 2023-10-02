import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <>
      <h1 className={style.titulo}>EXERCÍCIO 2</h1>
      <div className={style.container}>
        {/* Iniciando a área do cabeçalho */}
        <Cabecalho />

          <Outlet/>
       
        {/* Iniciando a área do rodapé */}
        <Rodape />
      </div>
    </>
  );
}
