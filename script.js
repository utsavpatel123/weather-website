

let search = document.getElementById("search")




search.addEventListener("click", async function(){
    
    let city = document.getElementById("input").value

     if (city === "") {
        alert("Input Can't be Impty!")
     }
   


    var celsius = document.getElementById("celsius")
    var cityname = document.getElementById("cityName")
    var humidity = document.getElementById("humi")
    var wind = document.getElementById("wind")
    var cloudImage = document.getElementById("cloudImage")
    
    
        try {


            const apikey = "d0ff1839863a8b1161c69575a14b9408";   
            const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
      
          
            let response = await api.json()
           

             celsius.innerHTML = ((response.main.temp)/10).toFixed(1) + " " + "&#8451;" 
             cityname.innerHTML = response.name  
             humidity.innerHTML = response.main.humidity + " " + "%"              
             wind.innerHTML = response.wind.speed + " " + "km/h"  


             if(response.weather[0].main == "Clouds"){
               cloudImage.src = "./images/clouds.png"

             }
             else if(response.weather[0].main === "Clear"){
             cloudImage.src = "./images/sun.png"
             }

             else if(response.weather[0].main === "Rain"){
              cloudImage.src = "./images/rain.png"

             }
             else if(response.weather[0].main === "Drizzle"){
                cloudImage.src = "./images/Drizzle.png"
             }
             else if(response.weather[0].main === "Mist"){
            cloudImage.src = "./images/mist.png"
             }


          } catch (error) {
            alert("City Name is Invalid!")
          }


    })




 


              








