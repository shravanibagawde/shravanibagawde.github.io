console.log('Hello World!');

function animateTitle() {
i >= message.length - 1 ? (i = 0) : i++,
(document.title = message[i]),
setTimeout('animateTitle()', 1000)
}
var message = [
'Shravani Bagawde', 'Shravani Bagawde', ';)']
i = 0
animateTitle()

let platesIndex = document.querySelector('.plates-index');

const buttonLeft = document.getElementById('left');
const buttonRight = document.getElementById('right');

buttonRight.onclick = function () {
platesIndex.scrollLeft += 250;
};
buttonLeft.onclick = function () {
platesIndex.scrollLeft -= 250;
};

// const toggle = document.querySelector(".toggle")
// const info1 = document.querySelector(".info1")

// toggle.addEventListener("click", function () {
//     info1.classList.toggle("invisible")
// })

    fetch('https://api.are.na/v2/channels/shravani-bagawde-plates/contents?per=100')
    .then((response) => response.json())
    .then((data) => {

    let plates = data.contents;

    function printRandomPlate() {
    	for(i = 0; i < plates.length; i++) {

        let plate = document.createElement('div')
        plate.setAttribute('id', 'plate' + i)
        plate.className = 'plate';
    
        let image = document.createElement('img');
        image.setAttribute('id', 'image' + i)

        let title = document.createElement('div');
        image.src = plates[i].image.display.url;
        let altText = plates[i].description;
        image.setAttribute("alt", 'Hiii')
        title.innerHTML = plates[i].title;
        title.setAttribute('id', 'title' + i)
        title.className = 'title';
        title.classList.add('text');
        title.classList.add('cap');
        plate.appendChild(image);
        plate.appendChild(title);

        platesIndex.appendChild(plate); 
    }
  };  
printRandomPlate();

});
