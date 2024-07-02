function carregar() {
    var res = window.prompt('Digite o Nome!')
    var nome = window.document.getElementById('nome')
    nome.innerHTML = `Seja bem vindo ${res}`
}
var imagem = document.getElementById("imagem")
 
function bigImg(x) {
  return imagem.innerHTML = "<img src='imagens/mapamental2.png' />"
}
function normalImg(x) {
    return imagem.innerHTML = "Infográfico"
}