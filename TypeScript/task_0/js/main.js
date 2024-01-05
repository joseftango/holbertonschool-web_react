var student1 = {
    firstName: 'Oussema',
    lastName: 'Muhamed',
    age: 26,
    location: 'Palestine, Gaza'
};
var student2 = {
    firstName: 'Mahmud',
    lastName: 'Nabulsi',
    age: 22,
    location: 'Palestine, AlKhalil'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function (student) {
    var newRow = table.insertRow();
    var newRowFirstName = newRow.insertCell();
    var newRowLocation = newRow.insertCell();
    newRowFirstName.innerHTML = student.firstName;
    newRowLocation.innerHTML = student.location;
});
