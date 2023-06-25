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
    .then(json =>{ // função que manipula o objeto
        console.log(json);
        let i;
        for(i=0; i<10; i++){
            document.querySelector('main').innerHTML += `${json.results[i].original_title}<br>`;
        }
    })