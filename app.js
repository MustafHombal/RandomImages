const btn1 = document.querySelector(".btn");
const imagecontainer1 = document.querySelector(".image-container");



function addNewImages(){
    for (let index = 0; index < imagenum; index++) {
    const newImages = document.createElement('img');
    newImages.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imagecontainer1.appendChild(newImages);
}
}

btn1.addEventListener("click", ()=>{
    imagenum = 10;
    addNewImages();
})