import { Link } from "react-router-dom";
import { AiFillEdit as Editar } from "react-icons/ai";
import { RiDeleteBin2Fill as Excluir } from "react-icons/ri";
import style from "./Produtos.module.css";
import { useState, useEffect } from "react";
import { ListaProdutos } from "../components/ListaProdutos";

export default function Produtos() {
  console.log("Componente Produtos renderizado");
  document.title = "Lista de Produtos";

  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

  useEffect(() => {
    // Carregue os produtos da fonte de dados (ListaProdutos)
    setListaProdutosLocal(ListaProdutos);
  }, []);

  return (
    <div>
      <h1>Produtos</h1>

      <table className={style.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>AÇÕES</th>
          </tr>
        </thead>

        <tbody>
          {listaProdutosLocal.map((item, indice) => (
            <tr key={indice} className={style.lineTbl}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>{item.preco}</td>
              <td>
                <Link to={`/editar/produtos/${item.id}`}>
                  <Editar />
                </Link>
                <Link to={`/excluir/produtos/${item.id}`}>
                  <Excluir />
                </Link>
                <Link to={`/adicionar/produtos/${item.id}`}>
                  <Adicionar />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              PRODUTOS INFORMÁTICOS - QTD = {listaProdutosLocal.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
