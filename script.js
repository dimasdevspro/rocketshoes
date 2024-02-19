const imagemPadrao = document.getElementById("image-principal");
imagemPadrao.src = "./assets/tenis-1-galeria.png"

function mostrarImagem(img){
    const imagemGrande=document.getElementById("image-principal");
    imagemGrande.src=img.src;
}
