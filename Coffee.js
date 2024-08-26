

function reduceSize(element) {
        let oldSize = element.offsetWidth;
        let newSize = oldSize - 50;
        let command = "width:" + newSize + "px";
        /*window.alert("Old: " + oldSize + " and new: " + newSize + " and command: " + command);*/
        element.style = command;
}

function increaseSize(element) {
    let oldSize = element.offsetWidth;
    let newSize = oldSize + 50;
    let command = "width:" + newSize + "px";
    element.style = command;
}

