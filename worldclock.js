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
    .format("H : mm : ss [<small>]A[</small>]");

  kualaLumpurDateElement.innerHTML = moment()
    .tz("Asia/Kuala_Lumpur")
    .format("ddd Mo MMM YYYY");
  kualaLumpurTimeElement.innerHTML = moment()
    .tz("Asia/Kuala_Lumpur")
    .format("H : mm : ss [<small>]A[</small>]");

  washingtonDCDateElement.innerHTML = moment()
    .tz("US/Eastern")
    .format("ddd Mo MMM YYYY");
  washingtonDCTimeElement.innerHTML = moment()
    .tz("US/Eastern")
    .format("H : mm : ss [<small>]A[</small>]");
}

setInterval(displayTime, 1000);
