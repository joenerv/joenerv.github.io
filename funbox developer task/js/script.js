window.addEventListener('DOMContentLoaded', function() {

    let foigrasCnt = document.getElementsByClassName('foiegras__cnt');
        foigerasWeight = document.getElementsByClassName('foiegras__weight');
        foigrasText = document.getElementsByClassName('foiegras__text-bottom');
        foigrasTextActive = document.getElementsByClassName('foiegras__text-bottom-select');

        fishCnt = document.getElementsByClassName('fish__cnt');
        fishWeight = document.getElementsByClassName('fish__weight');
        fishText = document.getElementsByClassName('fish__text-bottom');
        fishTextActive = document.getElementsByClassName('fish__text-bottom-select');

    function addSelectFoigras() {
        foigrasCnt[0].addEventListener('mouseout', () => {
            foigrasCnt[0].className = "foiegras__cnt_active foiegras__cnt";
            foigerasWeight[0].className = 'foiegras__weight_active foiegras__weight';
            foigrasText[0].style.display = 'none';
            foigrasTextActive[0].style.display = 'block';
        });
    }

    function addSelectFish() {
        fishCnt[0].addEventListener('mouseout', () => {
            fishCnt[0].className = "fish__cnt_active fish__cnt";
            fishWeight[0].className = 'fish__weight_active fish__weight';
            fishText[0].style.display = 'none';
            fishTextActive[0].style.display = 'block';
        });
    }
    

    foigrasCnt[0].addEventListener('click', addSelectFoigras, false);

    fishCnt[0].addEventListener('click', addSelectFish, false);

    // foigrasCnt[0].removeEventListener('click', foigrasClick, false);

});