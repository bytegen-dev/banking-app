

function blurr(){
    document.querySelector('.itemii').classList.toggle('hidde')
}

function pullup(){
    document.querySelector('.transactions').classList.toggle('pull')
    document.querySelector('.dragger').classList.toggle('pulll')
    document.querySelector('.info').classList.toggle('brr')
    document.querySelector('.balances').classList.toggle('brr')
    document.querySelector('.services').classList.toggle('brr')
    document.querySelector('.audioi').volume = 0.5
    document.querySelector('.audioi').play()
    document.querySelector('.trans-container').scrollTo({
        top:0,
        behavior: "smooth" 
    })
    
}

function showi(){
    // document.querySelector('.balances').scrollTo(0, 0)
    document.querySelector('.balances').scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    // alert('heyy')
}

function showii(){
    // alert('hello')
    // document.querySelector('.balances').scrollTo(4000, 0, "smooth")
    document.querySelector('.balances').scrollTo({
        top: 0,
        left: 4000,
        behavior: "smooth"
    })
}