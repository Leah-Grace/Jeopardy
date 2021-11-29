let createPage = function () {
    let body = document.getElementsByTagName("body")[0]
    let h1 = document.createElement("h1")
    h1.innerText = "This is Jeopardy"
    h1.setAttribute("id", "header")
    let startButton = document.createElement("button")
    startButton.innerText = "Start Game"
    startButton.setAttribute("id", "start")
    
    startButton.onclick = function(){
        let start = document.getElementById("start")
        start.style.display = "none"
        let setupForm = document.createElement("form")
        setupForm.setAttribute("value", "setupForm")
        let br = document.createElement("br")
        let nameInput = document.createElement("input")
        nameInput.setAttribute("type", "text")
        nameInput.setAttribute("id", "name")
        nameInput.setAttribute("value", "Your name")
        let numOfQuestions = document.createElement("input")
        numOfQuestions.setAttribute("type", "number")
        numOfQuestions.setAttribute("min", 2)
        numOfQuestions.setAttribute("max", 6)
        numOfQuestions.setAttribute("id", "numQs")
   /***      let categories = document.createElement("input")
        categories


        */
       
        let header = document.getElementById("header")
        header.append(setupForm, nameInput, br, numOfQuestions, br)
        console.log(`Form`)

    }
    body.append(h1, startButton)

    console.log(`Success`)
}
createPage()