import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdicionarProduto = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const navigate = useNavigate();

  const handleAdicionarProduto = () => {
    // Valide os dados do formulário, se necessário

    // Crie um objeto para o novo produto
    const novoProduto = {
      id: new Date().getTime(), // Gere um ID único
      nome: nome,
      desc: descricao,
      preco: parseFloat(preco),
    };

    // Salve ou envie o novo produto para o seu servidor/API, por exemplo.
    // Em vez disso, por simplicidade, você pode adicionar o produto à ListaProdutos localmente.

    ListaProdutos.push(novoProduto);

    alert("Produto adicionado com sucesso!");

    // Redirecione o usuário de volta para a página de produtos após adicionar o produto.
    navigate("/produtos");
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label>Descrição:</label>
      <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <label>Preço:</label>
      <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
      <button onClick={handleAdicionarProduto}>Adicionar Produto</button>
    </div>
  );
};

export default AdicionarProduto;
