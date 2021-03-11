document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('v');

    if (!videoId) {
        const error = document.createElement('div');
        error.innerText = 'Please, send query param ?v=[videoId] for show iframe';
        document.body.appendChild(error);
        return;
    }

    /*const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?rel=0&enablejsapi=1&playsinline=1&showInfo=0&controls=1&fullscreen=1';
    //iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowfullscreen = true;

    iframe.setAttribute('frameborder', '0');

    document.body.appendChild(iframe);*/

    const playerDiv = document.getElementById('player');
    playerDiv.setAttribute('data-plyr-provider', 'youtube');
    playerDiv.setAttribute('data-plyr-embed-id', videoId);
    new Plyr(playerDiv);


})
