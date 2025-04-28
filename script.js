//selecting popup-box overlay popup-buttonbutton

var popupbox=document.getElementById('popup')
var overlay=document.getElementById('popup-overlay')
var popbutton=document.getElementById('popup-button')

popbutton.addEventListener('click',function(){
    popupbox.style.display='block'
    overlay.style.display='block'
})

var cancel=document.getElementById('cancel book')
cancel.addEventListener('click',function(event){
    event.preventDefault()
    popupbox.style.display='none'
    overlay.style.display='none'
})

var container=document.querySelector('.container')
var add_book=document.getElementById('add book')
var title=document.getElementById('title')
var author=document.getElementById('author')
var description=document.getElementById('description')

add_book.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute('class','book-container')
    div.innerHTML=`<h2>${title.value}</h2>
            <h5>${author.value}</h5>
            <p>${description.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
            container.append(div)
            popupbox.style.display='none'
            overlay.style.display='none'
})  

function deletebook(event){
    event.target.parentElement.remove()
}