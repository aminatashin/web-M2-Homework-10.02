


const adding = function(){
    let parentDiv = document.getElementById('list-list')
    for(let i = 1 ; i<20 ; i++){
        
   let listItem = document.createElement('div')
   listItem.id = i
   parentDiv.appendChild(listItem)
   let addValue = document.getElementsByClassName('form-control').value
   listItem.innerText = addValue
    }  
    
}
adding()


