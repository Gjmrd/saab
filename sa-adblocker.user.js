// ==UserScript==
// @name         Smotret-anime adblocker
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Turns off smotret-anime adds
// @author       Gjmrd
// @match        https://smotret-anime.ru/*
// @match        https://play.shikimori.org/*
// @include      https://smotret-anime.ru/*
// @include      https://play.shikimori.org/*
// @grant        none
// ==/UserScript==

(function() {
    var watchedVideoToday = getCookieItem("watchedVideoToday");
    var expireTime = (new Date()).setTime((new Date()).getTime() + (1000 * 60 * 60)); /* time in ms */
    setCookieItem('watchedVideoToday', +watchedVideoToday+1, '/');
    setCookieItem('watchedPromoVideo', (new Date()).getTime(), expireTime, '/');
})();
