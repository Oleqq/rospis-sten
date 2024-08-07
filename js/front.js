document.addEventListener('DOMContentLoaded', function() {
    // Initialize Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {});

    // Add Animate.css classes on scroll
    var images = document.querySelectorAll('.gallery-index__col img');
    images.forEach(function(img) {
        new Waypoint({
            element: img,
            handler: function() {
                img.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
                this.destroy();
            },
            offset: '50%'
        });
    });
});


