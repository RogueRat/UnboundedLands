
let pcX = 0, pcY = 0;

function reduceSize(element) {
        let oldSize = element.offsetWidth;
        let newSize = oldSize - 50;
        if(newSize < 50) return;
        let command = "width:" + newSize + "px";
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
    if(event.deltaY > 0) reduceSize(element);
    else if(event.deltaY < 0) increaseSize(element);
    else return;
}

function movePC(element, dir) {
    switch(dir){
        case 1: { // UP
            pcY -= 100;
        } break;
        case 2: { // DOWN
            pcY += 100;
        } break;
        case 3: { // LEFT
            pcX -= 100;
        } break;
        case 4: { // RIGHT
            pcX += 100;
        } break;
    }
    //let command = "left:" + pcX + "px " + "top:" + pcY + "px";
    element.style.left = pcX + "px ";
    element.style.top = pcY + "px ";
}

function disableScroll() {
    let xOff = window.scrollX || 
    document.documentElement.scrollLeft;
    let yOff = window.scrollY || 
    document.documentElement.scrollTop;
    window.onscroll = function () {
        window.scrollTo(xOff, yOff);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}
