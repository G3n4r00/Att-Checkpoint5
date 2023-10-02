// Novo arquivo AddProduto.jsx
import React, { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
import { useNavigate } from 'react-router-dom';

export default function AddProduto() {
  document.title = "ADICIONAR PRODUTO";
  
  const navigate = useNavigate();
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    desc: '',
    preco: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProdutoComId = {
      ...novoProduto,
      id: ListaProdutos.length + 1,
    };
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
