document.getElementById('searchButton').addEventListener('click', function() {
    var termoBusca = document.getElementById('searchInput').value.toLowerCase();
    var empresasCadastradas = JSON.parse(localStorage.getItem('empresas')) || [];
    var listaResultados = document.getElementById('searchResults');
    listaResultados.innerHTML = ''; 

    var resultados = empresasCadastradas.filter(function(empresa) {
        return empresa.nomeEmpresa.toLowerCase().includes(termoBusca);
    });

    resultados.forEach(function(empresa) {
        var listItem = document.createElement('li');
        listItem.textContent = `Nome: ${empresa.nomeEmpresa}, Número: ${empresa.numeroContato}`;
        listaResultados.appendChild(listItem);
    });
});
