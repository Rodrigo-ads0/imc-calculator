function calculate(){
    var name= document.getElementById('name').value
    var height= (document.getElementById('height').value)/100
    var teste= document.getElementById('height').value
    var Weight=document.getElementById('Weight').value
    var error= document.getElementById('name')
    var error2= document.querySelector(".teste")
    var error3= document.getElementById('Weight')

    var imc = Weight / height **2;
    var text=""
    if(imc<18.5){
       text="Você está magro!"
    } else if (imc < 24.9){
        text="Você está normal!"
    } else if (imc < 29.9){
        text="Você está acima do peso!"
    } else if (imc < 39.9){
        text="Você está com obesidade!"
    } else if (imc > 39.9){
        text="Você está com obesidade mórbida!"
    } 

    if (name == ''){
        error.style.backgroundColor = "red"
        error.style.borderColor = "white"
    } if (height == '') {
        error2.style.backgroundColor = "red"
        error2.style.borderColor = "white"
    } if (Weight == ''){
        error3.style.backgroundColor = "red"
        error3.style.borderColor = "white"
    }  if ((name && teste && Weight) === ''){
        document.getElementById('result').innerText= ("Ops! Preencha Todos os campos")

    }  else {
        document.getElementById('result').innerText=name+(", seu imc é ")+imc.toFixed(2)+(" ")+text
        error.style.backgroundColor = "white"
        error2.style.backgroundColor = "white"
        error3.style.backgroundColor = "white"
    } 
}