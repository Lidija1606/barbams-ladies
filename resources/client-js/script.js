var c = 0;

var productImg = document.getElementById("product-img");


var resultImg = document.getElementById("result-img");

if (resultImg) {
    var language = resultImg.getAttribute('data-language') === 'ar' ? 'en' : resultImg.getAttribute('data-language');
}

// console.log(language);
var i = 0;


$('.lang-switcher').click(function () {
    // debugger;
    console.log('test');
    let locale = $(this).data('lang');
    if (locale == null) {
        return;
    }
    $.ajax({
        type: 'post',
        url: `/lang`,
        data: {
            locale: locale
        }
    }).done((data) => {
        console.log('done');
    });
    // console.log($(this));
});

function navigationControl() {
    if (c == 0) {
        var x = document.getElementById("nav");
        var y = document.getElementById("logo");
        var z = document.getElementById("menu-icon");
        var v = document.getElementsByClassName("first")[0];
        var offset;
        if (!x.classList.contains("showNav")) {
            x.className = "showNav";
            // offset = x.offsetHeight;
            // v.style.marginTop = (offset - 50) + "px";
            v.className += " transitionNav";
            z.src = "../../img/logo.png"

        } else {
            var height = x.offsetHeight;
            for (var i = 1; i <= Math.floor(height / 2); i++) {
                (function (i) {
                    setTimeout(function () {
                        x.style.height = (height - i * 3) + "px";
                        if (i == Math.floor(height / 2)) {
                            x.removeAttribute("style");
                        }
                    }, 5 * i)
                })(i);
            }
            z.src = "../../img/menu.png";
            c = 1;
            v.removeAttribute("style");
            setTimeout(function () {
                x.className = "";
                c = 0;
            }, 1100);
        }
        if (y.classList.contains("hidden")) {
            y.classList.remove("hidden");
        } else {
            y.classList.add("hidden");
        }

    }
}

function absolutePositionElement(x) {
    x.classList.add("absolutePosition");

    c = 0;
}

function productShowMore() {
    var x = document.getElementsByClassName("product-info-more")[0];
    var y = document.getElementsByClassName("product-info")[0];
    y.style.display = "none";
    x.style.height = "unset";
    x.style.opacity = 1;
}

function productHideMore() {
    var x = document.getElementsByClassName("product-info-more")[0];
    x.style.display = "none";
    x.style.height = "0px";
    document.getElementsByClassName("product-info")[0].style.display = "block";
    setTimeout(function () {
        x.style.opacity = 0;
        x.style.display = "block";
    }, 700);

}

function showFaq(id) {
    var x = document.getElementsByClassName("faq-img-cont")[id];
    var y = document.getElementById("faq-" + id);
    if (x.classList.contains("faq-img-hide")) {
        y.style.opacity = "0";
        x.classList.remove("faq-img-hide");
        x.style.border = "0";
        x.style.zIndex = "unset";
        x.style.minHeight = "unset";
        return;
    }
    y.style.opacity = "1";
    x.classList.add("faq-img-hide");
    x.style.border = "1px solid #2f2f2f";
    x.style.borderRadius = "15px";
    x.style.minHeight = y.offsetHeight + "px";
    x.style.zIndex = "1";
}

function imgN() {

    productImg.style.opacity = "0";
    //iPhone image cache glitch fix [black.png]
    setTimeout(function () {
        productImg.src = "../../img/black.png";
    }, 300);

    if (i < productLen - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(function () {
        productImg.src = "../../img/" + productName + "/" + productImgs[i];
        productImg.style.opacity = "1";
    }, 500);
}

function imgP() {
    productImg.style.opacity = "0";
    setTimeout(function () {
        productImg.src = "../../img/black.png";
    }, 300);
    if (i > 0) {
        i--;
    } else {
        i = productLen - 1;
    }
    setTimeout(function () {
        productImg.src = "../../img/" + productName + "/" + productImgs[i];
        productImg.style.opacity = "1";
    }, 500);
}

function resN() {
    console.log(productName);
    resultImg.style.opacity = "0";
    setTimeout(function () {
        resultImg.src = "../../img/black.png";
    }, 300);
    if (i < resultLen - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(function () {
        resultImg.src = "../../img/" + productName + "/results/" + language + "/" + resultImgs[i];
        resultImg.style.opacity = "1";
    }, 500);
}

function resP() {
    console.log(productName);
    resultImg.style.opacity = "0";
    setTimeout(function () {
        resultImg.src = "../../img/black.png";
    }, 300);
    if (i > 0) {
        i--;
    } else {
        i = resultLen - 1;
    }
    setTimeout(function () {
        resultImg.src = "../../img/" + productName + "/results/" + language + "/" + resultImgs[i];
        resultImg.style.opacity = "1";
    }, 500);
}

if (window.innerWidth < 768) {

    /*  document.onclick = closeMenuHandler;

        function closeMenuHandler() {
            var e = e || window.event;
            e = e.target || e.srcElement;
            console.log(e.nodeName.Element)
            if (e.nodeName == 'BODY' || e.nodeName == 'body' || e.nodeName == 'Body') {
                var x = document.getElementById("nav");
                if (x.classList.contains("showNav")) {
                    navigationControl();
                }

            }
        }

    */

}



$("#arrow-payment-right").bind('click', function () {
    const navwidth = $("#payment-options");
    const val =  $('[name=paymentType]').val();
    const values = $('#payment-options li').toArray().map(e=>e.getAttribute("data-paymentid"))
    const nextValueIndex = (values.indexOf(val) + 1) % values.length
    $('[name=paymentType]').val(values[nextValueIndex]);
    let listWidth = navwidth.width();
    navwidth.scrollLeft(nextValueIndex * listWidth);
});

$("#arrow-payment-left").bind('click', function () {
    const navwidth = $("#payment-options");
    const val =  $('[name=paymentType]').val();
    const values = $('#payment-options li').toArray().map(e=>e.getAttribute("data-paymentid"))
    const nextValueIndex = (values.length + (values.indexOf(val) - 1)) % values.length
    $('[name=paymentType]').val(values[nextValueIndex]);
    let listWidth = navwidth.width();
    navwidth.scrollLeft(nextValueIndex * listWidth);
});

$('#results-gallery-desktop').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 400,
    slideMargin: 0,
    auto: false,
    pager: false,
    touchEnabled: false
});
$("#slider-button-left").bind('click', function () {
    const gallery = $("#slider-gallery");
    const galleryWidth =  gallery.width();
    const galleryScrollLeftValue = gallery.scrollLeft()

    galleryScrollLeftValue === 0 ? gallery.scrollLeft(20000) :
    gallery.scrollLeft(galleryScrollLeftValue - galleryWidth);
});

$("#slider-button-right").bind('click', function () {
    const gallery = $("#slider-gallery");
    const galleryWidth =  gallery.width();
    const galleryScrollLeftValue = gallery.scrollLeft()

    gallery.scrollLeft(galleryScrollLeftValue + galleryWidth);
    if(galleryScrollLeftValue >= gallery.scrollLeft()) gallery.scrollLeft(0)
});

const partBoldText = document.querySelector("#part-bold-text")
if(partBoldText){
    const arrayOfWords = partBoldText.innerHTML.split(" ")
    const unbold = document.createElement("span")
    unbold.innerHTML = arrayOfWords.slice(0,2).join(" ")
    unbold.innerHTML += " "
    const bold = document.createElement("span")
    bold.innerHTML = arrayOfWords.slice(2).join(" ")
    bold.setAttribute("style","font-family:'Gotham Bold'; color: black")
    partBoldText.innerHTML = ""
    partBoldText.appendChild(unbold)
    partBoldText.appendChild(bold)
}
const partBoldTextTop = document.querySelector("#part-bold-text-top")
if(partBoldTextTop){
    const arrayOfWords = partBoldTextTop.innerHTML.split(" ")
    const unbold = document.createElement("span")
    unbold.innerHTML = arrayOfWords.slice(0,2).join(" ")
    unbold.innerHTML += " "
    const bold = document.createElement("span")
    bold.innerHTML = arrayOfWords.slice(2).join(" ")
    bold.setAttribute("style","font-family:'Gotham Bold'")
    partBoldTextTop.innerHTML = ""
    partBoldTextTop.appendChild(unbold)
    partBoldTextTop.appendChild(bold)
}
$(this).trigger('load');

$(function () {
    let selector = '';
    const sliderOptions = {
        pager: false,
        controls: false,
        touchEnabled: false,
        oneToOneTouch: false,
        auto:true,
        speed: 2000,
        stopAutoOnClick: true,
        pause: 5000

};
    if ($(window).width() <= 1023) {
        selector = '.bxslider-mobile';
        sliderOptions.touchEnabled = false;
        sliderOptions.oneToOneTouch = true;
        sliderOptions.responsive = true;
        sliderOptions.swipeThreshold = 1
        sliderOptions.autoHover = true;
        sliderOptions.auto = true;
    } else {
        selector = '.bxslider-desktop';
        sliderOptions.pager = true;

    }
    $(selector).bxSlider(sliderOptions);
});
$('#results-gallery-mobile').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 400,
    slideMargin: 0,
    auto: false,
    pager: false,
    touchEnabled: false,
    onSliderLoad: function() {
        $('.elixir-page-results .bx-wrapper:nth-child(3) .bx-prev').on('click', function (event) {
            var slide = document.getElementById("results-gallery-mobile");
            slide.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
            event.preventDefault();
        });
        $('.elixir-page-results .bx-wrapper:nth-child(3) .bx-next').on('click', function (event) {
            var slide = document.getElementById("results-gallery-mobile");
            slide.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
            event.preventDefault();
        });
    }
});

$("#read-more-btn").click(function() {
    console.log('click on read more');
    var termsModal = $('.tingle-modal');
    termsModal.toggleClass('open');

    var readMoreBtn = $("#read-more-btn").text();
    if (readMoreBtn == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#read-more-btn").text("Read Less");
        $("#more-text").slideDown();
    } else {
        //Stuff to do when btn is in the read less state
        $("#read-more-btn").text("Read More");
        $("#more-text").slideUp();
    }
});

$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 8000,
    //gap in pixels between the tickers
    gap: 10,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
});
