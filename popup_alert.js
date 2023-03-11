// select Dom ELement 
const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
    window.alert("Hello Saikat");
}

function showConfirm() {
    let txt;

    if (window.confirm("Press a button!")) {
        txt = "You pressed ok!";
    } else {
        txt = "You pressed cancel!";
    }

    confirm.innerHTML = txt;
}

function showPrompt() {
    let person = window.prompt("Please enter your name:", "Al-Mumeetu Saikat");

    let text;
    if (person === null || person === "") {
        text = "User cancelled the prompt!";
    } else {
        text = "Hello " + person + "! How are you?";
    }

    prompt.innerHTML = text;
}