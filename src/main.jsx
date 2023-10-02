// main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import EditarProdutos from './routes/EditarProdutos.jsx';
import ExcluirProdutos from './routes/ExcluirProdutos.jsx';
import Erro404 from './routes/Erro404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro404 />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos redirectToExcluirProdutos={redirectToExcluirProdutos} /> },
      { path: '/editar/produtos/:id', element: <EditarProdutos /> },
      { path: '/excluir/produtos/:id', element: <ExcluirProdutos /> },
    ],
  },
]);

function redirectToExcluirProdutos(history, id) {
  history.push(`/excluir/produtos/${id}`);
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
