const btn= document.querySelectorAll(".button") 
const body = document.querySelector("body")
  
btn.forEach(button => {
    button.addEventListener("click", (clr) => {
      switch (clr.target.id ) {
        case "red":
          body.style.backgroundColor = clr.target.id
          break
        case "purple":
          body.style.backgroundColor = clr.target.id
          break
        case "green":
          body.style.backgroundColor = clr.target.id
          break
        case "blue":
          body.style.backgroundColor = clr.target.id
          break
        case "black":
          body.style.backgroundColor = clr.target.id
          break
          case "grey":
          body.style.backgroundColor = clr.target.id
          break
      }
    });
});