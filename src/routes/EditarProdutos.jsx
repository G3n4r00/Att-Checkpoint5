import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos';

export default function EditarProdutos() {
  // Define o título da página
  document.title = "EDITAR PRODUTO";

  // Obtém a função de navegação do React Router
  const navigate = useNavigate();
  // Obtém o parâmetro 'id' da URL usando useParams
  const { id } = useParams();
  // Filtra o produto com base no 'id' da URL e obtém o primeiro resultado
  const produtoRecuperado = ListaProdutos.filter((produto) => produto.id == id)[0]

  // Define o estado do componente para armazenar as informações do produto
  const [produto, setProduto] = useState({
    id: produtoRecuperado.id,
    nome: produtoRecuperado.nome,
    desc: produtoRecuperado.desc,
    img: produtoRecuperado.img,
    preco: produtoRecuperado.preco,
  })

  // Função chamada quando os campos de entrada mudam
  const handleChange = (e) => {
    // Destructuring para obter 'name' e 'value' do elemento de entrada
    const { name, value } = e.target;
    // Atualiza o estado 'produto' com as novas informações usando o operador de espalhamento (spread)
    setProduto({ ...produto, [name]: value });
  }

  // Função chamada quando o formulário é submetido
  const handleSubmit = (e) => {
    e.preventDefault();
    let indice;
    // Encontra o índice do produto a ser editado na lista usando 'indexOf'
    indice = ListaProdutos.findIndex(item => item.id == produto.id);

    // Altera o produto na lista com o método 'splice'
    ListaProdutos.splice(indice, 1, produto);

    // Redireciona o usuário de volta para a página de produtos
    navigate('/produtos');
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange} />
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
