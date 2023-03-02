function changeColor(e, color) {
    document.querySelector('#phone').src = e;
    const circle = document.querySelector('.circle');
    circle.style.background = color;
};