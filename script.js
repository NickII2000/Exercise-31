const btn = document.querySelectorAll('button'),
    link = document.querySelector('a');
btn[1].onclick = () => {
    alert("WOW-2");
};

// btn[2].addEventListener('click', () => {
//     alert('WOW-3');
// });

// btn[2].addEventListener('click', () => {
//     alert('Second click');
// });

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn[2].removeEventListener('mouseenter', deleteElement);
    }
    // console.log(e.target);
    // console.log('Hover');
};
// btn[2].addEventListener('mouseenter', deleteElement);
btn.forEach(item => {
    item.addEventListener('mouseenter', deleteElement);
});

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log('event.preventDefault()');
});