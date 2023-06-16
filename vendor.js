window.addEventListener('DOMContentLoaded', function() {

    console.log('vendor1')




    let btnOpen = document.querySelector('.search')
    let btnClose = document.querySelector('.close-header')
    let input = document.querySelector('.find__block')
    let picture = document.querySelector('.section-header__main-logo')
    btnOpen.addEventListener('click', (e) => {
        e.preventDefault();
        input.classList.remove('nonvisible')
        btnOpen.classList.add('nonvisible320')
        picture.classList.add('nonvisible320')
    })

    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        input.classList.add('nonvisible')
        btnOpen.classList.remove('nonvisible320')
        picture.classList.remove('nonvisible320')
    })


    let burger = document.querySelector('#burger')

    burger.addEventListener('click', function() {
        let menu = document.querySelector('#menu')
        let check = document.querySelector('.opacity__menu')
        if (check === null) {
            menu.classList.toggle('is-active')
            burger.classList.toggle('open-menu')
            burger.classList.toggle('background')
            setTimeout(function() {
                menu.classList.toggle('opacity__menu')
            }, 200)
        } else {
            menu.classList.toggle('opacity__menu')
            setTimeout(function() {
                menu.classList.toggle('is-active')
                burger.classList.toggle('open-menu')
                burger.classList.toggle('background')
            }, 200)
        }
    })




    ymaps.ready(init);

    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76166383497522, 37.604341059280415],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        }, {
            // geolocationControlFloat: 'right',
        });
        // Создание геообъекта с типом точка (метка).
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('zoomControl');



        var myPlacemark = new ymaps.Placemark([55.769373, 37.638411], {}, {
            iconLayout: 'default#image',
            iconImageHref: './images/метка.png',
            iconImageSize: [12, 12],

            // control.SearchControl.

        });




        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
    }



    new JustValidate('.formvalid', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    console.log(phone)
                    return Number(phone) && phone.length === 10
                }
            },
            mail: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                required: 'Как вас зовут?',
                minLength: 'Введите верное имя',
                maxLength: 'Введите верное имя'
            },
            tel: {
                required: 'Укажите ваш телефон',
                function: 'Введите верный формат телефона'
            },
            mail: {
                required: 'Укажите ваш e-mail',
                email: 'Введите верный формат e-mail'
            }
        },
    });


    new JustValidate('.formvalidemail', {
        rules: {
            mail: {
                required: true,
                email: true,
            },
        },
        messages: {
            mail: {
                required: 'Укажите ваш e-mail',
                email: 'Введите верный формат e-mail'
            }
        },
    });


    // function validateForms(selector, rules) {
    //     new window.JustValidate(selector, {
    //         rules: rules,
    //         submitHandler: function(form, values, ajax) {

    //         }
    //     })
    // }
    // validateForms('.form', { email: { reqired: true, email: true }, name: { requred: true } });
})