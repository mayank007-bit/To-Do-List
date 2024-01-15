let inputBox = document.querySelector('#inputBox');
let List = document.querySelector('#List');

inputBox.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
    addItem(this.value)
    this.value = ""
  }
})

let addItem = (inputBox) =>{
    let ListItem = document.createElement("li");
    ListItem.innerHTML = `${inputBox}<i></i>`;
    
      ListItem.addEventListener("click", function(){
        this.classList.toggle('done')
      })
       
      ListItem.querySelector("i").addEventListener("click", function(){
        ListItem.remove();
      })
      
    List.appendChild(ListItem);
}