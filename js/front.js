document.addEventListener('DOMContentLoaded', function() {
    // Initialize Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {});

    // Add Animate.css classes on scroll
    var leftImages = document.querySelectorAll('.gallery-index__col-left img');
    var rightImages = document.querySelectorAll('.gallery-index__col-right img');

    leftImages.forEach(function(img) {
        new Waypoint({
            element: img,
            handler: function() {
                img.classList.add('animate__animated', 'animate__fadeInLeft');
                this.destroy();
            },
            offset: '100%'
        });
    });

    rightImages.forEach(function(img) {
        new Waypoint({
            element: img,
            handler: function() {
                img.classList.add('animate__animated', 'animate__fadeInRight', 'animate__delay-1s');
                this.destroy();
            },
            offset: '100%'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    function animateElementsSequentially(elements, animationClass, delay) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate__animated', animationClass);
            }, index * delay);
        });
    }

    var benefitItems = document.querySelectorAll('.benefits__item');

    new Waypoint({
        element: benefitItems[0], // Точка срабатывания Waypoint
        handler: function() {
            animateElementsSequentially(benefitItems, 'animate__fadeInUp', 500); // Анимация с задержкой 500 мс между элементами
            this.destroy(); // Уничтожить Waypoint после выполнения
        },
        offset: '100%' // Запуск анимации, когда элемент прокручен на 75% в видимой области
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Функция для последовательной анимации элементов
    function animateElementsSequentially(elements, animationClasses, delay) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                const animationClass = animationClasses[index % animationClasses.length];
                element.classList.add('animate__animated', animationClass);
            }, index * delay);
        });
    }

    // Список классов анимации для чередования
    const animationClasses = ['animate__fadeIn', 'animate__fadeInUp', 'animate__fadeInDown', 'animate__fadeInLeft', 'animate__fadeInRight'];

    // Получить все элементы с суффиксом __title
    var titleElements = document.querySelectorAll('[class*="__title"]');

    // Инициализировать Waypoints для элементов с суффиксом __title
    titleElements.forEach((element, index) => {
        new Waypoint({
            element: element,
            handler: function() {
                const animationClass = animationClasses[index % animationClasses.length];
                element.classList.add('animate__animated', animationClass);
                this.destroy(); // Уничтожить Waypoint после выполнения
            },
            offset: '100%' // Запуск анимации, когда элемент прокручен на 75% в видимой области
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Массив классов анимации для строк
    const oddRowAnimationClass = 'animate__fadeInRight';
    const evenRowAnimationClass = 'animate__fadeInLeft';

    // Получить все элементы .row.work-process__step
    var stepRows = document.querySelectorAll('.row.work-process__step');

    stepRows.forEach((row, rowIndex) => {
        new Waypoint({
            element: row,
            handler: function() {
                // Определяем анимационный класс для строки
                const rowAnimationClass = (rowIndex % 2 === 0) ? evenRowAnimationClass : oddRowAnimationClass;

                // Добавляем задержку для поочередной анимации
                setTimeout(() => {
                    row.classList.add('animate__animated', rowAnimationClass);
                }, rowIndex * 500); // Задержка 500ms для каждого элемента

                this.destroy(); // Уничтожить Waypoint после выполнения
            },
            offset: '100%' // Запуск анимации, когда элемент прокручен на 75% в видимой области
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Функция для последовательной анимации элементов
    function animateElementsSequentially(elements, animationClass, delay) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate__animated', animationClass);
            }, index * delay);
        });
    }

    // Массив классов анимации для карточек
    const cardAnimationClass = 'animate__bounceInLeft';

    // Получить все элементы .card
    var faqCards = document.querySelectorAll('.accordion .card');

    faqCards.forEach((card, cardIndex) => {
        new Waypoint({
            element: card,
            handler: function() {
                // Добавляем задержку для поочередной анимации
                setTimeout(() => {
                    card.classList.add('animate__animated', cardAnimationClass);
                }, cardIndex * 500); // Задержка 500ms для каждого элемента

                this.destroy(); // Уничтожить Waypoint после выполнения
            },
            offset: '100%' // Запуск анимации, когда элемент прокручен на 75% в видимой области
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Функция для добавления анимационного класса с задержкой
    function animateElementWithDelay(element, animationClass, delay) {
        setTimeout(() => {
            element.classList.add('animate__animated', animationClass);
        }, delay);
    }

    // Получить элемент .faq__contact
    var faqContact = document.querySelector('.faq__contact');

    // Определить класс анимации и задержку
    const animationClass = 'animate__fadeInRight';
    const delay = 2000; // 2 секунды

    // Создать Waypoint для .faq__contact
    new Waypoint({
        element: faqContact,
        handler: function() {
            animateElementWithDelay(faqContact, animationClass, delay);
            this.destroy(); // Уничтожить Waypoint после выполнения
        },
        offset: '75%' // Запуск анимации, когда элемент прокручен на 75% в видимой области
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Функция для последовательной анимации
    function animateElementSequentially(element, animationClasses, delayBetween) {
        animationClasses.forEach((animationClass, index) => {
            setTimeout(() => {
                element.classList.add('animate__animated', animationClass);
            }, index * delayBetween);
        });
    }

    // Получить элемент .hero__photo
    var heroPhoto = document.querySelector('.hero__photo');

    // Определить классы анимации и задержку между ними
    const animationClasses = ['animate__fadeIn', 'animate__pulse'];
    const delayBetween = 1000; // 1 секунда между анимациями

    // Создать Waypoint для .hero__photo
    new Waypoint({
        element: heroPhoto,
        handler: function() {
            animateElementSequentially(heroPhoto, animationClasses, delayBetween);
            this.destroy(); // Уничтожить Waypoint после выполнения
        },
        offset: '100%' // Запуск анимации, когда элемент прокручен на 75% в видимой области
    });


});
