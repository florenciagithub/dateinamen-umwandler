function convertName() {
    let inputName = document.getElementById('inputName').value;

    let outputName = inputName
        
        // Ersetzt & durch "and"
        .replace(/&/g, 'and')
        // Ersetzt + durch "and"
        .replace(/\+/g, 'and')

        // Ersetzt die häufigsten Sonderzeichen durch -
        .replace(/!/g, '-')
        .replace(/"/g, '-')
        .replace(/#/g, '-')
        .replace(/\$/g, '-')
        .replace(/%/g, '-')
        .replace(/'/g, '-')
        .replace(/\(/g, '-')
        .replace(/\)/g, '-')
        .replace(/\*/g, '-')
        .replace(/,/g, '-')
        .replace(/\./g, '-')
        .replace(/\//g, '-')
        .replace(/:/g, '-')
        .replace(/;/g, '-')
        .replace(/</g, '-')
        .replace(/=/g, '-')
        .replace(/>/g, '-')
        .replace(/\?/g, '-')
        .replace(/@/g, '-')
        .replace(/\[/g, '-')
        .replace(/\\/g, '-')
        .replace(/\]/g, '-')
        .replace(/\^/g, '-')
        .replace(/`/g, '-')
        .replace(/\{/g, '-')
        .replace(/\|/g, '-')
        .replace(/\}/g, '-')
        .replace(/~/g, '-')
        .replace(/-/g, '-')  // Ersetzt Bindestrich durch Bindestrich, um sicherzustellen, dass dieser immer korrekt behandelt wird

        // Mehrere aufeinanderfolgende Bindestriche werden durch ein einzelnes ersetzt
        .replace(/--+/g, '-')
        
        // Trimmen von überflüssigen Bindestrichen am Anfang und Ende
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
function copyOutputText() {
    let outputText = document.getElementById('outputName').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Ausgabetext kopiert!');
    }).catch(err => {
        console.error('Fehler beim Kopieren: ', err);
    });
}
