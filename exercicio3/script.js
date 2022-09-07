const nacionalidade = prompt("Escreva aqui sua nacionalidade:").toLowerCase();

const nacionalidadesArr = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"];

if (nacionalidadesArr.includes(nacionalidade)){
    console.log(nacionalidade);
} else {
    console.log("nacionalidade não encontrada");
}

