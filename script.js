function convertName() {
    let inputName = document.getElementById('inputName').value;
    // Erlaubt ä, ö, ü und ß neben alphanumerischen Zeichen
    let outputName = inputName.replace(/[^a-zA-Z0-9äöüß]/g, ' ').replace(/\s+/g, ' ').trim();
    document.getElementById('outputName').textContent = outputName;
}

function convertNameAndCapitalize() {
    let inputName = document.getElementById('inputName').value;
    // Erlaubt ä, ö, ü und ß neben alphanumerischen Zeichen
    let outputName = inputName.replace(/[^a-zA-Z0-9äöüß]/g, ' ').replace(/\s+/g, ' ').trim();
    outputName = outputName.charAt(0).toUpperCase() + outputName.slice(1).toLowerCase();
    document.getElementById('outputName').textContent = outputName;
}
