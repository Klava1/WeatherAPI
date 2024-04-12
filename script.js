const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "116b3dfbdbc0eb210d678eddd32843c3",
};

const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter(e) {
  if (e.keyCode === 13) {
    getInfo(input.value);
  }
}

async function getInfo(data) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
  const result = await res.json();
  displayResult(result);
  //   console.log(result);
}

function displayResult(result) {
  let city = document.querySelector("#city");
  city.textContent = `${result.name}, ${result.sys.country}`;

 getMyDate();

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

  let feelsLike = document.querySelector("#feelsLike");
  feelsLike.innerHTML = `Feels like ${Math.round(result.main.feels_like)}<span>°</span>`;

  let conditions = document.querySelector("#conditions");
  conditions.textContent = `${result.weather[0].main}`;

  let variation = document.querySelector("#variation");
  variation.innerHTML = `Min: ${Math.round(result.main.temp_min)}<span>°</span> Max: ${Math.round(
    result.main.temp_max
  )}<span>°</span>`;
}

function getMyDate() {
  const today = new Date();
  const date = document.querySelector("#date");
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-UK', options);
  date.textContent = formattedDate;
}


