let arrName = []

const addName = function(){
    
    let newInput = document.getElementById('name')
    let newName = newInput.value
    arrName.push(newName)

    let ulShwo = document.getElementById('show')
    let liName = document.createElement('li')
    
    liName.addEventListener('click', function(){
        deleteName(liName)
    })
    liName.innerText = newName
    ulShwo.appendChild(liName)


}
const deleteName = function(HTMLElement){
    HTMLElement.remove()
}