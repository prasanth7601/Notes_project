var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopup = document.getElementById("add-popup")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display="block"
})

var cancelbutton = document.getElementById("add-cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


//add-note,note-title,note-content,note-description

var container = document.querySelector(".container")
var addnote=document.getElementById("add-notes")
var notetitle=document.getElementById("note-title")
var notecontent=document.getElementById("note-content")
var notedescription=document.getElementById("note-description")

addnote.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","note-container")
    div.innerHTML=`<h2>${notetitle.value}</h2>
    <h5>${notecontent.value}</h5>
    <p>${notedescription.value}</p>
    <button onClick="deletenote(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletenote(event){
    event.target.parentElement.remove()
}