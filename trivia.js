//Next Steps: Lookup Table, create Object Dynamically with constructor and access with dynamic id's with onclick()


let createPage = function () {
    
    let playButton = document.getElementById("play")
    
    playButton.onclick = function(){
        let play = document.getElementById("play")
        play.style.display = "none"
        document.getElementById("gameSetup").style.display = "block"

        let boxes = 0
        //categories Label

        //categories Checkbox:
        let categoriesArr = ["literature", "food_and_drink", "history", "geography", "general_knowledge", "movies", "music", "science", "sociaty_and_culture", "sports_and_leisure"]
        for (let i = 0; i < categoriesArr.length; i++) {
            let br = document.createElement("BR")

function api(cat, num) {
    // RENDER CATEGORIES per id's on table
    let catClass = "c" + num
    console.log(cat, catClass)
    let catId = catClass + 0
    document.getElementById(catId).innerText = cat.replace(/[\_]/g, " ").toUpperCase()


    //API CONSTANTS
    let url = "https://api.trivia.willfry.co.uk/questions?categories="
    let limit = "&limit=5"

    //  MAKE API CALL and push to an array of data
    console.log(`make API call for ${cat}:`)
    let apiStr = url + cat + limit
    console.log(apiStr)

    //create api call
    let xhr = new XMLHttpRequest();
    xhr.open('GET', apiStr)
    xhr.onload = function() {
        console.log(`This is the call`)
        let limit = JSON.parse(xhr.responseText).length
        for (let i = 0; i < limit; i++){
           console.log(JSON.parse(xhr.responseText)[i].correctAnswer)
           console.log(JSON.parse(xhr.responseText)[i].question)
           document.getElementById("c1q1").addEventListener("click", event => {
               document.getElementById("QuestionDiv").style.display = "block"
               document.getElementById("QuestionDiv").style.border = "1px solid black"
               let qPlaceholder = document.getElementById("qPlaceholder")
               qPlaceholder.innerText = JSON.parse(xhr.responseText)[i].question
               document.getElementById("scorePlaceholder").innerText = document.getElementById("c1q1").innerText
           })
        }
           //add onclick to respond with true/increment Score
           for (let j = 0; j < limit-2; j++){
               console.log(JSON.parse(xhr.responseText)[i].incorrectAnswers[j])
               //add onclick to return false
           }
           console.log(JSON.parse(xhr.responseText))

            switch (num) {
               case 1: console.log(`new Cat ${num} object`)
               break
               case 2: console.log(`new Cat ${num} object`)
               break
               case 3: console.log(`new Cat ${num} object`)
               break
               case 4: console.log(`new Cat ${num} object`)
               break
               case 5: console.log(`new Cat ${num} object`)
               break
           }
           
        }
           xhr.send()    



           

           //CREATE OBJECT WITH CATEGORY NAME ${CAT}, CORRELLATE TO GRID
            //ONCLICK() DISPLAY QUESTIONS AND ANDERS
 }

        function categoriesFunction(cat) {
            boxes++
            switch (boxes) {
                case 1: api(cat, boxes)
                break
                case 2: api(cat, boxes)
                break
                case 3: api(cat, boxes)
                break
                case 4: api(cat, boxes)
                break
                case 5:
                    api(cat, boxes)
                    document.getElementById("start").style.display = "block"

                break
            }

        }

            //  CREATE CHECKLIST
            let catCheckbox = document.createElement("input")
            catCheckbox.setAttribute("type", "checkbox")
            catCheckbox.setAttribute("value", categoriesArr[i])
            catCheckbox.onclick = function(){categoriesFunction(categoriesArr[i])}

            let catLabel = document.createElement("label")
            catLabel.innerText = categoriesArr[i].replace(/[\_]/g, " ").toUpperCase()
            
            let catDiv = document.getElementById("categoriesListDiv")
            catDiv.append(br, catCheckbox, br, catLabel, br)
        }

let startGame = document.getElementById("start")
   
        startGame.onclick = function(event) {
            event.preventDefault()
            document.getElementById("p1NameDisplay").innerText = document.getElementById("p1NameInput").value
         document.getElementById("gameSetup").style.display = "none"
         document.getElementById("startDiv").style.display = "block"
         let qs = document.getElementsByClassName("q")
         for (let i = 0; i < qs.length; i++){
             qs[i].addEventListener('click', click => {
                 console.log(`Display question ${i}`)
             })
         }
        }
    }


    console.log(`Success`)
}

createPage()