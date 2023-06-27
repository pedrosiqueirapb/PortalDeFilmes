/*
// instanciando objeto para fazer requisição
var xhr = new XMLHttpRequest();

// quando o estado do objeto mudar
xhr.onreadystatechange = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200)
        // estado (4) = concluído
        // status (200) = ok
        console.log(xhr.response); // escreve no console o retorno da requisição
}

// tipo da requisição e a url do servidor
xhr.open("GET", "https://api.themoviedb.org/3/movie/popular?api_key=32f42fc190830e705f73dca17d56ebf7");

// mandando requisição
xhr.send();
*/

fetch("https://api.themoviedb.org/3/movie/popular?api_key=32f42fc190830e705f73dca17d56ebf7")
    .then(response=>{ // função que retorna a resposta da requisição
        return response.json(); // retorna no formato JSON (JavaScript Object Notation)
    })
    .then(json =>{ // função que manipula o JSON retornado acima
        exibeFilmes(json.results) 
    })

function exibeFilmes(data){

    document.querySelector('main').innerHTML = "";

    data.forEach(element => { // para cada resultado do objeto JSON
        const{title, vote_average, overview, poster_path} = element;
        const tag = document.createElement('div'); // cria um elemento <div>
        tag.classList.add('filme'); // adiciona a classe filme a esse novo elemento
        tag.innerHTML = `
        <div class="poster">
            <img src="https://image.tmdb.org/t/p/w400/${poster_path}" alt="${title}">
        </div>
        <div class="infos">
            <div class="titulo">
                <h5>${title}</h5>
                <span id="avaliacao">${vote_average}</span>
            </div>

            <div class="sinopse">
            <h5>Sinopse</h5>
            <p>${overview}</p>
        </div>
        </div>
        `; // cria a estrutura da <div>
        
        document.querySelector('main').appendChild(tag); // adiciona o filme dentro da tag <main>
    });
}