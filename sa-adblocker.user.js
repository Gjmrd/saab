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
    console.log(213);
        var script = document.createElement('script');
        script.innerHTML = `
           function getCookie(name) {

                var matches = document.cookie.match(new RegExp(
                     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                ))
           return matches ? decodeURIComponent(matches[1]) : undefined
           }

            var watchedVideoToday = getCookie("watchedVideoToday");
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