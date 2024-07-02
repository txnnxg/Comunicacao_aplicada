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

function myFunction(x) {
  if (x.matches) { // If media query matches
    pic = document.getElementById("imagem")
    pic.style.visibility = "hidden"
    fot = document.getElementById("fotosozinha")
    fot.innerHTML = "<img src='imagens/mapamental2.png' />"
  } else{
    pic.style.visibility = "visible"
  }
}

var x = window.matchMedia("(max-width: 849px)")
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});