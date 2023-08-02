let count = 0

function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count
    console.log(count)
}

function decrement() {
    count = count - 1
    document.getElementById("count-el").innerText = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    document.getElementById("save-el").textContent += countStr
    console.log(count)
}
