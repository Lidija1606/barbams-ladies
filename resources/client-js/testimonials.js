// $(document).ready(() => {
//     loadImages();
// });

// const loadImages = () => {
//     let lang = 'en';
//     let startImageIndex = 1;
//     let numberOfImages = 15;
// $.ajax({
//     type: 'get',
//     url: `/images/testimonials/${startImageIndex}/${numberOfImages}`,
//     beforeSend: () => {
//        // progressBar.show();
//     }
// }).done((data) => {

//     console.log(data)
// })

// }

var galleryContainer = $(".testimonials-gallery");
var progressBar = $("#progress");
var startImageIndex = 0;
var numberOfImages = 12;

function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

const loadImages = () => {
    if (startImageIndex === -1) {
        return;
    }

    let galleryElement = document.createElement("div")
    galleryElement.setAttribute("class", "testimonials-grid")
    galleryElement = $(galleryElement)

    $.ajax({
        type: 'get',
        url: `/images/testimonials/${startImageIndex}/${numberOfImages}`,
        beforeSend: () => {
            progressBar.show();
        }
    }).done((data) => {

        progressBar.hide();
        if (data.images.length > 1) galleryContainer.append(galleryElement)
        data.images.forEach((image) => {
            galleryElement.append(`
                <div class="row">
                    <div class="testimonials-image" class="col-sm-4">
                        <a href="/img/testimonials/${image.path}">
                            <img src="/img/testimonials/${image.thumbnailPath}" alt="${image.altText}" class="img-fluid">
                        </a>
                    </div>
                    <div class="testimonials-logo" class="col-sm-4">
                        <img src="/img/logo.png" alt="Barbams Elixir" class="img-fluid">
                    </div>
                </div>
            `)
        });
        if (data.images.length === 0) {
            startImageIndex = -1;
        } else {
            startImageIndex = startImageIndex + numberOfImages + 1;
        }
    });
}

$(document).ready(() => {
    loadImages();
    const listElm = document.querySelector("body")
    listElm.addEventListener('scroll', debounce(function () {
        const galHeight = document.querySelector(".testimonials-gallery").clientHeight
        if (listElm.scrollTop + listElm.clientHeight >= galHeight) {
            loadImages();
        }
    }, 250));
});

$(document).ready(function () {
    galleryContainer.magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });
});
