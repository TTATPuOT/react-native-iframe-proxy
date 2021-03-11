document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('v');

    if (!videoId) {
        const error = document.createElement('div');
        error.innerText = 'Please, send query param ?v=[videoId] for show iframe';
        document.body.appendChild(error);

        return;
    }

    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = 'https://www.youtube.com/embed/' + videoId;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowfullscreen = true;

    iframe.setAttribute('frameborder', '0');

    document.body.appendChild(iframe);
})
