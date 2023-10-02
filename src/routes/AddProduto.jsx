// Novo arquivo AddProduto.jsx
import React, { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
import { useNavigate } from 'react-router-dom';

export default function AddProduto() {
  document.title = "ADICIONAR PRODUTO";
  
  // Inicializa o hook useState para controlar o estado do novo produto
  const navigate = useNavigate();
  const [novoProduto, setNovoProduto] = useState({
    nome: '', // Inicializa o nome do novo produto como uma string vazia
    desc: '', // Inicializa a descrição do novo produto como uma string vazia
    preco: 0, // Inicializa o preço do novo produto como 0
  });

   // Função para lidar com mudanças nos campos de input
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Atualiza o estado do novo produto com os valores dos campos de input usando spread operator
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    // Impede o comportamento padrão do formulário de recarregar a página
    e.preventDefault();
    // Cria um novo objeto de produto com um ID único baseado no comprimento da lista de produtos existente
    const novoProdutoComId = {
      ...novoProduto, // Mantém as propriedades existentes do novo produto
      id: ListaProdutos.length + 1, // Adiciona uma nova propriedade "id" ao novo produto com um valor único
    };
    // Adiciona o novo produto à lista de produtos existente e alerta o usuário
    ListaProdutos.push(novoProdutoComId);
    alert('Produto adicionado com SUCESSO!');
    navigate('/produtos');
  };

  return (
    <>
      <div>
        <h1>Adicionar Novo Produto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="idNome">Nome</label>
            <input type="text" name="nome" id="idNome" value={novoProduto.nome} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição</label>
            <input type="text" name="desc" id="idDesc" value={novoProduto.desc} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="idPreco">Preço</label>
            <input type="number" name="preco" id="idPreco" value={novoProduto.preco} onChange={handleChange} required />
          </div>
          <div>
            <button type="submit">ADICIONAR</button>
          </div>
        </form>
      </div>
    </>
  );
}
