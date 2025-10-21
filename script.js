function onpageload (){
    // find the nav button and refer to it as "button"
    const button = document.querySelector('#menu-button')
    //find the navigation and refer to it as menu
    const menu = document.querySelector('#main')

    button.addEventListener("click", function() {
        //console.log("clicked!")
        if (menu.classList.contains("open")){
            menu.classList.remove("open")
        }
        else{
            menu.classList.add("open")
        }
    })
}
window.addEventListener("load", onpageload)