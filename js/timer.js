const dayEl=document.querySelector('.day');
const hourEl=document.querySelector('.hour');
const minutesEl=document.querySelector('.minute');
const secondsEl=document.querySelector('.second');

// const currentTime = new Date();
// const currentYear = currentTime.getFullYear();
// const summitDay = new Date(`ju 22 $ {currentYear + 1 } 00:00:00:00`);



function updateTimer() {
const  future = new Date('July 28, 2022 00:00:00:00').getTime();
const now = new Date().getTime();
 diff = future - now;

 const days = Math.floor(diff / (1000 * 60 * 60 * 24));
 const hours = Math.floor(diff / (1000 * 60 * 60));
 const mins = Math.floor(diff / (1000 * 60));
 const secs = Math.floor(diff / 1000);

 const d = days < 0 ? 0 :  days;
 const h = hours - days * 24;
 const m = mins - hours * 60;
 const s = secs - mins * 60;

 dayEl.innerText = d 
 hourEl.innerText = h
 minutesEl.innerText = m
 secondsEl.innerText = s

}
setInterval('updateTimer()', 1000);

// function updateTimer(){
//     const CountDate = new Date('July 28, 2022 00:00:00:00').getTime();
//     const now = new Date().getTime();
//     const gap = CountDate - now;


//     const second = 1000;
//     const minute = second * 60;
//     const Hour = minute * 60;
//     const day = Hour * 24

//     const SummitDay =Math.floor() gap/day; 

// }
// updateTimer();

const toggle =()=>{
    var blur =document.getElementById('innercontent-body');
    var modalpop =document.getElementById('modal-popup');
    blur.classList.toggle('active');
    modalpop.classList.toggle('active');
    
}



