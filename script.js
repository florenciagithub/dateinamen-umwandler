function convertName() {
    let inputName = document.getElementById('inputName').value;
    let outputName = inputName
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ß/g, 'ss')
        .replace(/[^a-zA-Z0-9 ]/g, ' ')  // Ersetzt alle Sonderzeichen durch Leerzeichen
        .replace(/\s+/g, ' ')  // Ersetzt mehrere Leerzeichen durch ein einzelnes Leerzeichen
        .trim();
    document.getElementById('outputName').textContent = outputName.charAt(0).toUpperCase() + outputName.slice(1);
}

function convertToLowercase() {
    let outputName = document.getElementById('outputName').textContent;
    outputName = outputName.charAt(0) + outputName.slice(1).toLowerCase();
    document.getElementById('outputName').textContent = outputName;
}
