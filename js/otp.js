const container = document.getElementsByClassName("otp-container")[0];
console.log('container:', container);
container.onkeyup = function(e) {
    const target = e.srcElement || e.target;
    const maxLength = 1;
    const myLength = target.value.length;
    if (myLength >= maxLength) {
        let next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        let previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}