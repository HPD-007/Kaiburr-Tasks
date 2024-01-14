var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData);
    }
    resetForm();
    }

function readFormData(){
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Theid"] = document.getElementById("Theid").value;
    formData["assignee"] = document.getElementById("assignee").value;
    formData["Project"] = document.getElementById("Project").value;
    return formData;
}


function insertNewRecord(data){
    var table = document.getElementById("People List").getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Theid;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.assignee;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Project;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}


function resetForm(){
    document.getElementById('Name').value = '';
    document.getElementById('Theid').value = '';
    document.getElementById('assignee').value = '';
    document.getElementById('Project').value = '';
    selectedRow = null;
}


function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Theid').value = selectedRow.cells[1].innerHTML;
    document.getElementById('assignee').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Project').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Theid;
    selectedRow.cells[2].innerHTML = formData.assignee;
    selectedRow.cells[3].innerHTML = formData.Project;
}
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('People List').deleteRow(row.rowIndex); // Fix here
        resetForm();
    }
}
