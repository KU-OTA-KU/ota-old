function checkMobileModeStatus() {
    let mobileModeCookie = document.cookie.replace(/(?:(?:^|.*;\s*)mobileMode\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (mobileModeCookie && mobileModeCookie === 'true') {
        return true;
    } else {
        return false;
    }
}
window.addEventListener('load', function () {
    console.log("deletedCookie");
});
