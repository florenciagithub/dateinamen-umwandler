function convertName() {
    let inputName = document.getElementById('inputName').value;
    let outputName = inputName
        .replace(/ä/g, 'ä')
        .replace(/ö/g, 'ö')
        .replace(/ü/g, 'ü')
        .replace(/Ä/g, 'Ä')
        .replace(/Ö/g, 'Ö')
        .replace(/Ü/g, 'Ü')
        .replace(/ß/g, 'ß')
        .replace(/[^a-zA-Z0-9äöüÄÖÜß_]/g, '-')  // Ersetzt alle Sonderzeichen außer ä, ö, ü, Ä, Ö, Ü, ß, _ durch -
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
