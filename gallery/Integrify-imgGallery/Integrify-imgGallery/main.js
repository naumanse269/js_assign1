console.log(arrayData);

const displayImgs = () => {
    const imageWrapper = document.querySelector('.imageWrapper');
    arrayData.forEach( info => {
        imageWrapper.insertAdjacentHTML("afterbegin",
        `<img src="images/${info.src}" alt="info.src" width="300px", height="400px">`)
        console.log(`images/${info.src}`);        
    })
}

displayImgs();
