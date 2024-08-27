function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let messageTitle = document.getElementById("messageTitle");
    let messageParagraph = document.getElementById("messageParagraph");
    let icon = document.getElementById("icon");

    let encryptedText = inputText
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (inputText.length !== 0) {
        document.getElementById("inputText").value = encryptedText;
        messageTitle.textContent = "Texto encriptado con éxito";
        messageParagraph.textContent = "";
        icon.src = "./img/encriptado.jpg"; // Cambia la imagen
    } else {
        icon.src = "./img/muñeco.png"; // Restablece la imagen
        messageTitle.textContent = "Ningún mensaje fue encontrado";
        messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let messageTitle = document.getElementById("messageTitle");
    let messageParagraph = document.getElementById("messageParagraph");
    let icon = document.getElementById("icon");

    let decryptedText = inputText
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (inputText.length !== 0) {
        document.getElementById("inputText").value = decryptedText;
        messageTitle.textContent = "Texto desencriptado con éxito";
        messageParagraph.textContent = "";
        icon.src = "./img/desencriptado.jpg"; // Cambia la imagen
    } else {
        icon.src = "./img/muñeco.png"; // Restablece la imagen
        messageTitle.textContent = "Ningún mensaje fue encontrado";
        messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function copyText() {
    let inputText = document.getElementById("inputText").value; // Obtén el valor del textarea

    navigator.clipboard.writeText(inputText).then(function() {
        swal("Éxito", "Texto copiado al portapapeles", "success");
    }, function(err) {
        swal("Error", "No se pudo copiar el texto", "error");
    });
}
