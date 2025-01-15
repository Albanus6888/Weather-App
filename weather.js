const apiKey = "e1af940dca7e24d5ff37aa806d242b69";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=&appid=e1af940dca7e24d5ff37aa806d242b69&units=metric";
  
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");

  async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
         
    }
  

}

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
  })

  }

