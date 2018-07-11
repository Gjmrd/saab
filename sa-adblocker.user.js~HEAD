// ==UserScript==
// @name         Smotert-anime add blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Turns off smotret-anime adds
// @author       Gjmrd
// @match        https://smotret-anime.ru/*
// @include      https://smotret-anime.ru/*
// @grant        none
// ==/UserScript==

(function() {
    var watchedVideoToday = getCookieItem("watchedVideoToday");
    var expireTime = (new Date()).setTime((new Date()).getTime() + (1000 * 60 * 60)); /* time in ms */
    setCookieItem('watchedVideoToday', +watchedVideoToday+1, '/');
    setCookieItem('watchedPromoVideo', (new Date()).getTime(), expireTime, '/');
})();