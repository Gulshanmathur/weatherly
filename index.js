// How to get your current location
const btn = document.getElementById("btn-tag-loc");

function gotLocation(position) {
    console.log(position);
}

function failedToGet() {
    console.log("access denied");
}



btn.addEventListener("click",async ()=>{
   navigator.geolocation.getCurrentPosition(gotLocation,failedToGet);
})