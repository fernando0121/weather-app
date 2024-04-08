const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const emoji = document.getElementById("emoji");
const tempDisplay = document.getElementById("tempDisplay");
const humidity = document.getElementById("humidity");
const desc= document.getElementById("desc");
const errorMsg= document.getElementById("errorMsg");
const weatherform = document.getElementById("weatherform"); // Changed ID to match the form
const nameCity = document.getElementById("nameCity");

const apiKey = `5d5d50c5bb7d132c7aab3a4994501411`;

weatherform.addEventListener("submit", async event => {
    event.preventDefault(); // Prevent form submission

    const city = input.value;
    if(city){
        // Call getWeatherData function here
        try{
            const weatherData =await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch{
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter Your City")
    }
});

async function getWeatherData(city) {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(apiUrl);

        if (response.ok) {
            const weatherData = await response.json();
            console.log(weatherData); // Log the weather data to see the response

            return weatherData;
        } else {
            throw new Error('Unable to fetch data');
        }
    } catch (error) {
        console.error(error);
        displayError("Error fetching data. Please try again.");
    }
}

function displayWeatherInfo(data){
    // Implement the logic to display weather data here
    const {name : city, main:{temp , humidity}, weather :[{description , id}]} = data;
    

    nameCity.textContent = city;
    tempDisplay.textContent= `${Math.floor(temp -273.15)}°C`


    card.appendChild(nameCity);
    card.appendChild(tempDisplay);
}

function getWeatherEmoji(weatherId){
    // Implement the logic to get weather emoji here
}

function displayError(message){
    errorMsg.textContent=message;   
}

