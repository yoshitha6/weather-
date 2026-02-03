console.log("Script is working");
async function getWeather() {

    let city = document.getElementById("cityInput").value;
    let apiKey = "5101083edee9617f8fd25d7641c3aece";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.getElementById("cityName").innerText = data.name;

    document.getElementById("temperature").innerText =
        "Temperature: " + data.main.temp + " °C";

    document.getElementById("description").innerText =
        data.weather[0].description;

    let iconCode = data.weather[0].icon;

    document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
