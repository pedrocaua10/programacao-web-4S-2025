const estoque = []; 

function adicionar(id, nome, qtd) {
    const produtoExistente = estoque.find(produto => produto.id === id);
    if (produtoExistente) {
        return false; 
    }

    const novoProduto = { id, nome, quantidade: qtd };
    estoque.push(novoProduto);
    return true; 
}

function listar() {
    return estoque; 
}

function remover(id) {
    const index = estoque.findIndex(produto => produto.id === id);
    if (index !== -1) {
        estoque.splice(index, 1);
        return true; 
    }
    return false; 
}

function editar(id, novaQtd) {
    const produto = estoque.find(produto => produto.id === id);
    if (produto) {
        produto.quantidade = novaQtd;
        return true; 
    }
    return false; 
}


module.exports = {
    adicionar,
    listar,
    remover,
    editar,
    estoque
};