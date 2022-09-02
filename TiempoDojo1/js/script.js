function displayAlert(elemento_a){
    console.log(elemento_a);

    var location=elemento_a.innerText;
    alert("Cargando informe meteorológico de" + location);
}

function dismissCookie(){
    var cookie_element =document.querySelector(".cookie");

    cookie_element.remove();
}

function changeTemperature(element_select){
    var foc= element_select.value;

    console.log(foc);

    for(var i=1; i<=8; i++){
        var element_temp=document.querySelector
        ("#temp"+i);

        var temperatura =element_temp.innerText;
        temperatura=parseInt(temperatura);

        var new_temp=0;

        if(foc=== "C"){
            new_temp= Math.round((temperatura-32) * 5/9);
        } else{
            new_temp =Math.round((temperatura*9/5) +32);

        }

        element_temp.innerText=new_temp;
    }

}