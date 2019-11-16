document.onreadystatechange = () => {
    if (document.readyState === 'complete'){
        let name = document.querySelector(".name");
        name.classList.add('animated', 'bounceIn');

        name.addEventListener('click', (e) => {
            name.classList.add('hinge');
        });
    }
}