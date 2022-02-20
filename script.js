let mainDiv = document.querySelector(".mainDiv")
let cityname = mainDiv.querySelector(".city-name")
let infoText = cityname.querySelector(".info-text")
let inputBox = cityname.querySelector(" #city ")
let modalBtn1 = document.querySelector(".modalBtn1")
let modalClose= document.querySelector(".modal-close")
let modalBtn = document.querySelector(".modalBtn")

let container = document.querySelector(".container")
let containerBtn = document.getElementById("containerBtn")
let cityName = document.querySelector(".cityName")
let loca = document.querySelector(".City")
let api;

containerBtn.addEventListener("click", () =>{
    // window.location.reload() // for refresh the page.
    mainDiv.classList.add("show")
})

modalClose.addEventListener('click', ()=>{
    // window.location.reload() // for refresh the page.
    mainDiv.classList.remove("show")
    inputBox.value = ""
})




// Press Enter
// inputBox.addEventListener("keyup", (e)=>{
//     if(inputBox.value != ""){
//         infoText.classList.add("pending")
//         infoText.innerHTML = "Get Weather Details."
//         cityName.classList.add("cityValid") 
//     }

//     else{
//         infoText.classList.remove("pending")
//         infoText.innerHTML = ""
//         cityName.classList.remove("cityValid") 

//         infoText.classList.add("error")
//         infoText.innerHTML = "Enter The City Name."
//         cityName.classList.add("cityError")
//     }

    if(e.key == "Enter" && inputBox.value != ""){
        requestApi(inputBox.value)
        loca.innerHTML = cityName.value
        mainDiv.classList.remove("show")
        container.classList.add("show")
        inputBox.value = ""

        infoText.classList.remove("pending")
        infoText.innerHTML = ""
        cityName.classList.remove("cityValid") 

        infoText.classList.remove("error")  
        infoText.innerHTML = ""
        cityName.classList.remove("cityError")
    }

    else if(e.key == "Enter" && inputBox.value == ""){
        infoText.classList.add("error")
        infoText.innerHTML = "Enter The City Name."
        cityName.classList.add("cityError")
    }
//})



let apikey = '2d4dd6976f8fd442dfb960f2b0b4471b';
function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    fetchData()
}

function fetchData(){
    infoText.classList.add("pending")
    infoText.innerHTML = "Get Weather Details."
    cityName.classList.add("cityValid")
    // getting api response and returning it with parsing into js obj and in another
    // then function calling weatherDetails function with passing api result ans an argument.
    fetch(api).then(response => response.json()).then(result => weatherDetails(result))
}

function weatherDetails(info){
    if(info.cod == "404"){
        infoText.classList.replace("pending","error")
        infoText.innerHTML = `${inputBox.value} is't a valid city name.`
        cityName.classList.replace("cityValid","cityError")
    }else{
        infoText.classList.remove("pending","error")
        infoText.innerHTML = "Get Weather Details."
        cityName.classList.remove("cityValid","cityError")
    }
    console.log(info);
}


// Press Button
// modalBtn.addEventListener("click",() =>{
//     if(inputBox.value == ""){
//         infoText.classList.add("error")
//         infoText.innerHTML = "Enter The City Name."
//         cityName.classList.add("cityError")
//     }
//     else{
//         requestApi(inputBox.value)
        
//         // weatherDetails()
//         mainDiv.classList.remove("show")
//         loca.innerHTML = cityName.value
//         inputBox.value = ""
        
//         infoText.classList.remove("error")  
//         infoText.innerHTML = ""
//         cityName.classList.remove("cityError")

//         infoText.classList.remove("pending")
//         infoText.innerHTML = ""
//         cityName.classList.remove("cityValid") 
//     }
// })











