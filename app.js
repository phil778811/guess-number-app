const numberImput =document.getElementById('number');
const btn =document.getElementById('btn');
const randomNumber = Math.floor(Math.random()*6)+1;

btn.addEventListener('click',function(){
    const userVal = parseInt(numberInput.value,10);
    
    if(userVal===randomNumber){
        alert('You are Right');
        return;
    }
    
    if(useVal>randomNumber){
        alert('smaller');
        return;
    }
    if(userVal<randomNumber){
        alert('large');
    
    }
});
