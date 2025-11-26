// Data

const playlist = [
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
    {
        'videoId': '',
        'streetviewIds': [

        ],
    },
];

//
const previousVideoBtn = document.getElementById('previous-video-btn');
const nextVideoBtn = document.getElementById('next-video-btn');
let currentVideoIdx = 0;
let player;

if (currentVideoIdx === 0) {
    previousVideoBtn.disabled = true;
}
if (playlist.length === 1) {
    nextVideoBtn.disabled = true;
}

// Load IFrame Player API asynchronously
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);


function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '150',
        width: '150',
        videoId: playlist[currentVideoIdx]['videoId'],
        events: {
        }
    });
}

previousVideoBtn.addEventListener('click', function(event) {
    currentVideoIdx += 1;
});

nextVideoBtn.addEventListener('click', function(event) {
    currentVideoIdx -= 1;
});

streetviewMask = document.getElementById('streetview-mask');
streetviewMask.classList.remove('opacity-0');
streetviewMask.classList.add('opacity-75');
