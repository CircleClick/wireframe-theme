
let is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
let is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
let is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
let is_safari = navigator.userAgent.indexOf("Safari") > -1;
let is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
if ((is_chrome)&&(is_safari)) { is_safari = false; }
if ((is_chrome)&&(is_opera)) { is_chrome = false; }

module.exports = {
    chrome: is_chrome,
    explorer: is_explorer,
    firefox: is_firefox,
    safari: is_safari,
    opera: is_opera,
    iOS: iOS,
}