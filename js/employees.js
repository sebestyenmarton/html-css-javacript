function showHideSalary() {
    const elements = document.getElementsByClassName('salary');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('hideSalary');
    }
    const showHideButton = document.getElementById('showHideSalary');
    const hiddenSalaries = document.getElementsByClassName('hideSalary');    
    showHideButton.innerText = hiddenSalaries.length ? 'Show Salary' :'Hide Salary';
}

console.log("Hello");

function pushDatas(){
    const input1 = document.getElementById('fname').value;
    const input2 = document.getElementById('ffunction').value;
    const input3 = document.getElementById('fsalary').value;
    const object = { name: input1, function: input2, salary: input3 }
    alert(JSON.stringify(object));
}

$(document).ready(function(){

})