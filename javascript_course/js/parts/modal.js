function modal() {

    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    function animate(draw, duration) {
        let start = performance.now();
        requestAnimationFrame(
            function animate(time) {
                let timePassed = time - start;
                if (timePassed > duration) {
                    timePassed = duration;
                }

                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                }
            })
    };

    let menu = document.getElementsByTagName('nav')[0];

    menu.addEventListener('click', function(event) {
        event.preventDefault();
        animate(function(timePassed) {
            let target = event.target;
            let section = document.getElementById(target.getAttribute('href').slice(1));
            window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
        }, 1500);
    });
}

module.exports = modal;