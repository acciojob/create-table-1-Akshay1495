const tableParent = document.getElementById('sampleTable');
const insertBtn = document.querySelector('input[type="button"]');

insertBtn.addEventListener('click', insert_Row);

function insert_Row() {
    const newRow = tableParent.insertRow(0);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
}
