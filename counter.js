let count = 0

function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
    console.log(count)
}

function decrement() {
    count -= 1
    document.getElementById("count-el").innerText = count
    console.log(count)
}
