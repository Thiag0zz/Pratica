function buscarEmpresasCadastradas() {
    var empresasCadastradas = JSON.parse(localStorage.getItem('empresas')) || [];
    var listaEmpresas = document.getElementById('registeredCompanies');
    listaEmpresas.innerHTML = ''; 

    empresasCadastradas.forEach(function(empresa) {
        var listItem = document.createElement('li');
        listItem.textContent = `Nome: ${empresa.nomeEmpresa}, Número: ${empresa.numeroContato}`;
        listaEmpresas.appendChild(listItem);
    });
}

document.getElementById('searchButton').addEventListener('click', function() {
    var termoBusca = document.getElementById('searchInput').value.toLowerCase();
    var empresasCadastradas = JSON.parse(localStorage.getItem('empresas')) || [];
    var resultados = empresasCadastradas.filter(function(empresa) {
        return empresa.nomeEmpresa.toLowerCase().includes(termoBusca);
    });
    var listaResultados = document.getElementById('searchResults');
    listaResultados.innerHTML = ''; 

    resultados.forEach(function(empresa) {
        var listItem = document.createElement('li');
        listItem.textContent = `Nome: ${empresa.nomeEmpresa}, Número: ${empresa.numeroContato}`;
        listaResultados.appendChild(listItem);
    });
});

// Ao carregar a página, buscar e exibir as empresas cadastradas
window.onload = function() {
    buscarEmpresasCadastradas();
};

