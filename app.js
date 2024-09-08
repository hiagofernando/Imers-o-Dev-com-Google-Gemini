function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um inter</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let iten of itens) {

         titulo = iten.titulo.toLowerCase()
         descricao = iten.descricao.toLowerCase()
         tags = iten.tags.toLowerCase()
         

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${iten.titulo}</a>
                        </h2>
                     <p class="descricao-meta">${iten.descricao}</p>
                 </div>
    `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}