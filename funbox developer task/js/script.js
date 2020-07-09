window.addEventListener('DOMContentLoaded', function() {


    let foigrasBox = document.querySelector('.foiegras__cnt');
    let foigrasTextBottom = document.querySelector('.foiegras__text-bottom');
    let foigrasTextBottomSelect = document.querySelector('.foiegras__text-bottom-select');
    let foigrasWeight = document.querySelector('.foiegras__weight');
    let foigrasLink = document.querySelector('.foiegras-link');

    let fishBox = document.querySelector('.fish__cnt');
    let fishWeight = document.querySelector('.fish__weight');
    let fishTextBottom = document.querySelector('.fish__text-bottom');
    let fishTextBottomSelect = document.querySelector('.fish__text-bottom-select');
    let fishLink = document.querySelector('.fish-link');


    // упаковка с фуа-гра
    foigrasBox.addEventListener('click', () => {
        
        if (foigrasBox.classList.contains('foiegras__cnt_active')) {
            foigrasBox.addEventListener('mouseleave', () => {
                foigrasBox.classList.remove('foiegras__cnt_active');
                foigrasTextBottom.classList.remove('hide');
                foigrasTextBottomSelect.classList.remove('show');
                foigrasWeight.classList.remove('foiegras__weight_active');
            }); 
        } else {
            foigrasBox.addEventListener('mouseleave', () => {
                foigrasBox.classList.add('foiegras__cnt_active');
                foigrasTextBottom.classList.add('hide');
                foigrasTextBottomSelect.classList.add('show');
                foigrasWeight.classList.add('foiegras__weight_active');
            });
            
        }
    });

    foigrasLink.addEventListener('click', () => {
            
        foigrasBox.classList.toggle('foiegras__cnt_active');
        foigrasTextBottom.classList.add('hide');
        foigrasTextBottomSelect.classList.add('show');
        foigrasWeight.classList.add('foiegras__weight_active');

    });

    // упаковка с рыбой
    fishBox.addEventListener('click', () => {
        if (fishBox.classList.contains('fish__cnt_active')) {
            fishBox.addEventListener('mouseleave', () => {
                fishBox.classList.remove('fish__cnt_active');
                fishWeight.classList.remove('fish__weight_active');
                fishTextBottom.classList.remove('hide');
                fishTextBottomSelect.classList.remove('show');
            })
        } else {
            fishBox.addEventListener('mouseleave', () => {
                fishBox.classList.add('fish__cnt_active');
                fishWeight.classList.add('fish__weight_active');
                fishTextBottom.classList.add('hide');
                fishTextBottomSelect.classList.add('show');

            });
        }
    });

    fishLink.addEventListener('click', () => {

        fishBox.classList.add('fish__cnt_active');
        fishWeight.classList.add('fish__weight_active');
        fishTextBottom.classList.add('hide');
        fishTextBottomSelect.classList.add('show');
    });
});