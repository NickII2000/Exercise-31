const btn = document.querySelectorAll('button');
btn[1].onclick = () => {
    alert("WOW-2");
};

// btn[2].addEventListener('click', () => {
//     alert('WOW-3');
// });

// btn[2].addEventListener('click', () => {
//     alert('Second click');
// });

btn[2].addEventListener('mouseenter', (e) => {
    e.target.remove();
    // console.log(e.target);
    // console.log('Hover');
});