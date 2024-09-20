 console.log('Hello World!');

 let platesIndex = document.querySelector('.plates-index');

 platesIndex.addEventListener('wheel', (event) => {
  event.preventDefault();

  platesIsndex.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});

// const toggle = document.querySelector(".toggle")
// const info1 = document.querySelector(".info1")

// toggle.addEventListener("click", function () {
//     info1.classList.toggle("invisible")
// })

const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');

// buttonRight.onclick = function () {
// platesIndex.scrollLeft += 250;
// };
// buttonLeft.onclick = function () {
// platesIndex.scrollLeft -= 250;
// };

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
