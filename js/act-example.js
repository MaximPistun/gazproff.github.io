const actEx = document.querySelector(".act-example");
const actExCLose = document.querySelector(".act-example__close");
const actBtn = document.querySelector(".intro__absolute-btn");
const actArea = document.querySelector(".act-example__area")

actBtn.onclick = (event) => {
    actEx.classList.add("_active")
}
actExCLose.onclick = (event) => {
    actEx.classList.remove("_active")
}
actArea.onclick = (event) => {
    actEx.classList.remove("_active")
}