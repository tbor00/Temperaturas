let p = {
  temp: document.querySelector("#ingresar"),
  form: document.querySelector("#date"),
  tempe: document.querySelector("#temperaturas"),
  celcius: document.querySelector("#celcius"),
  kelvin: document.querySelector("#kelvin"),
  faren: document.querySelector("#faren"),
};

let t = {
  error: function () {
    p.celcius.style.color = "red";
    p.celcius.innerHTML = `Porfavor Ingrese datos correctos`;
    p.kelvin.style.display = "none";
    p.faren.style.display = "none";
  },

  celcius: function (e) {
    e.preventDefault();
    if (p.temp.value >= 0 && p.temp.value != "") {
      let grados = parseInt(p.temp.value);
      let kelvin = grados + 273.15;
      let far1 = (grados * 9) / 5 + 32;
      p.celcius.style.color = "white";
      p.kelvin.style.display = "block";
      p.faren.style.display = "block";
      p.celcius.innerHTML = `Grados en Celsius ${grados} ºC`;
      p.kelvin.innerHTML = `Grados en kelvin ${kelvin} K `;
      p.faren.innerHTML = `Grados en Fahrenheit ${far1} ºF `;
      p.form.reset();
    } else {
      t.error();
      p.form.reset();
    }
  },

  kelvin: function (e) {
    e.preventDefault();
    if (p.temp.value >= 0 && p.temp.value != "") {
      let grados = parseInt(p.temp.value);
      let kelvin = grados + 273.15;
      let far1 = (grados * 9) / 5 + 32;
      p.celcius.style.color = "white";
      p.kelvin.style.display = "block";
      p.faren.style.display = "block";
      p.celcius.innerHTML = `Grados en Celsius ${grados} ºC`;
      p.kelvin.innerHTML = `Grados en kelvin ${kelvin} K `;
      p.faren.innerHTML = `Grados en Fahrenheit ${far1} ºF `;
      p.form.reset();
    } else {
      t.error();
      p.form.reset();
    }
  },

  farenheit: function (e) {
    e.preventDefault();
    if (p.temp.value >= 0 && p.temp.value != "") {
      let grados = parseInt(p.temp.value);
      let kelvin =((grados + 459.67) * 5) / 9;
      let far1 = (grados * 9) / 5 + 32;
      let celcius = (grados - 32) * 5;
      let celcius1 = celcius / 9;
      p.celcius.style.color = "white";
      p.kelvin.style.display = "block";
      p.faren.style.display = "block";
      p.celcius.innerHTML = `Grados en Farenheit ${grados} ºF`;
      p.kelvin.innerHTML = `Grados en Celcius ${celcius1} ºC`;
      p.faren.innerHTML = `Grados en Kelvin ${kelvin} ºF `;
      p.form.reset();
    } else {
      t.error();
      p.form.reset();
    }
  },
};

p.form.addEventListener("submit", t.celcius);

