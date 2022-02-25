const billAmount = document.querySelector("#bill");
const servicePercent = document.querySelector("#service");
const peopleCount = document.querySelector("#people");
const buttonCalculate = document.querySelector(".calculate");
const tipAmount = document.querySelector(".tip");
const eachPerson = document.querySelector("#each");

buttonCalculate.addEventListener("click",(e)=>{
    
    

    let total = Math.round((+servicePercent.value * +billAmount.value) / +peopleCount.value);

    if (billAmount.value == "" || +peopleCount.value == 0) {
        alert("Please enter values")
    }else if (peopleCount.value <= 1 ){
        peopleCount.value = 1;
        tipAmount.innerHTML += total.toFixed(2);
        document.querySelector(".amount").style.display = "block";
        tipAmount.style.display = "block"
        eachPerson.style.display = "none";
        buttonCalculate.style.display = "none";


    }else{
       tipAmount.innerHTML += total.toFixed(2);
       tipAmount.style.display = "block"
       document.querySelector(".amount").style.display = "block";
       eachPerson.style.display = "block";
       buttonCalculate.style.display = "none";
       
  
    }
       e.preventDefault();
    
});

// restart
document.querySelector(".restart").addEventListener("click", () =>{
    tipAmount.innerHTML = "$";
    tipAmount.style.display = "none"
    document.querySelector(".amount").style.display = "none";
    buttonCalculate.style.display = "block";
   
})

//////********************************* */







