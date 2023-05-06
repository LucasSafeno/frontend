const previousElement = document.getElementById('previous');
const nextElement = document.getElementById('next');
const sliderEl = document.getElementById('slider');

previousElement.addEventListener('click', onPreviousClick);
nextElement.addEventListener('click', onNextClick);

autoScroll();

function onPreviousClick(){
    const slideWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= slideWidth;
}

function onNextClick(){
    const slideWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += slideWidth;
}


function autoScroll(){
    setInterval( () =>{
        const slideWidth = sliderEl.offsetWidth;
        const numberOfImages = sliderEl.childElementCount;
        const selectedImage = (sliderEl.scrollLeft/slideWidth) + 1;
        console.log(numberOfImages)
        console.log(Math.ceil(selectedImage))
        

        // Se for a ultima, volta pro zero
        if(numberOfImages == selectedImage){
            sliderEl.scrollLeft = 0
          
        }
        //Se não
        
        sliderEl.scrollLeft += slideWidth; 

    },3000);
}