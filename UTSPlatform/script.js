document.addEventListener("DOMContentLoaded", function () {
  let weather = {
    apiKey: "caa7ff5900e287b9ef01463292d528e2",
    defaultCity: "Yogyakarta",
    errorHandled: false,

    fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + this.apiKey)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data))
        .catch((error) => this.handleError(error));
    },

    displayWeather: function (data) {
      const { name, weather, main, wind, sys } = data;
      if (!name || !weather || !main || !wind || !sys) {
        this.handleError(new Error("Weather data is incomplete"));
        return;
      }
      const { icon, description } = weather[0];
      const { temp, humidity } = main;
      const { speed } = wind;
      const country = sys.country;
      document.querySelector(".city").innerText = `Weather in ${name}, ${country}`;
      document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = `${temp}°C`;
      document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
      document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
      document.querySelector(".weather.loading").style.display = "none";
    },

    handleError: function (error) {
      if (!this.errorHandled) {
        console.error("An error occurred:", error);
        document.querySelector(".city").innerText = "Error: " + error.message;
        document.querySelector(".weather").classList.remove("loading");
        this.errorHandled = true;
        setTimeout(() => {
          resetWeatherToDefault();
          this.errorHandled = false;
        }, 5000); // Reset to default weather after 5 seconds
      }
    },

    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };

  function resetWeatherToDefault() {
    weather.fetchWeather(weather.defaultCity);
  }

  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });

  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

  weather.fetchWeather(weather.defaultCity);
});

const scriptURL = "https://script.google.com/macros/s/AKfycbzlZNTtvHcR88mh5bx8Eu_LvN2heco2S_dvyxQRyccdC4R_F49otuKMN4VOHPYevpaVAw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/lightmode.png";
  } else {
    icon.src = "images/darkmode.png";
  }
};

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-160px";
}
