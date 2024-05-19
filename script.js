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
    let textarea = document.createElement('textarea');
    textarea.value = outputText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Temporäre visuelle Rückmeldung auf dem Button
    let copyButton = document.getElementById('copyButton');
    copyButton.textContent = 'Kopiert!';
    setTimeout(() => {
        copyButton.textContent = 'C';
    }, 2000); // Rücksetzen nach 2 Sekunden
}

