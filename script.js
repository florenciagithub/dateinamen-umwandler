function convertName() {
    let inputName = document.getElementById('inputName').value;
    let outputName = inputName.replace(/[<>:"/\\|?*§&]/g, ' ').replace(/\s+/g, ' ').trim();
    document.getElementById('outputName').textContent = outputName;
}
