document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const stickyClass = 'sticky-active';
    const stickyOffset = header.offsetHeight; // The height of the header

    function handleScroll() {
        if (window.scrollY >= stickyOffset) {
            header.classList.add(stickyClass);
        } else {
            header.classList.remove(stickyClass);
        }
    }

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

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
            animateElementsSequentially(benefitItems, 'animate__fadeInUp', 700); // Анимация с задержкой 500 мс между элементами
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

document.addEventListener('DOMContentLoaded', function() {
    SmoothScroll({

        // Время скролла 400 = 0.4 секунды
        animationTime : 800,
        // Размер шага в пикселях
        stepSize : 75,
    
        // Дополнительные настройки:
    
        // Ускорение
        accelerationDelta : 50,
        // Максимальное ускорение
        accelerationMax : 2,
    
        // Поддержка клавиатуры
        keyboardSupport : true,
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll : 50,
    
        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm : true,
        pulseScale : 4,
        pulseNormalize : 1,
    
        // Поддержка тачпада
        touchpadSupport : true,
    })
    
});


document.addEventListener('DOMContentLoaded', function() {
    const priceRange = document.getElementById('price-range');
    const priceMinDisplay = document.querySelector('.work-filter__price-min');
    const priceMaxDisplay = document.querySelector('.work-filter__price-max');
    const resultItems = document.querySelectorAll('.work-filter__result-item');
    const filterButton = document.querySelector('.work-filter__button');
    const clearButton = document.querySelector('.work-filter__button-clear');
    
    priceRange.addEventListener('input', function() {
      const value = this.value;
      priceMaxDisplay.textContent = `${value},000`;
    });
    
    filterButton.addEventListener('click', function() {
      const selectedType = document.querySelector('input[name="interior_type"]:checked')?.value;
      const priceLimit = priceRange.value;
      
      resultItems.forEach(function(item) {
        const itemType = item.dataset.type;
        const itemPrice = item.dataset.price;
        
        if ((itemType === selectedType || !selectedType) && itemPrice <= priceLimit) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  
    clearButton.addEventListener('click', function() {
      document.querySelectorAll('input[name="object_type"], input[name="interior_type"]').forEach(function(input) {
        input.checked = false;
      });
      priceRange.value = '27000';
      priceMinDisplay.textContent = '20,000';
      priceMaxDisplay.textContent = '54,000';
      
      resultItems.forEach(function(item) {
        item.style.display = 'block';
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 6;
    const workItems = document.querySelectorAll('.work-filter__result-item');
    const paginationContainer = document.querySelector('.pagination');
    let currentPage = 1;
  
    function displayItems(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
  
      workItems.forEach((item, index) => {
        if (index >= start && index < end) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  
    function setupPagination(totalItems, itemsPerPage) {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      paginationContainer.innerHTML = ''; // Clear existing pagination
  
      for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        if (i === currentPage) pageItem.classList.add('active');
  
        const pageLink = document.createElement('a');
        pageLink.classList.add('page-link');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', (e) => {
          e.preventDefault();
          currentPage = i;
          displayItems(currentPage);
          setupPagination(totalItems, itemsPerPage); // Update pagination
        });
  
        pageItem.appendChild(pageLink);
        paginationContainer.appendChild(pageItem);
      }
    }
  
    // Initial setup
    displayItems(currentPage);
    setupPagination(workItems.length, itemsPerPage);
  });
  

  
  document.addEventListener('DOMContentLoaded', function() {
    Fancybox.bind("[data-fancybox]", {
      // Custom options if needed
    });
  });
  

// Функция для анимации элементов
function animateElements() {
    const items = document.querySelectorAll('.work-filter__result-item');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate__animated', 'animate__fadeInUp');
        }, index * 100); // Задержка между элементами 100ms
    });
}

// Функция для перезапуска анимации
function onContentUpdated() {
    const items = document.querySelectorAll('.work-filter__result-item');
    items.forEach(item => {
        item.classList.remove('animate__animated', 'animate__fadeInUp');
        void item.offsetWidth; // Принудительное пересчитывание стилей
    });

    // Запускаем анимацию заново
    animateElements();
}

document.addEventListener('DOMContentLoaded', function() {
    // Первичная анимация при загрузке страницы
    animateElements();

    // Обработчики событий для кнопок "Подобрать" и "Очистить"
    document.querySelector('.work-filter__button').addEventListener('click', function() {
        // Логика обновления контента...
        onContentUpdated();  // Перезапуск анимации
    });

    document.querySelector('.work-filter__button-clear').addEventListener('click', function() {
        // Логика обновления контента...
        onContentUpdated();  // Перезапуск анимации
    });

    // Пример подключения к событию обновления через пагинацию (если используется)
    document.querySelector('.pagination-link').addEventListener('click', function() {
        // Логика обновления контента...
        onContentUpdated();
    });
});
