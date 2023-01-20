// Funcioanlidad Botón Encriptar:
function encrypt() {
    var text = document.getElementById("inputTextarea").value.toLowerCase();

    var textEncryption = text.replace(/e/igm,"enter");
    var textEncryption = textEncryption.replace(/o/igm,"ober");
    var textEncryption = textEncryption.replace(/i/igm,"imes");
    var textEncryption = textEncryption.replace(/a/igm,"ai");
    var textEncryption = textEncryption.replace(/u/igm,"ufat");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("titleMunecoH2").style.display = "none";
    document.getElementById("textareaRight").innerHTML = textEncryption;
    document.getElementById("clipboardButton").style.display = "show";
    document.getElementById("clipboardButton").style.display = "inherit";
    document.getElementById("imgRight").style.display = "inline";
}

// Funcioanlidad Botón Desencriptar:
function decrypt() {
    var text = document.getElementById("inputTextarea").value.toLowerCase();

    var textEncryption = text.replace(/enter/igm,"e");
    var textEncryption = textEncryption.replace(/ober/igm,"o");
    var textEncryption = textEncryption.replace(/imes/igm,"i");
    var textEncryption = textEncryption.replace(/ai/igm,"a");
    var textEncryption = textEncryption.replace(/ufat/igm,"u");

    document.getElementById("imgRight").style.display = "none"; //Al clicar la imagen desaparecerá.
    document.getElementById("titleMunecoH2").style.display = "none"; //Al clicar el encabezado desaparecerá.
    document.getElementById("textareaRight").innerHTML = textEncryption;//LLama a la variable textEcryption.
    document.getElementById("clipboardButton").style.display = "show"; //Al clicar el botón COPY aparecerá en pantalla.
    document.getElementById("clipboardButton").style.display = "inherit"; //Al clicar el botón se posicionará en la parte superior del DIV.
    document.getElementById("imgRight").style.display = "inline";

}

// Funcionalidad Botón de copiado al portapapeles:
function copyToClipboard() {
    var content = document.querySelector("#textareaRight"); //Selección del elemento.

    content.select(); //Selecciona contenido del elemento.
    document.execCommand("copy");
    alert("¡El texto se ha copiado correctamente!");
}