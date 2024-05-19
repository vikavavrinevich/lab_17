const citiesByCountry = {
    ger: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    usa: ["New York", "Los Angeles", "Chicago", "Houston"],
    ukr: ["Kyiv", "Kharkiv", "Lviv", "Odessa"]
};

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("cities");
const selectedInfo = document.getElementById("selected");

function updateCities() {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];

  
    citySelect.innerHTML = "";


    if (cities) {
        cities.forEach(function(city) {
            const option = document.createElement("option");
            option.textContent = city;
            option.value = city;
            citySelect.appendChild(option);
        });
    }
}


updateCities();

// Додавання обробника подій для вибору країни
countrySelect.addEventListener("change", function() {
    updateCities();
});

// Додавання обробника подій для вибору міста
citySelect.addEventListener("change", function() {
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCity = citySelect.value;
    selectedInfo.textContent = "Обрана країна: " + selectedCountry + ", обране місто: " + selectedCity;
});
