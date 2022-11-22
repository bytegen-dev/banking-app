function notifications(){
    // alert ('hello')
    document.querySelector('.container').classList.toggle('run')
    document.querySelector('.notifications').classList.toggle('blur')
}

function notif(){
    document.querySelector('.container').classList.remove('run')
    document.querySelector('.notifications').classList.remove('blur')
}