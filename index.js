 let storege = ["Hello World","to-do-list"]
 const ELinput = document.getElementById("el-input")
 const subnitbtn = document.getElementById("subnit-btn")
const deletebtn = document.getElementById("delete-btn")
const uarl = document.getElementById("storege")
  const animation = document.getElementById("animation")

function render(Leads){
    let listItems = ""
for (let i = 0; i < Leads.length; i++) {
    listItems +=
    `<br> ${Leads[i]} 
    `
}
 uarl.innerHTML =  listItems
}
function clearlist(){
    storege =[]
    render(storege)
}


subnitbtn.addEventListener("click" ,function(){
    storege.push(ELinput.value)
render(storege)
ELinput.value =""
})

deletebtn.addEventListener("click",function(){
    clearlist()
    ELinput.value =""
})
animation.addEventListener("click",function(){
    this.addEventListener("animationstart")
})