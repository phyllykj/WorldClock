function displayTime() {
  let barcelonaElement = document.querySelector("#bcn");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");

  let kualaLumpurElement = document.querySelector("#kl");
  let kualaLumpurDateElement = kualaLumpurElement.querySelector(".date");
  let kualaLumpurTimeElement = kualaLumpurElement.querySelector(".time");

  let washingtonDCElement = document.querySelector("#dc");
  let washingtonDCDateElement = washingtonDCElement.querySelector(".date");
  let washingtonDCTimeElement = washingtonDCElement.querySelector(".time");

  barcelonaDateElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("ddd Mo MMM YYYY");
  barcelonaTimeElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("HH : mm : ss [<small>]A[</small>]");

  kualaLumpurDateElement.innerHTML = moment()
    .tz("Asia/Kuala_Lumpur")
    .format("ddd Mo MMM YYYY");
  kualaLumpurTimeElement.innerHTML = moment()
    .tz("Asia/Kuala_Lumpur")
    .format("HH : mm : ss [<small>]A[</small>]");

  washingtonDCDateElement.innerHTML = moment()
    .tz("US/Eastern")
    .format("ddd Mo MMM YYYY");
  washingtonDCTimeElement.innerHTML = moment()
    .tz("US/Eastern")
    .format("HH : mm : ss [<small>]A[</small>]");
}

setInterval(displayTime, 1000);

let citiesSelectElement = document.querySelector("#selectCity");

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  if (cityTimeZone === "current") {
    moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let selectedCity = document.querySelector(".cities");

  selectedCity.innerHTML = `<div class="city" id="kl">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("ddd Mo MMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "HH : mm : ss [<small>]A[</small>]"
        )}</div>
      </div>`;
}

citiesSelectElement.addEventListener("change", updateCity);
