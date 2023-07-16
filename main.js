let songindex =0;
let audioelement= new Audio('./song1.mp3')
let masterplay = document.querySelector('#masterplay')
let myprogressbar = document.querySelector('#myprogressbar')
let songimg = document.querySelector('#songimg')
let mastername = document.querySelector('#mastername')
let songs = [
    {Songname:"Duniya", filepath:"./song1.m3"},
    {Songname:"Kesariya", filepath:"./song2.mp3"},
    {Songname:"Deva Deva", filepath:"./song3.mp3"},
    {Songname:"Ranjha", filepath:"./song4.mp3"},
    {Songname:"Teri Mitti", filepath:"./song5.mp3"},
    {Songname:"Namo Namo", filepath:"./song6.mp3"},
    {Songname:"Tum Hi Ho", filepath:"./song7.mp3"},
    {Songname:"Tujhme Rab Dikhta H", filepath:"./song8.mp3"},
    {Songname:"Enna Sona", filepath:"./song9.mp3"},
    {Songname:"Kun Faya Kun", filepath:"./song10.mp3"},
]


masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('bi-play-circle-fill');
        masterplay.classList.add('bi-pause-circle-fill');
        songimg.style.opacity=1;
    }
   else{
    audioelement.pause();   
    masterplay.classList.remove('bi-pause-circle-fill');
    masterplay.classList.add('bi-play-circle-fill');
    songimg.style.opacity=0;
   }
})

audioelement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value= progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime =(myprogressbar.value*audioelement.duration)/100; 
})


//songs play individual
const makeplay = ()=>{
Array.from(document.getElementsByClassName('songplay')).forEach((elem)=>{
   elem.classList.remove('bi-pause-circle-fill');
   elem.classList.add('bi-play-circle-fill') ;
})
}

Array.from(document.getElementsByClassName('songplay')).forEach((elem)=>{
    elem.addEventListener('click', (e)=>{
        songindex= parseInt(e.target.id);
        makeplay();
        e.target.classList.remove('bi-play-circle-fill');
   e.target.classList.add('bi-pause-circle-fill');
   audioelement.src = `./song${songindex + 1}.mp3`
   mastername.innerText = songs[songindex].Songname;
   audioelement.currentTime=0;
   audioelement.play();
   masterplay.classList.remove('bi-play-circle-fill');
   masterplay.classList.add('bi-pause-circle-fill') ;
   songimg.style.opacity=1;

    })
})

document.getElementById('forw').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioelement.src = `./song${songindex+1}.mp3`
    mastername.innerText = songs[songindex].Songname;
    audioelement.currentTime=0;
    audioelement.play();
    songimg.style.opacity=1;
    masterplay.classList.add('bi-pause-circle-fill');
    masterplay.classList.remove('bi-play-circle-fill');
})

document.getElementById('prev').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioelement.src = `./song${songindex+1}.mp3`
    mastername.innerText = songs[songindex].Songname;
    audioelement.currentTime=0;
    audioelement.play();
    songimg.style.opacity=1;
    masterplay.classList.remove('bi-pause-circle-fill');
    masterplay.classList.add('bi-play-circle-fill');
})