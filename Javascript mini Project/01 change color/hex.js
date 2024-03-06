const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
// here A ,B ,C ,D ,E ,F=#f15025 vaiue

const btn=document.getElementById('btn')
const color=document.querySelector('.color')

btn.addEventListener('click',function(){
    let hexcolor="#"
    for(let i=0;i<6;i++){
        console.log(hex[i])
        // using getRandomnumber to change color
        hexcolor +=hex[getRandomnumber()]
    }
    color.textContent=hexcolor
    document.body.style.backgroundColor=hexcolor
})

// using Math.random() color automaticaly change help of hex array
function getRandomnumber() {
    return Math.floor(Math.random() * hex.length)
}
