

function reduceSize(element) {
        let oldSize = element.offsetWidth;
        let newSize = oldSize - 50;
        if(newSize < 50) return;
        let command = "width:" + newSize + "px";
        /*window.alert("Old: " + oldSize + " and new: " + newSize + " and command: " + command);*/
        element.style = command;
}

function increaseSize(element) {
    let oldSize = element.offsetWidth;
    let newSize = oldSize + 50;
    if(newSize > 1000) return;
    let command = "width:" + newSize + "px";
    element.style = command;
}

function resize(element, event){
    if(event.deltaY < 0) reduceSize(element);
    else if(event.deltaY > 0) increaseSize(element);
    else return;
}

function disableScroll() {
    let xOff = window.scrollX || 
    document.documentElement.scrollLeft;
    let yOff = window.scrollY || 
    document.documentElement.scrollTop;
    window.onscroll = function () {
        window.scrollTo(0, 0);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}
