// WeatherApiKey = "3a3a0e26a5844f3992a111910240104";
//url = http://api.weatherapi.com/v1/current.json?key=3a3a0e26a5844f3992a111910240104&q=London&aqi=yes
const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const continerTag = document.getElementById("containerNext");

const getData = async (cityName)=>{
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=3a3a0e26a5844f3992a111910240104&q=${cityName}&aqi=yes
    `)
    return await promise.json();
}
const newDiv = document.createElement("div");
const h3Tag = document.createElement("h3");
const h4Tag = document.createElement("h4");
const spantag = document.createElement("span");
const imgTag = document.createElement("img");
spantag.style.marginLeft = "10px"

const childArr = [h3Tag,h4Tag,imgTag,spantag];

button.addEventListener("click",async ()=>{
    
    const value =  input.value;
    for(let i = 0;i<childArr.length;i++){
        childArr[i]=== imgTag ?childArr[i].src ="" :childArr[i].innerHTML = "";
    } 
   try{
    const result= await getData(value);
    // localStorage.setItem("lastSearchedCity",value);  // locally storing the value on browser
    h3Tag.appendChild(document.createTextNode(`${result.location.name}, ${result.location.country}`));
    h4Tag.appendChild(document.createTextNode(`${result.location.localtime}`))
    imgTag.src = result.current.condition.icon;
    imgTag.style.backgroundColor = "black"
    imgTag.style.borderRadius = "10px"
    spantag.appendChild(document.createTextNode(`${result.current.condition.text}`))
    for(let i = 0;i<4;i++){
        newDiv.appendChild(childArr[i]);
    }
    continerTag.appendChild(newDiv);
    input.value = "";
   }catch (error) {
    console.error("Error fetching weather data:", error);
   }   
})

// Pre-fill input with last searched city if available
// const lastSearchCity = localStorage.getItem("lastSearchedCity");
// if(lastSearchCity) input.value = lastSearchCity;
