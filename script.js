const tableParent = document.getElementById('sampleTable');
const insertBtn = document.querySelector('input[type="button"]'); // Select button by type "button"


function insert_Row() {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>New Cell1</td>
    <td>New Cell2</td>
    `;
    tableParent.prepend(row);
}
