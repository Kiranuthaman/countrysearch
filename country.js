
  const search = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.value}?fullText=true`)
    response.json().then((data) => {
      let common = data[0].name.common;
      let official = data[0].name.official;
      let capital = data[0].capital[0];
      let borders = data[0].borders || "None";
      let area = data[0].area;
      let map = data[0].maps.googleMaps;
      let time = data[0].timezones;
      let population = data[0].population;
      let continent = data[0].continents;
      let flag = data[0].flags.png;
      let currency = Object.values(data[0].currencies)[0];
      let nationalLang = Object.values(data[0].languages).join(", ");

      result.innerHTML = `<div class="card m-3" style="width: 18rem;">
        <img src="${flag}" class="card-img-top" alt="Flag of ${common}">
        <div class="card-body">
          <h5 class="card-title">${common}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Capital: ${capital}</li>
          <li class="list-group-item">Official Name: ${official}</li>
          <li class="list-group-item">Population: ${population.toLocaleString()}</li>
          <li class="list-group-item">Borders: ${borders}</li>
          <li class="list-group-item">Area: ${area.toLocaleString()} km²</li>
          <li class="list-group-item">Map: <a href="${map}" target="_blank">Google Maps</a></li>
          <li class="list-group-item">Time zone: ${time.join(", ")}</li>
          <li class="list-group-item">Continent: ${continent}</li>
          <li class="list-group-item">Currency: ${currency.name} (${currency.symbol})</li>
          <li class="list-group-item">Languages: ${nationalLang}</li>
        </ul>
      </div>`;
    });
  }
