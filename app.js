const number = document.getElementById('number');

const btn = document.getElementById('btn');
console.log(randomNumber);

const randomNumber = Math.floor(Math.random()*6)+1
btn.addEventListener('click',function(e){
    const userVal = parseInt(numberInput.value, 10);

    if(userVal === randomNumber){
        alert('you are Right');
        return;

        
    }
    
    
    if(userVal > randomNumber ){
        alert('smaller');
        return;

    }

    if(userVal < randomNumber){
        alert('larger');
        return;

    }

})

