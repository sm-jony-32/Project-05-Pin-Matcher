//generate pin

let generatePin = document.getElementById('generate-pin');
let showPin = document.getElementById('generate-random-pin');


generatePin.addEventListener('click',function(){
    console.log('clicked');
    let random = (Math.random()*100000+'').split('.')[0];
    showPin.value = random;
        
    console.log(random);
})


// calculator

const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click',function(event){
    const digit = (event.target.innerText);
    if(isNaN(digit)){
        //handle backspace
        //handle back
    }
    
    else{
        const typedInput = document.getElementById('cal-screen');
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin

function verifyPin(){
    const pin = document.getElementById('generate-random-pin').value;
    const typedPin = document.getElementById('cal-screen').value;
    if(pin===typedPin){
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'block';
    }
   
    else{
        const incorrect = document.getElementById('incorrect-pin');
        incorrect.style.display = 'block';
    }
}

