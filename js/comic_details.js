var publishDate = document.getElementById("publish_date");
var comicName = document.getElementById("name");
var writer = document.getElementById("writer");
var comicImage = document.getElementById("comic_image");
var penclier=document.getElementById("penclier");
var coverArtist= document.getElementById("cover_artist");
var description = document.getElementById("description");
var loader = document.getElementById("loader");


function onloadFun() {
    getComicDetailsFromServer("65091");
};


const getComicDetailsFromServer = async (conmicId) => {

    const response = await fetch("https://gateway.marvel.com/v1/public/comics/" + conmicId + "?ts=1&apikey=a3fe408bde8bdcc10e4b86e2f8a692b5&hash=89a517a9bead0878ae6a0322fad7ff59");
    const myJson = await response.json();
    fillPageContent(myJson);
    hideLoaderLayer();
}

function fillPageContent(myJson) {
    comicName.innerText = myJson.data.results[0].title;
    comicImage.src = myJson.data.results[0].images[0].path + ".jpg";
    writer.innerText = myJson.data.results[0].creators.items[0].name;
    penclier.innerText=myJson.data.results[0].creators.items[1].name;
    coverArtist.innerText=myJson.data.results[0].creators.items[1].name;
    description.innerText = myJson.data.results[0].description;
    const d = new Date(myJson.data.results[0].dates[0].date);
    publishDate.innerText = d.toDateString();

}
function hideLoaderLayer() {
    loader.style.zIndex = -9999;
    loader.innerHTML = "";

}
