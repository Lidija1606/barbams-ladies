var galleryContainer = $(".galeries-container");
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



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
const loadImages = () => {
    if (startImageIndex === -1) {
        return;
    }
    const browserWidth = window.innerWidth
    let galleryElement = document.createElement("div")
    galleryElement.setAttribute("class", "grid-gallery")
    galleryElement = $(galleryElement)
    const featureImages = document.querySelectorAll(".featureImage")

    $.ajax({
        type: 'get',
        url: `/images/results/${startImageIndex}/${numberOfImages}`,
        beforeSend: () => {
            progressBar.show();
        }
    }).done((data) => {

        progressBar.hide();
        const notResults = shuffle([...document.querySelector(".invisible").querySelectorAll(".not-result")])
        const onlyTexts = [...document.querySelector(".invisible").querySelectorAll(".text")]
        const orderButton = document.querySelector(".results-order-button")
        if (data.images.length > 1) galleryContainer.append(galleryElement)
        const noEmpty = notResults.filter(e => ![...e.classList].includes("empty"))
        data.images.forEach((image, index) => {
            if (browserWidth > 1100) {
                if ([1, 2, 5].some(a => a === (index + 1) % 6)) {
                    if (index === 4) {
                        const clone = featureImages[0].cloneNode(true)
                        clone.setAttribute("style", "grid-area: f")
                        galleryElement.append(clone)
                    }
                    if (index === 10) {
                        const clone = featureImages[1].cloneNode(true)
                        clone.setAttribute("style", "grid-area: fe")
                        galleryElement.append(clone)
                    }
                    galleryElement.append(`
                <div class="result">
                    <a href="/img/results/${image.path}" class="col-sm-4">
                    <img src="/img/results/${image.thumbnailPath}" class="img-fluid">
                    </a>
                    <p>${image.title}</p>
                </div>
            `)
                    const cloned = notResults[index].cloneNode(true)
                    cloned && cloned.setAttribute("style", "display: flex")

                    galleryElement.append(cloned)
                } else {
                    const cloned = notResults[index].cloneNode(true)
                    cloned && cloned.setAttribute("style", "display: flex")

                    galleryElement.append(cloned)

                    galleryElement.append(`
                <div class="result">
                    <a href="/img/results/${image.path}" class="col-sm-4">
                    <img src="/img/results/${image.thumbnailPath}" class="img-fluid">
                    </a>
                    <p>${image.title}</p>
                </div>
            `)
                }
            }
            else if (browserWidth > 500) {
                galleryElement.append(`
                <div style={display: none}">
                   
                </div>
            `)
                if (index === 4) {
                    const clone = featureImages[0].cloneNode(true)
                    clone.setAttribute("style", "grid-area: f")
                    galleryElement.append(clone)
                }
                if (index === 10) {
                    const clone = featureImages[1].cloneNode(true)
                    clone.setAttribute("style", "grid-area: fe")
                    galleryElement.append(clone)
                }
                galleryElement.append(`
                <div class="result">
                    <a href="/img/results/${image.path}" class="col-sm-4">
                    <img src="/img/results/${image.thumbnailPath}" class="img-fluid">
                    </a>
                    <p>${image.title}</p>
                </div>
            `)
                const cloned = noEmpty[index].cloneNode(true)
                cloned && cloned.setAttribute("style", "display: flex")

                galleryElement.append(cloned)
            }
            else {
                const clone = orderButton.cloneNode(true)
                !![...clone.classList].includes("results-order-button-invisible") && clone.classList.toggle("results-order-button-invisible")
                
                galleryElement.append(`
                <div class="result">
                    <a href="/img/results/${image.path}" class="col-sm-4">
                    <img src="/img/results/${image.thumbnailPath}" class="img-fluid">
                    </a>
                    <p>${image.title}</p>
                    <hr />
                    <div>${onlyTexts[index].innerHTML}</div>
                </div>
            `)
                if((index + startImageIndex + 1) % 5 === 0) {
                    galleryElement.append(clone)}
                // const cloned = onlyTexts[index].cloneNode(true)
                // cloned && cloned.setAttribute("style", "display: flex")

                // galleryElement.append(cloned)
            }



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
        const galHeight = document.querySelector(".galeries-container").clientHeight
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
