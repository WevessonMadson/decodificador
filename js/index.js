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