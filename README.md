Weather Dashboard Application
LINK---  https://mehulkhera.github.io/Regrip/



Overview



I have built a simple, responsive weather dashboard application using HTML, CSS, jQuery, and AJAX. The application allows users to enter any city name and displays the current weather information for the selected city. 

Features
Core Features:

A search input for users to enter a city name.
Displays weather information for the selected city, including temperature, humidity, wind speed, and weather conditions (e.g., sunny, cloudy, etc.).




API Integration:

Uses the Free OpenWeatherMap API to fetch real-time weather data.
API Endpoint for current weather:



GET http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
Replace {city name} with the user input and {API key} with your API key.
Handles API responses and displays relevant weather data.



State Management:

Utilizes jQuery to manage the UI state and handle user interactions.

Error Handling:



Implements error handling for scenarios like invalid city input or API fetch errors.



Bonus Features:



The background image of the weather card changes according to the weather conditions, and the layout is responsive to ensure compatibility across various devices and screen sizes.
A feature to toggle between Celsius and Fahrenheit.
Smooth animations and transitions.
