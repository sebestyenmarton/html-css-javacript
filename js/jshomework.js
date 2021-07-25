const employeesArray = ["Pista", " Gyurka", " Lacko"];

function push(){
  const input = document.getElementById('input').value;
  console.log(input);
  if(input == ''){  
    alert("Please type here something!!");
    return false;}
  employeesArray.push(' ' + input);
  document.getElementById("text").innerHTML = employeesArray;
  document.getElementById('input').value = '';
}

function addText() {
  const input2 = document.getElementById('text2').value;
  if(input2 == ''){
    alert("Please type here something!!");
    return false;}
  var table = document.getElementById('texttable');
  table.style.display = 'inline-block';
  table.innerHTML += '<tr><td>' + input2 + '</td><td><input type="button" value="delete" onclick="deleteTr(this)"></td></tr>';
  document.getElementById('text2').value = '';
}

function deleteTr(actualInput) {
  var actualRow = actualInput.parentNode.parentNode.rowIndex;
  document.getElementById("texttable").deleteRow(actualRow);
}
