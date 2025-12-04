/*
 *  Utils
 */

async function sleep(ms) {

}

/*
 *  Data
 */

const playlist = [
    {
        'videoId': 'cb61AVsxD34', 
        'streetviewIds': [

        ],
    },
    {
        'videoId': '',
        'streetviewIds': [

        ],
    },
    {
        'videoId': '',
        'streetviewIds': [

        ],
    },
];

/*
 *  Global Objects
 */

const svPlayer = {};
svPlayer.mask = document.getElementById('streetview-mask');
svPlayer.iframe = document.getElementById('streetview-iframe');
svPlayer.play = function() {

}
svPlayer.stop = function () {

}

const streetviewMask = document.getElementById('streetview-mask');
// const previousVideoBtn = document.getElementById('previous-video-btn');
// const nextVideoBtn = document.getElementById('next-video-btn');
// let currentVideoIdx = 0;
let ytPlayer;

// Load IFrame Player API asynchronously
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);


function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('player', {
        height: '150',
        width: '150',
        videoId: playlist[currentVideoIdx]['videoId'],
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {

    if (event.target === ytPlayer) {
        if (event.data === YT.PlayerState.PLAYING) {
            streetviewPlayer.play();
        } else if (event.data === YT.PlayerState.PAUSED) {
            streetviewPlayer.stop();
        } else if (event.data === YT.PlayerState.ENDED) {
            streetviewPlayer.stop();
        }
    }
}

