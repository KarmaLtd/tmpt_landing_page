const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

window.addEventListener("DOMContentLoaded", (event) => {
    const iosLinkElement = document.getElementById("ios-link");
    const androidLinkElement = document.getElementById("android-link");

    iosLinkElement.href = isMobile ? "https://puzzletime.onelink.me/u4WJ/land" : "https://apps.apple.com/us/app/this-morning-puzzle-time/id1479417765";
    androidLinkElement.href = isMobile ? "https://puzzletime.onelink.me/u4WJ/land" : "https://play.google.com/store/apps/details?id=com.karma.thismorningpuzzletime";
});
