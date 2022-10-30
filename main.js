
const man = document.querySelector('.man');
let time = 0;


// counter
const counter = () => {
    document.getElementById('count').innerHTML = time;
    time++
}
setInterval(counter, 100)

const jump = () => {
    man.classList.add('jump')
    setTimeout(() => {
        man.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)