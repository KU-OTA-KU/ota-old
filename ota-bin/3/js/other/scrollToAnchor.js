function scrollToAnchor(anchorName) {
    var anchor = document.getElementsByName(anchorName)[0];
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
    }
}