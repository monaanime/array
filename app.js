const clock = document.querySelector(".clock")
const form = document.querySelector(".form")
const inp_text = document.querySelector(".inp_text")
const content = document.querySelector(".content")
const deleteModal = document.querySelector(".delete_modal")
const delYes = document.querySelector(".del_yes")
const delNo = document.querySelector(".del_no")


// time
setInterval(()=>{
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds() 
    
    clock.innerHTML = `${hour}:${minute}:${second}`
}, 1000)

form.addEventListener("submit", createBlog)

function createBlog(e){
    e.preventDefault()
    let value = inp_text.value.trim()
    if(value === ""){
        return alert("write something")
    }

    // create element
    let box = document.createElement("div")
    let circle = document.createElement("div")
    let desc = document.createElement("p")
    let edit = document.createElement("i")
    let trash = document.createElement("i")
    let time = document.createElement("p")
    let flyTg = document.createElement("div")
    let plane = document.createElement("i")

    // className
    box.className = "box"
    circle.className = "circle"
    desc.className = "desc"
    edit.className = "fa-solid fa-pen-to-square"
    trash.className = "fa-solid fa-trash-can"
    time.className = "time"
    flyTg.className = "fly_tg"
    plane.className = "fa-solid fa-paper-plane"

    // addEventListener
    trash.addEventListener("click", (e)=>{
        deleteModal.classList.add("show_del")
    })


    // innerHTML
    circle.innerHTML = value.slice(0,1).toUpperCase()
    desc.textContent = value

    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    
    time.innerHTML = `${hour}:${minute}`

    // appendChild
    box.appendChild(circle)
    box.appendChild(desc)
    box.appendChild(edit)
    box.appendChild(trash)
    box.appendChild(time)

    content.appendChild(box)

    // fly
    flyTg.appendChild(plane)
    form.appendChild(flyTg)

    // formni ichini tozalash uchun
    setTimeout(()=>{
        flyTg.remove()
    },600)

    // input ni ichidagi qiymatni boshatish
    inp_text.value = ""
}


delNo.addEventListener("click", ()=>{
    deleteModal.classList.remove("show_del")
})


