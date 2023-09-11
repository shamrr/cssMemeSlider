

function clickOnDot (index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if(i === index) dot.classList.add('active');
    })

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(index === i) slide.classList.add('active');
    })
}