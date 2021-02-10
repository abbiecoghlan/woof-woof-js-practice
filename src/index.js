// defer
//make main function
//fetch the API info from the server 
    // http://localhost:3000/pups
    //iterate through all the dogs get the doginfo(for each in the fetch)
    // retrive the div containter ( dog- bar )
    //send that info to a display function to add dogs to dog bar



//display dogs on dog bar 
    // there is a div with the id of 'dog-bar' - find it
    // create a new span 
    // set the inner text of the span to the dogs name (dog.name)
    //    give span id = dog.id
            //set attribute of class to good dog? (might not need this?)    
    // add an event listener to the span  with displayDog(e) function handling on click
    // append the span to the div

// displayDog(e)
// this responds to the span's event listener
    // set an id equal to e.target (.id?)
    // send a fetch request to the pups id page
    // there is a div called called dog-info - capture this 
    //load the dog's information into the div and display it on the page
    // create an h2 with the dogs name
    //create  a an img tag and set it to the dogs image 
    // create a button that says good dog or bad dog based on whther isgooddog is true or false
    // add an event listener to the button with the toggle dog response on click
    // set the id of the button to the id of the 
    //append h2, img, and button to the div

//    toggle good dog 
// toggleDog(e) 
    // set an id to e.target.innertext 
    // change the innertext of the button to good if bad and bad if good 
    // send a patch request to the dogs specific url by using the event id 
        // method patch, in req objcect you update the body  

//make sure each function is called in main
// call main function

const dogsUrl = "http://localhost:3000/pups"



function main(){
    fetchDogs()
}


function fetchDogs(){
    fetch(dogsUrl)
    .then(resp => resp.json())
    .then( dogs => {
        dogs.forEach(dog => {  
        addDogToBar(dog)
        })
    })
}


//display dogs on dog bar 
            //set attribute of class to good dog? (might not need this?)    


function addDogToBar(dog){
    const dogBar = document.querySelector('#dog-bar')
    const newSpan = document.createElement('span')
    newSpan.innerText = dog.name
    newSpan.id = dog.id
    newSpan.addEventListener('click', displayDog)
    dogBar.append(newSpan)

    // console.log(`hi lil ${dog.name}, ${dog.id}, your good dog status is ${dog.isGoodDog}`)
}


// displayDog(e)

    // there is a div called called dog-info - capture this 
    //load the dog's information into the div and display it on the page
    // create an h2 with the dogs name
    //create  a an img tag and set it to the dogs image 
    // create a button that says good dog or bad dog based on whther isgooddog is true or false
    // add an event listener to the button with the toggle dog response on click
    // set the id of the button to the id of the 
    //append h2, img, and button to the div

function displayDog(e){
    const id = e.target.id
    const dogInfoDiv = document.querySelector('#dog-info')
    dogInfoDiv.innerHTML = ""
    let hTWO = document.createElement('h2')
    let pic = document.createElement('img')
    let newButton = document.createElement('button')
    


    dogInfoDiv.append(hTWO, pic, newButton)

    fetch(`http://localhost:3000/pups/${id}`)
    .then(resp => resp.json())
    .then( dog => {  
            hTWO.innerText = dog.name
            pic.setAttribute("src", dog.image)
            if (dog.isGoodDog){
                newButton.innerText = "Good Dog!"
                newButton.addEventListener("click", isBadNow)
            } else {
                newButton.innerText = "Bad Dog"
                newButton.addEventListener("click", isGoodNow)
            }            
            newButton.setAttribute('id', toy.id)

        })

}

function isGoodNow(e){
    console.log("you gotta make this dog good")
}

function isBadNow(e){
    console.log("you gotta make this dog bad")
}

main()


// function addDogToSpan(dog){
//     const span = document.createElement('span')
//     const div = document.querySelector('#dog-bar')
//     span.id = dog.id
//     span.innerText = dog.name
//     div.append(span)
// }