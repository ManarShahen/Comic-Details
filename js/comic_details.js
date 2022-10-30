var publishDate = document.getElementById("publish_date"); 
var comicName = document.getElementById("name"); 
var writer = document.getElementById("writer") ; 
var comicImage = document.getElementById("comic_image");
var penclier = document.getElementById("penclier");
var coverArtist = document.getElementById("cover_artist"); 
var  description = document.getElementById("description") ; 
var loader = document.getElementById("loader"); 


function onloadFun(){
    
    getComicDetailsFromServer("65091"); 
 };
const getComicDetailsFromServer = async (conmicId) => {

    const response = await fetch("https://gateway.marvel.com/v1/public/comics/"+conmicId+"?ts=1&apikey=a3fe408bde8bdcc10e4b86e2f8a692b5&hash=89a517a9bead0878ae6a0322fad7ff59&fbclid=IwAR2IKWDZ8tj5gq5zxb-Lgi0oZh6bcHrcPG33bpd8w6c8I7MIIlI5PK9qexw");
    const myJson = await response.json(); //extract JSON from the http response
    comicName.innerText = myJson.data.results[0].title ; 
    if(myJson.data.results[0].images.length !==0){
        comicImage.src = myJson.data.results[0].images[0].path+"." + myJson.data.results[0].images[0].extension ; 
    }
    else
    comicImage.src = myJson.data.results[0].thumbnail[0].path+"." + myJson.data.results[0].thumbnail[0].extension ; 


    if (typeof str === 'string' && str !== '') {
        description.innerText = myJson.data.results[0].description ;
    }
    else{
        description.innerText = myJson.data.results[0].textObjects[0].text ;
    }
    const d = new Date(myJson.data.results[0].dates[0].date);
    publishDate.innerText = d.toDateString();
    writer.innerText =myJson.data.results[0].creators.items[0].name ;
    penclier.innerText =myJson.data.results[0].creators.items[1].name ;
    coverArtist.innerText =myJson.data.results[0].creators.items[1].name ;

    loader.style.zIndex = -9999 ; 
    loader.innerHTML="";

}
 