const button = document.querySelector("#switch");
const login  = document.querySelector("#login");
const words  = document.querySelector("#wordsForm")
const info   = document.querySelector("#info");
const messages = document.querySelector("#messages");
const smallElement = document.querySelector("#smallElement");

button.addEventListener("click", () => {
    if (! smallElement.classList.contains("moved")){
        smallElement.classList.add("moved");
        login.classList.add("hidden");
        words.classList.remove("hidden");
        info.classList.add("hidden");
        messages.classList.remove("hidden");
    }
    else{
        smallElement.classList.remove("moved");
        login.classList.remove("hidden");
        words.classList.add("hidden"); 
        info.classList.remove("hidden");
        messages.classList.add("hidden");

    }

})