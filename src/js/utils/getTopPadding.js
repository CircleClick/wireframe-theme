module.exports = (element) => {
    var style = element.currentStyle || window.getComputedStyle(element),
    margin = parseFloat(style.marginTop),
    padding = parseFloat(style.paddingTop);
    return margin+padding;
}