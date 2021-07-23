const employeesArray = ["Pista", " Gyurka", " Lacko"];

function push(){
  const input = document.getElementById('input').value;
  console.log(input);
  if(input == ''){alert("Please type here something!!");}
  employeesArray.push(' ' + input);
  document.getElementById("text").innerHTML = employeesArray;
  document.getElementById('input').value = '';
}