function handleClose() {
    document.getElementsByClassName("popUp")
    [0].classList.add("close")
}

function handleCopy(id) {
    var copiedCode = document.getElementById(id).innerText
    const temp = document.createElement("textArea")
    temp.setAttribute('readonly', '');
    temp.value = copiedCode
    temp.style.position = "absolute"
    document.body.appendChild(temp)
    temp.select()
    document.execCommand("copy")
    document.body.removeChild(temp)
    handleDisableButton(id)
}

function handleDisableButton(id) {
    var button = document.getElementsByClassName('copyButton')
    for (var i = 0; i < button.length; i++) {
        if (button[i].id === id) {
            button[i].classList.add("disable")
            button[i].innerText = "CODE COPIED"
        } else if (button[i].id !== id) {
            button[i].classList.remove("disable")
        }
    }
}