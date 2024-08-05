// OpenWeatherMap API key
const apiKey = "95d8ca1de1fa1c79c191b7fbfac5c6e7";
// Base URL for OpenWeatherMap API with metric units
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Variable to store the current temperature in Celsius
let currentTempCelsius = 0;
// Boolean to keep track of the temperature unit (Celsius or Fahrenheit)
let isCelsius = true;

// Function to fetch weather data for a given city
function checkWeather(city) {
    $.ajax({
        // Construct the API URL with the city name and API key
        url: apiUrl + city + `&appid=${apiKey}`,
        type: "GET",
        // Success callback function
        success: function (data) {
            // Update the current temperature in Celsius
            currentTempCelsius = data.main.temp;
            // Update the temperature display on the page
            updateTemperatureDisplay();

            // Update city name, humidity, and wind speed on the page
            $(".city").text(data.name);
            $(".humidity").text(data.main.humidity + "%");
            $(".wind").text(data.wind.speed + "km/h");

            // Variable to store the background image file name
            let bgImage = '';

            // Update weather icon and background image based on the weather condition
            if (data.weather[0].main === "Clouds") {
                $(".weather-icon").attr("src", "clouds.png");
                bgImage = "clouds.jpg";
            } else if (data.weather[0].main === "Clear") {
                $(".weather-icon").attr("src", "clear.png");
                bgImage = "clear.jpg";
            } else if (data.weather[0].main === "Rain") {
                $(".weather-icon").attr("src", "rain.png");
                bgImage = "green.jpg";
            } else if (data.weather[0].main === "Drizzle") {
                $(".weather-icon").attr("src", "drizzle.png");
                bgImage = "drizzle.jpg";
            } else if (data.weather[0].main === "Mist") {
                $(".weather-icon").attr("src", "mist.png");
                bgImage = "mist.jpg";
            }

            // Change the background image of the card
            $(".card").css("background-image", `url('./${bgImage}')`);

            // Hide any error message
            $(".error").hide();
        },
        // Error callback function
        error: function (xhr) {
            // Show appropriate error message based on the status code
            if (xhr.status === 404) {
                $(".error").text("City not found. Please try again.").show();
            } else {
                $(".error").text("An error occurred. Please try again.").show();
            }
        }
    });
}

// Function to convert temperature from Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to update the temperature display on the page
function updateTemperatureDisplay() {
    if (isCelsius) {
        // Display temperature in Celsius
        $(".temp").text(Math.round(currentTempCelsius) + "°C");
    } else {
        // Convert and display temperature in Fahrenheit
        const tempFahrenheit = convertToFahrenheit(currentTempCelsius);
        $(".temp").text(Math.round(tempFahrenheit) + "°F");
    }
}

// Event handler for the search button click event
$(".search button").click(function () {
    // Get the city name from the input field
    const city = $(".search input").val();
    // Fetch weather data for the entered city
    checkWeather(city);
});

// Event handler for the toggle button click event
$(".toggle-button").click(function () {
    // Toggle the temperature unit between Celsius and Fahrenheit
    isCelsius = !isCelsius;
    // Update the button text based on the current unit
    if (isCelsius) {
        $(this).text("Show in °F");
    } else {
        $(this).text("Show in °C");
    }
    // Update the temperature display on the page
    updateTemperatureDisplay();
});
