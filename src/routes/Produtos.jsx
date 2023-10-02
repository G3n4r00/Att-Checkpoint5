import { Link } from "react-router-dom";
import { AiFillEdit as Editar } from "react-icons/ai";
import { RiDeleteBin2Fill as Excluir } from "react-icons/ri";
import style from "./Produtos.module.css";
import { useState, useEffect } from "react";
import { ListaProdutos } from "../components/ListaProdutos";

export default function Produtos() {
  // Registra a renderização do componente no console
  console.log("Componente Produtos renderizado");
  // Define o título da página
  document.title = "Lista de Produtos";

  // Define o estado local para armazenar a lista de produtos
  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

  useEffect(() => {
    // Carrega os produtos da fonte de dados (ListaProdutos) quando o componente é montado
    setListaProdutosLocal(ListaProdutos);
  }, []);

  return (
    <div>
      <h1>Produtos</h1>

      {/* Adiciona um link para a rota de adição de produtos */}
      <Link to="/adicionar/produto">
        <button className={`${style.adicionarBtn} ${style.seuEstiloEspecifico}`}>Adicionar Produto</button>
      </Link>

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
                {/* Cria links para editar e excluir produtos */}
                <Link to={`/editar/produtos/${item.id}`}>
                  <Editar />
                </Link>
                <Link to={`/excluir/produtos/${item.id}`}>
                  <Excluir />
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
