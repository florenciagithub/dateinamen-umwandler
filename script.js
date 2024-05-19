function convertName() {
    let inputName = document.getElementById('inputName').value;
    let outputName = inputName
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/Ä/g, 'A')
        .replace(/Ö/g, 'O')
        .replace(/Ü/g, 'U')
        .replace(/ß/g, 'ss')
       .replace(/[^a-zA-Z0-9äöüÄÖÜß_ ]/g, '-')  // Ersetzt alle Sonderzeichen außer ä, ö, ü, Ä, Ö, Ü, ß, _ und Leerzeichen durch -
        .replace(/-+/g, '-')  // Ersetzt mehrere aufeinanderfolgende - durch ein einzelnes -
        .trim();
    document.getElementById('outputName').textContent = outputName.charAt(0).toUpperCase() + outputName.slice(1);
}

function convertToLowercase() {
    let outputName = document.getElementById('outputName').textContent;
    if (outputName) {
        outputName = outputName.charAt(0).toUpperCase() + outputName.slice(1).toLowerCase();
        document.getElementById('outputName').textContent = outputName;
    }
}
