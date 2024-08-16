//Creating elements

//select the <ul></ul> element
const ul = document.querySelector('ul')
console.log(ul)

//Create the element <li></li>
const li = document.createElement('li')
console.log(li)

//Add the created element

ul.append(li)

//Modifying content

const firstItem = document.querySelector(".list-item")
console.log(firstItem)

console.log(firstItem.innerText)
console.log(firstItem.textContent)
console.log(firstItem.innerHTML)

li.innerText = "I am the new list"

//Modifying attributes (attribute, value)

li.setAttribute('class',"list-item")

//li.removeAttribute()
//Get attribute
console.log(li.getAttribute('class'))
// For classes (add, remove, toggle, replace, contains)
li.classList.add("new-class")
//Remove an element

//li.remove();


