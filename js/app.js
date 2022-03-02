const getweather = () => {
    const API_KEY = `c74d943336d6ea00ba6892fa945ef33a`;
    const cityName = document.getElementById('city_name').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = (temperature) => {
    setInnerText('city', temperature.name)
    setInnerText('temp', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)

    // add icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url)

    // clear input field
    document.getElementById('city_name').value = ''
}