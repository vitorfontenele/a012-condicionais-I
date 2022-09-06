const nacionalidade = prompt("Escreva aqui sua nacionalidade:").toLowerCase();

const nacionalidades = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"];

if (nacionalidades.includes(nacionalidade)){
    console.log(nacionalidade);
} else {
    console.log("nacionalidade não encontrada");
}

