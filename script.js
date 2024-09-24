
let isRed = false;

document.getElementById('changeColorButton').addEventListener('click', function() {
    
    if (isRed) {
        
        document.body.style.backgroundColor = 'white';
    } else {
      
        document.body.style.backgroundColor = '#Ffff64'; 
    }
    

    isRed = !isRed;
});
