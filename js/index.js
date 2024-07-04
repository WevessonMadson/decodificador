function tratarTexto(texto) {
    return texto.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function criptografar() {
    let texto = tratarTexto(document.querySelector('textarea').value);

    if (texto.length < 3) {
        alert("Texto muito curto, verifique!");
        
        return;
    }

    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');

    document.querySelector(".preresultado").style.display = "none";
    
    document.querySelector(".posresultado__texto").innerText = texto;
    document.querySelector(".posresultado").style.display = "flex";

    document.querySelector('textarea').value = "";
}

function descriptografar() {
    let texto = tratarTexto(document.querySelector("textarea").value);

    if (texto.length < 3) {
        alert("Texto muito curto, verifique!");
        
        return;
    }

    texto = texto.replace(/ufat/g, 'u');    
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/enter/g, 'e');

    document.querySelector(".preresultado").style.display = "none";
    
    document.querySelector(".posresultado__texto").innerText = texto;
    document.querySelector(".posresultado").style.display = "flex";

    document.querySelector('textarea').value = "";
}

function copiarResultado() {
    let texto = document.querySelector(".posresultado__texto").innerText;

    navigator.clipboard.writeText(texto);

    document.querySelector(".copia").innerText = "Copiado!";
    
    document.querySelector(".posresultado__texto").innerText = "Nenhuma mensagem";
    
    setTimeout(function() {
        document.querySelector(".copia").innerText = "Copiar";      
    }, 3000)
}

function toggleMode() {
    const iconDark = document.querySelector("#button-mode-icon");
    const html = document.querySelector("html");

    if (iconDark.innerText == "light_mode") {
        iconDark.innerText = "dark_mode"
        localStorage.setItem("dark", "light_mode");
    } else {
        iconDark.innerText = "light_mode"
        localStorage.setItem("dark", "dark_mode");
    }
    
    html.classList.toggle("dark-mode");
}

function loadMode() {
    let dark = localStorage.getItem("dark") || "light_mode";

    if (dark != "light_mode") {
        document.querySelector("#button-mode-icon").innerText = "light_mode";
        document.querySelector("html").classList.toggle("dark-mode");
    }    
}

document.addEventListener("DOMContentLoaded", loadMode);