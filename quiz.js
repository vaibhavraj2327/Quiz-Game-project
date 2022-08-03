

function pageOnLoad(){
    let data = [{question: "What is my god damn name", options: ["Vaibhav","Nonu","Both"], correctA: "Both"},
{question: "what is my mode of transport", options: ["Scooty","Bike","Car"], correctA: "Scooty"}]
   
document.getElementById('questiOn1').innerHTML = data[0].question;

for (let index = 0; index < 3; index++) {
    document.getElementById("option"+[index]).innerHTML = data[0].options[index];
}
}




    
    //document.getElementById("option1").innerHTML = data[0].options[1]
    
    //document.getElementById("option2").innerHTML = data[0].options[2]
    
    








