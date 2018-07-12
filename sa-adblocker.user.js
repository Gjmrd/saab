// ==UserScript==
// @name         Smotret-anime addblocker
// @namespace    http://tampermonkey.net/
// @version      0.4
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
            var lastDate = getCookieItem("lastDate");
            var today = (new Date).getDate();
            if ((isNaN(watchedVideoToday)) || (today != lastDate)){
                watchedVideoToday = 1;
                lastDate = today;
            }
            var expireTime = (new Date()).setTime((new Date()).getTime() + (1000 * 60 * 60));
            setCookieItem('watchedVideoToday', +watchedVideoToday+1, '/');
            setCookieItem('watchedPromoVideo', (new Date()).getTime(), expireTime, '/', '');
            setCookieItem('lastDate', lastDate, '/');
        `;
        script.setAttribute('id', 'super_id_name');
        document.body.appendChild(script);
})();
