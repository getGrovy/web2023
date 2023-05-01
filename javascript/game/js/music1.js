const allMusic = [
    {
        name : "1. Anxiety",
        artist : "NEFFEX",
        img : "music_view01",
        audio: "Anxiety"
    },{
        name : "2. Indecision",
        artist : "Dyalla",
        img : "music_view02",
        audio: "Indecision"
    },{
        name : "3. Like It Loud",
        artist : "Dyalla", //Like It Loud - Dyalla
        img : "music_view03",
        audio: "LikeItLoud"
    },{
        name : "4. No Mercy",
        artist : "TrackTribe",
        img : "music_view04",
        audio: "NoMercy"
    },{
        name : "5. Put It",
        artist : "TrackTribe",
        img : "music_view05",
        audio: "PutIt"
    },{
        name : "6. Rain Drops",
        artist : "TrackTribe",
        img : "music_view06",
        audio: "RainDrops"
    },{
        name : "7. Ringside",
        artist : "Dyalla",
        img : "music_view07",
        audio: "Ringside"
    },{
        name : "8. Slipping Away",
        artist : "Dyalla",
        img : "music_view08",
        audio: "SlippingAway"
    },{
        name : "9. World's Sunrise",
        artist : "Jimena Contreras",
        img : "music_view09",
        audio: "WorldsSunrise"
    },{
        name : "10. You Will Never See Me Coming",
        artist : "NEFFEX",
        img : "music_view10",
        audio: "YouWillNeverSeeMeComing"
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
const musicRepeat = muscWrap.querySelector("#control-repeat");
const musicListBTn = muscWrap.querySelector("#control-list");
const musicList = muscWrap.querySelector(".music__list");
const musicListUl = muscWrap.querySelector(".music__list ul");
const musicListClose = muscWrap.querySelector(".music__list h3 .close");

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
// 반복버튼 클릭 
musicRepeat.addEventListener("click" , (e)=>{
    let getAttr = musicRepeat.getAttribute("class");
    switch(getAttr){
        case "repeat" : musicRepeat.setAttribute("class","repeat_one");
                        musicRepeat.setAttribute("title","한곡반복");
        break;
        case "repeat_one" : musicRepeat.setAttribute("class","shuffle");
                        musicRepeat.setAttribute("title","랜덤");
        break;
        case "shuffle" : musicRepeat.setAttribute("class","repeat");
                        musicRepeat.setAttribute("title","전체 반복");
        break;
    }
})
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
    // playMusic();
}
//다음곡 듣기
const nextMusic = ()=>{
    // musicIndex++;
    musicIndex == allMusic.length ? musicIndex=1 : musicIndex++;
    loadMusic(musicIndex);
    // playMusic();
}

//뮤직 진행바
musicAudio.addEventListener("timeupdate", e=>{
    // console.log(e);
    let currentTime = e.target.currentTime; //재생시간
    let duration = e.target.duration;         //총길이
    let progressWidth= (currentTime/duration)*100; //시간
    console.log(currentTime);
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
    // musicAudio.currentTime = Math.floor((clickOffsetX/progressWidth) * songDuration);
    musicAudio.currentTime = (clickOffsetX / progressWidth) * songDuration;
})
//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click",()=>{
    prevMusic();
    // playMusic();
    // playListMusic();
});

//다음곡 버튼 클릭
musicNextBtn.addEventListener("click",()=>{
    nextMusic();
    // playMusic();
    // playListMusic();
});
//오디오가 끝나면 
musicAudio.addEventListener("ended",()=>{
    let getAttr = musicRepeat.getAttribute("class");
    switch(getAttr){
        case "repeat" : nextMusic();
        break;
        case "repeat_one" : playMusic();
        break;
        case "shuffle" : 
        let randomIndex = Math.floor(Math.random()* allMusic.length+1); //랜덤 인덱스 생성
        
            do{
                let randomIndex = Math.floor(Math.random()* allMusic.length+1); //랜덤 인덱스 생성

            }while(musicIndex == randomIndex);

            musicIndex = randomIndex;    //현제 인덱스를 랜덤 인덱스로 변경 
            loadMusic(randomIndex);
            playMusic();
        break;
    }
    playMusic();
    // playListMusic();
})
// 플레이 버튼 클릭 
musicPlay.addEventListener("click",()=>{
    const isMusicPaused = muscWrap.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();

});
window.addEventListener("load",()=>{
    loadMusic(musicIndex);
});
//musicList 버튼
musicListBTn.addEventListener("click",()=>{
    musicList.classList.add("show");
});
//뮤직리스트 구현

for(let i=0; i <allMusic.length ;i++){
        let li =`<li data-index=${i+1}>
                    <span class="img">
                        <img src="img/${allMusic[i].img}.png" alt=${allMusic[i].name}>
                    </span>
                    <div class="info__music">
                        <span class="title">${allMusic[i].name}</span>
                        <em class="artist">${allMusic[i].artist}</em>
                        <audio class="${allMusic[i].audio}" src="audio/${allMusic[i].audio}.mp3";></audio>
                    </div>
                    <span class="audio-duration" id ="${allMusic[i].audio}"></span>
                </li>`;
            // musicList.innerHTML += li;
            musicListUl.insertAdjacentHTML("beforeend",li);
            // 리스트에 음악 시간 불러오기 
            // let liAudoiDuartion = musicListUl.querySelector(`${allMusic[i].audio}`) //리스트에서 시간을 표시할 선택자를 가져옴
            // let liAudio =  musicList.querySelector(`.${allMusic.audio}`);
            // liAudio.addEventListener("loadeddata",()=>{
            //     let audioDuration = liAudio.duration;
            //     let totalMin = Math.floor(audioDuration/60);
            //     let totalSec = Math.floor(audioDuration%60);
            //     if(totalSec<10)totalSec = `0${totalSec}`;
            //     liAudoiDuartion.innerHTML = `${totalMin}:${totalSec}`;
            // });
            console.log(`${allMusic[i].audio}`);
            let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`);   //리스트에서 시간을 표시할 선택자
            // let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`);           //리스트에서 오디오 파일 선택
            // liAudio.addEventListener("loadeddata", () => {
            //     let audioDuration = liAudio.duration;
            //     // console.log(audioDuration)
            //     let totalMin = Math.floor(audioDuration / 60);
            //     let totalSec = Math.floor(audioDuration % 60);
            //     if(totalSec < 10) totalSec = `0${totalSec}`;
            //     liAudioDuration.innerText = `${totalMin}:${totalSec}`;
            //     liAudioDuration.setAttribute = ("data-duration",`${totalMin}:${totalSec}`);
            // });
}
// //뮤직리스트를 클릭하면 재생
// function playListMusic(){
//     const musicListAll = musicListUl.querySelectorAll("li"); //뮤직 리스트 목록
//     for(let i=0 ; i<musicListAll.length; i++){
//         musicListAll[i].setAttribute("onclick","clicked(this)");

//         if(musicListAll[i].classList.contains("playing")){
//             musicListAll[i].classList.remove("playing");
//             let dataAudioDuration = audioTag.getAttribute("data-duration");
//             // audioTag.innerText = dataAudioDuration;

//         }

//         if(musicListAll[i].getAttribute("data-index")==musicIndex){
//             musicListAll[i].classList.add("playing");
//             // audioTag.innerText ="재생중";
//         }
//     }
// }
// playListMusic();
// function clicked(el){
//     let getIndex = el.getAttribute("data-index");
//     // alert(getIndex);
//     musicIndex = getIndex;
//     loadMusic(musicIndex);
//     playMusic();
//     playListMusic();
// }

// musicListClose.addEventListener("click",()=>{
//     musicList.classList.remove("show");
// });