$("#testimonials-slider-button-left").bind('click', function () {
    const gallery = $("#testimonials-slider-gallery");
    const galleryWidth =  gallery.width();
    const galleryScrollLeftValue = gallery.scrollLeft()

    galleryScrollLeftValue === 0 ? gallery.scrollLeft(20000) :
        gallery.scrollLeft(galleryScrollLeftValue - galleryWidth);
});

$("#testimonials-slider-button-right").bind('click', function () {
    const gallery = $("#testimonials-slider-gallery");
    const galleryWidth =  gallery.width();
    const galleryScrollLeftValue = gallery.scrollLeft()

    gallery.scrollLeft(galleryScrollLeftValue + galleryWidth);
    if(galleryScrollLeftValue >= gallery.scrollLeft()) gallery.scrollLeft(0)
});
