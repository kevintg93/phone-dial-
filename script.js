
let btns = document.getElementsByClassName('btn');
let input = document.querySelector('.input');
const sEvent = new Event("checkInput")
let btnCall = document.getElementById('Btncall')
let selectTag= document.querySelector('#country_code');

function checkCodeValidity(inputCodeValue){
    fetch('./IntDialing.txt')
    .then((res)=> res.text())
    .then((text)=>{
        let codeArray = text.split("\r\n");
        for(const code of codeArray){
            console.log(code)
            if (inputCodeValue === code ){
                return true;
            }      
        }
        return false;
    })
}


for(let i= 0;i<btns.length;i++){
    btns[i].addEventListener('click',(event)=>{
        let button = event.target;
        input.value += button.innerHTML;
    });
    
}



input.addEventListener("checkInput", (event)=>{
    let value = event.target;
    inputValue = value.value;
    
    if(inputValue.slice(0,2) === "00"){
        value.value = "+" + inputValue.slice(2,);
    }else if(checkCodeValidity(inputValue.slice(0,4))){
        input.style.background= "#008000";

    }else{
        input.style.background= "#ff0000";
    }
    

});


btnCall.addEventListener('click',(e)=>{
    let btnClick = e.target;

    input.dispatchEvent(sEvent)
})


