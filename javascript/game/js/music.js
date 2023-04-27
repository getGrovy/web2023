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

// control-play
let musicIndex =6; //현재 음악 인덱스

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
    alert("play");
}
// 정지
const pauseMusic = () =>{

}
//이전곡 듣기 
const prevMusic = ()=>{
    alert("prevMusic");

}
//다음곡 듣기
const nextMusic = ()=>{
    alert("nextMusic");
    
}
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
    playMusic();
});
window.addEventListener("load",()=>{
    loadMusic(musicIndex);
    // musicAudio.muted = true;
    musicAudio.play();

    // musicAudio.muted = false;
});
