ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        
        myPlacemark3 = new ymaps.Placemark([55.793915, 37.612317], {
            hintContent: 'ЖК Премиум квартал JAZZ',
            balloonContent: 'ул. Сущевский вал, 49 8 945 658 5555',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/point-3.png',
            // Размеры метки.
            iconImageSize: [40, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -47],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemark14 = new ymaps.Placemark([55.785828, 37.660588], {
            hintContent: 'ЖК Премиум квартал JAZZ',
            balloonContent: 'ул. Сущевский вал, 49 8 945 658 5555',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/point-14.png',
            // Размеры метки.
            iconImageSize: [40, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -47],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemark19 = new ymaps.Placemark([55.751862, 37.685861], {
            hintContent: 'ЖК Премиум квартал JAZZ',
            balloonContent: 'ул. Сущевский вал, 49 8 945 658 5555',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/point-19.png',
            // Размеры метки.
            iconImageSize: [40, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -47],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemark6 = new ymaps.Placemark([55.709531, 37.644819], {
            hintContent: 'ЖК Премиум квартал JAZZ',
            balloonContent: 'ул. Сущевский вал, 49 8 945 658 5555',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/point-6.png',
            // Размеры метки.
            iconImageSize: [40, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -47],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemark12 = new ymaps.Placemark([55.708723, 37.590193], {
            hintContent: 'ЖК Премиум квартал JAZZ',
            balloonContent: 'ул. Сущевский вал, 49 8 945 658 5555',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/point-12.png',
            // Размеры метки.
            iconImageSize: [40, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -47],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark3)
        .add(myPlacemark14)
        .add(myPlacemark19)
        .add(myPlacemark6)
        .add(myPlacemark12);
});