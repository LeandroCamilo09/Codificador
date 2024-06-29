// Função para criptografar o texto
function textoCriptografado() {
  let a = "ai";
  let e = "enter";
  let i = "imes";
  let o = "ober";
  let u = "ufat";
  const digText = document.querySelector("#dig-text").value;
  const textCriptografado = document.querySelector(
    ".saida-de-texto_msg-criptografado"
  );
  textCriptografado.innerHTML = digText
    .split("a")
    .join(a)
    .split("e")
    .join(e)
    .split("i")
    .join(i)
    .split("o")
    .join(o)
    .split("u")
    .join(u);
}

// Função para descriptografar o texto
function textoDescriptografado() {
  let ai = "a";
  let enter = "e";
  let imes = "i";
  let ober = "o";
  let ufat = "u";
  const digText = document.querySelector("#dig-text").value;
  const textCriptografado = document.querySelector(
    ".saida-de-texto_msg-criptografado"
  );
  textCriptografado.innerHTML = digText
    .split("ai")
    .join(ai)
    .split("enter")
    .join(enter)
    .split("imes")
    .join(imes)
    .split("ober")
    .join(ober)
    .split("ufat")
    .join(ufat);
}

// Botão de Criptografar
let btnCriptografar = document.querySelector(".btn-criptografar");

btnCriptografar.addEventListener("click", function (event) {
  const h3VisibleOff = document.querySelector(".h3-visibleoff");
  const pVisibleOff = document.querySelector(".p-visibleoff");
  const saidaDeTexto = document.querySelector(".saida-de-texto");
  const copy = document.querySelector("#copy");
  const saidaDeTextoMensagemCriptografado = document.querySelector(
    ".saida-de-texto_msg-criptografado"
  );
  const gato = document.querySelector(".img-gato");
  event.preventDefault();
  console.log("Clicou no botão Criptografar");
  textoCriptografado();
  aumentar_Container();
  saidaDeTextoMensagemCriptografado.style.display = "block";
  gato.style.display = "none";
  h3VisibleOff.style.display = "none";
  pVisibleOff.style.display = "none";
  saidaDeTexto.style.display = "flex";
  copy.style.display = "block";
});

// Botão de Descriptografar
let btnDescriptografar = document.querySelector(".btn-descriptografar");
btnDescriptografar.addEventListener("click", function (event) {
  const h3VisibleOff = document.querySelector(".h3-visibleoff");
  const pVisibleOff = document.querySelector(".p-visibleoff");
  const saidaDeTexto = document.querySelector(".saida-de-texto");
  const saidaDeTextoMensagemCriptografado = document.querySelector(
    ".saida-de-texto_msg-criptografado"
  );
  const copy = document.querySelector("#copy");
  const gato = document.querySelector(".img-gato");
  event.preventDefault();
  console.log("Clicou no botão Descriptografar");
  textoDescriptografado();
  aumentar_Container();
  saidaDeTextoMensagemCriptografado.style.display = "block";
  gato.style.display = "none";
  h3VisibleOff.style.display = "none";
  pVisibleOff.style.display = "none";
  saidaDeTexto.style.display = "flex";
  copy.style.display = "block";
});

// Botão de Copy
let btnDeCopy = document.querySelector("#copy");
btnDeCopy.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Clicou no botão copy");
  copyToClipboar();
});

// Função de copiar
function copyToClipboar() {
  const copyText = document.querySelector(".saida-de-texto_msg-criptografado");
  copyText.select();
  document.execCommand("copy");
}

// Função de aumentar altura do container
function aumentar_Container() {
  const htmlWidth = document.documentElement.clientWidth;
  if (htmlWidth == 375 || htmlWidth == 768) {
    let aumentarContainer = document.querySelector(".saida-de-texto");
    aumentarContainer.style.height = "30rem";
  }
}

//botão de mudar o tema
const temaHtml = document.querySelector("html");
const temaBotao = document.querySelector("#tema");
temaBotao.addEventListener("click", function () {
  temaHtml.classList.toggle("light-mode");

  if (temaBotao.textContent == "Light Mode") {
    this.textContent = "Dark Mode";
  } else {
    this.textContent = "Light Mode";
  }
});
