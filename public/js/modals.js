function getCookie(name) {
    function escape(s) {
        return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}


var termsModal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['button'],
    cssClass:['tingle-terms'],
    onOpen: function () {
    },
    onClose: function () {
        setCookie('terms', 'agree', 365);
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    },
    beforeOpen: function () {
        let closeButton = document.querySelector('.tingle-modal__close');
        closeButton.style.display = 'none';
    }
});

    termsModal.setContent(document.querySelector('.terms-modal-placeholder').innerHTML);
    termsModal.addFooterBtn('I agree', 'tingle-btn tingle-btn--primary', function () {
        // here goes some logic
        termsModal.close();
    });

    var cookie = getCookie('terms');
    let country_enabled = $('.terms-modal-placeholder').attr('country_enabled');
    if (!cookie && country_enabled != 0) {
        termsModal.open('test');
    }

var privacyModal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['button'],
    cssClass:['tingle-terms', 'footer-modals', 'privacy'],
    onOpen: function () {
    },
    onClose: function () {
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});
var deliveryModal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    cssClass:['tingle-terms', 'footer-modals'],
    onOpen: function () {
    },
    onClose: function () {
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});
var refundModal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    cssClass:['tingle-terms', 'footer-modals'],
    onOpen: function () {
    },
    onClose: function () {
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});
var termsFooterModal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    cssClass:['tingle-terms', 'footer-modals'],
    onOpen: function () {
    },
    onClose: function () {
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});
var hrTermsModal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    cssClass:['tingle-terms', 'footer-modals'],
    onOpen: function () {
    },
    onClose: function () {
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

privacyModal.setContent(document.querySelector('.privacy-modal-placeholder').innerHTML);

deliveryModal.setContent(document.querySelector('.delivery-modal-placeholder').innerHTML);


refundModal.setContent(document.querySelector('.refund-modal-placeholder').innerHTML);
termsFooterModal.setContent(document.querySelector('.terms-footer-modal-placeholder').innerHTML);

hrTermsModal.setContent(document.querySelector('.hr-terms-modal-placeholder').innerHTML);


privacyLink = document.querySelector('.privacy-link');
deliveryLink = document.querySelector('.delivery-link');
refundLink = document.querySelector('.refund-link');
termsFooterLink = document.querySelector('.terms-footer-modal');
hrTermsLink = document.querySelector('.hr-terms-link');


termsFooterLink.addEventListener('click', function () {
    termsFooterModal.open('test123')
});

privacyLink.addEventListener('click', function () {
    privacyModal.open('test123')
});

deliveryLink.addEventListener('click', function () {
    deliveryModal.open('test123')
});

refundLink.addEventListener('click', function () {
    refundModal.open('test123')
});

hrTermsLink.addEventListener('click', function () {
    hrTermsModal.open('test123')
});


