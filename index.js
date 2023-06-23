const input = document.getElementById("input")
const main = document.querySelectorAll("div")

const generateWord = (n)=>{
    let text =''
    let letters = "abcdefghijklmnopqrstuvwxyz"
     for (let i=0;i<n;++i){
        const random = (Math.random()*25).toFixed(0)
        text+=letters[random]
     }
     return text

} 



const generatePara = ()=>{
     let value = Number(input.value)
     let element = document.createElement("p")
     let data = ""

     for(let i=0;i<value;++i){
        const randomNumber = (Math.random() * 15).toFixed(0)
        data +=generateWord(randomNumber)
        data+=" "

     
    }
  element.innerText = data

     element.setAttribute ("class","para")
   
     main[0].append(element)
     
}


