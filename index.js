const text = document.querySelector('.text')
let words = document.querySelector('.words')
let characters = document.querySelector('.char')
text.addEventListener('input',() => {
    characters.textContent = text.value.length
    let txt = text.value.trim()
    words.textContent = txt.split(/\s+/).filter((item) => item).length
})