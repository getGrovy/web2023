const allMusic = [
    {
        name : "1. Anxiety",
        artist : "NEFFEX",
        img : "music_view01",
        audio: "Anxiety - NEFFEX"
    },{
        name : "2. Indecision",
        artist : "Dyalla",
        img : "music_view02",
        audio: "Indecision - Dyalla"
    },{
        name : "3. Like It Loud",
        artist : "Dyalla", //Like It Loud - Dyalla
        img : "music_view03",
        audio: "Like It Loud - Dyalla"
    },{
        name : "4. No Mercy",
        artist : "TrackTribe",
        img : "music_view04",
        audio: "No Mercy - TrackTribe"
    },{
        name : "5. Put It",
        artist : "TrackTribe",
        img : "music_view05",
        audio: "Put It - TrackTribe"
    },{
        name : "6. Rain Drops",
        artist : "TrackTribe",
        img : "music_view06",
        audio: "Rain Drops - TrackTribe"
    },{
        name : "7. Ringside",
        artist : "Dyalla",
        img : "music_view07",
        audio: "Ringside - Dyalla"
    },{
        name : "8. Slipping Away",
        artist : "Dyalla",
        img : "music_view08",
        audio: "Slipping Away - Dyalla"
    },{
        name : "9. World's Sunrise",
        artist : "Jimena Contreras",
        img : "music_view09",
        audio: "World's Sunrise - Jimena Contreras"
    },{
        name : "10. You Will Never See Me Coming",
        artist : "NEFFEX",
        img : "music_view10",
        audio: "You Will Never See Me Coming - NEFFEX"
    }
];


const muscWrap = document.querySelector(".music__wrap");
const musicName = muscWrap.querySelector(".music__control .title h3");
const musicArtist = muscWrap.querySelector(".music__control .title p");
const musicView = muscWrap.querySelector(".music__view .image img");
const musicAudio = muscWrap.querySelector("#main-audio");
const musicPlay = muscWrap.querySelector("#control-play");
const musicNextBtn = muscWrap.querySelector("#control-next"); 
const musicPrevBtn = muscWrap.querySelector("#control-prev"); 
const musicProgress = muscWrap.querySelector(".progress");
const musicProgressBar = muscWrap.querySelector(".progress .bar");
const musicProgressCurrent = muscWrap.querySelector(".timer .current");
const musicProgressDuration = muscWrap.querySelector(".timer .duration");

// control-play 
let musicIndex =1; //현재 음악 인덱스

// 음악재생
const loadMusic=(num)=>{
    
    musicName.innerText = allMusic[num-1].name; //뮤직 이름 
    musicArtist.innerText = allMusic[num-1].artist; //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;//뮤직 이미지
    musicView.alt = allMusic[num-1].name;//뮤직 이미지 alt 정보
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;
}

// 재생  
const playMusic = () =>{
    muscWrap.classList.add("paused");
    musicPlay.setAttribute("title","정지");
    musicPlay.setAttribute("class","stop");
    musicAudio.play();
}
// 정지
const pauseMusic = () =>{
    muscWrap.classList.remove("paused");
    musicPlay.setAttribute("title","재생");
    musicPlay.setAttribute("class","play");
    musicAudio.pause();
}
//이전곡 듣기 
const prevMusic = ()=>{
    
    musicIndex == 1 ? musicIndex= allMusic.length :musicIndex--;
    loadMusic(musicIndex);
    playMusic();
}
//다음곡 듣기
const nextMusic = ()=>{
    // musicIndex++;
    musicIndex == allMusic.length ? musicIndex=1 : musicIndex++;
    loadMusic(musicIndex);
    playMusic();
}

//뮤직 진행바
musicAudio.addEventListener("timeupdate", e=>{
    // console.log(e);
    let currentTime = e.target.currentTime; //재생시간
    let duration = e.target.duration;         //총길이
    let progressWidth= (currentTime/duration)*100; //시간
    
    musicProgressBar.style.width = `${progressWidth}%`;
    //전체 시간
    musicAudio.addEventListener("loadeddata", ()=>{
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration/60);
        let totalSec = Math.floor(audioDuration%60);
        if(totalSec < 10)totalSec = `0${totalSec}`;
        musicProgressDuration.innerText =`${totalMin} : ${totalSec}`;
    })
    //진행 시간
    // musicProgressCurrent 
    let currentMin = Math.floor(currentTime/60) ;
    let currentSec = Math.floor(currentTime%60) ;
    if(currentSec < 10)currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin} : ${currentSec}`;
});
//진행 시간 클릭 
musicProgress.addEventListener("click", (e)=>{
    let progressWidth = musicProgress.clientWidth   //진행 전체 길이 
    let clickOffsetX = e.offsetX ;                  //진행바 기준 측정되는 x 좌표 값
    let songDuration = musicAudio.duration;         //오디오 전체 길이
    
    //백분위 단위로 나눈 숫자를 전체 길이를 곱해서 현재 재생값
    musicAudio.currentTime = Math.floor((clickOffsetX/progressWidth) * songDuration);
})
//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click",()=>{
    prevMusic();
});

//다음곡 버튼 클릭
musicNextBtn.addEventListener("click",()=>{
    nextMusic();
});
// 플레이 버튼 클릭 
musicPlay.addEventListener("click",()=>{
    const isMusicPaused = muscWrap.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();

});
window.addEventListener("load",()=>{
    loadMusic(musicIndex);
});
