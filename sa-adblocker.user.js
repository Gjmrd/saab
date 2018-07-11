// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Turns off smotret-anime adds
// @author       Gjmrd
// @match        https://smotret-anime.ru/*
// @include      https://smotret-anime.ru/*
// @include      https://play.shikimori.org/*
// @grant        none
// ==/UserScript==

(function() {
        var script = document.createElement('script');
        script.innerHTML = `
            var watchedVideoToday = getCookieItem("watchedVideoToday");
            if (isNaN(watchedVideoToday))
                watchedVideoToday = "1";
            console.log(document.cookie);
            var expireTime = (new Date()).setTime((new Date()).getTime() + (1000 * 60 * 60));
            setCookieItem('watchedVideoToday', +watchedVideoToday+1, '/');
            setCookieItem('watchedPromoVideo', (new Date()).getTime(), expireTime, '/', '');
        `;
        script.setAttribute('id', 'super_id_name');
        document.body.appendChild(script);
})();
