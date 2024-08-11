const secretKey = 'mi_clave_secreta';

function encryptText() {
    const input = document.getElementById('inputText').value;
    if (input.trim() === '') {
        alert('Por favor, ingrese el texto para encriptar.');
        return;
    }
    const encrypted = CryptoJS.AES.encrypt(input, secretKey).toString();
    document.getElementById('outputText').innerText = encrypted;
    document.getElementById('tituloOutput').innerText = 'Texto Encriptado';
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    if (input.trim() === '') {
        alert('Por favor, ingrese el texto encriptado para desencriptar.');
        return;
    }
    try {
        const bytes = CryptoJS.AES.decrypt(input, secretKey);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        document.getElementById('outputText').innerText = decrypted;
        document.getElementById('tituloOutput').innerText = 'Texto Desencriptado';
    } catch (e) {
        document.getElementById('outputText').innerText = 'Error en la desencriptación. Asegúrese de que el texto sea válido.';
        document.getElementById('tituloOutput').innerText = 'Texto ...';
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerText = '';
    document.getElementById('tituloOutput').innerText = 'Texto ...';
}

function copyToClipboard() {
    const output = document.getElementById('outputText').innerText;
    if (output.trim() === '') {
        alert('No hay texto para copiar.');
        return;
    }
    navigator.clipboard.writeText(output).then(() => {
        const copyButton = document.getElementById('copyButton');
        copyButton.innerText = 'Copiado';
        setTimeout(() => copyButton.innerText = 'Copiar Encriptado', 2000);
    }, () => {
        alert('Error al copiar el texto');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const containerInput = document.querySelector('.containerInput');
    const containerOutput = document.querySelector('.containerOutput');

    inputText.addEventListener('focus', () => {
        containerInput.classList.add('hoverActive');
    });

    inputText.addEventListener('blur', () => {
        containerInput.classList.remove('hoverActive');
    });

    document.getElementById('outputText').addEventListener('focus', () => {
        containerOutput.classList.add('hoverActiveOutput');
    });

    document.getElementById('outputText').addEventListener('blur', () => {
        containerOutput.classList.remove('hoverActiveOutput');
    });
});
