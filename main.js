let numPer = document.querySelector(".numPer")
let load = document.querySelector(".load")
var complete = document.querySelector('.complete');

let count = 0;
let per = 0;
let loading = setInterval(function animate(){
    if(count == 100 && per == 500){
        numPer.classList.add('text-blink');
        complete.style.display = 'block';
        clearInterval()
    }else{
        per += 5
        count += 1
        load.style.width = `${per}px`;
        numPer.textContent = `${count}%`;
    }
} , 50);
