var form = document.forms["orderForm"];
var inputPrice = $("#price-data")

var product = null;
var orderId = null;

var productId = window.location.pathname.split("/").pop();
var currency = $('#input[name=price]').data('currency');
let countryCode = $("input[name=price]").data('country');
let specialPriceIsActive = false;
if($("input:hidden[name=special_price]")){
    specialPriceIsActive = $("input:hidden[name=special_price]").val() > 0 ? true : false;
}
let promoCodeIsActive = false;
if($("input[name=discount]").length > 0){
    promoCodeIsActive = true;
}
//
//
$.ajax({
    type: 'get',
    url: `/api/order/${productId}`
}).done((data) => {
    $('.inc-desc-button').prop("disabled", false);
    product = data.product;
});
var balkansCountries = ['BA', 'RS', 'ME', 'MK', 'HR'];
var discountedCountries = ['AE'];
var nonEuropeCountries = ['AE', 'IN', 'SA', 'CA', 'US', 'AL', 'BA', 'RS', 'ME', 'MK'];
var noFreeShippingCountries = balkansCountries.concat(discountedCountries)
$("#inc-button").click(function () {

    var quantity = Number(form["quantity"].value);
    var currency = $("input[name=price]").data('currency');
    var shipping = $("input[name=price]").data('shipping');
    var price = $("input[name='price']").data('price');
    let old_price = $("input:hidden[name=old_price]").val();
    if (!noFreeShippingCountries.includes(countryCode)) {
        price = price - shipping;
    }
    if (quantity >= 6) {
        return;
    }
    form["quantity"].value = quantity + 1;


    let html = '';
    let total = Number(price) * Number(form["quantity"].value);

    if(specialPriceIsActive && quantity > 0){
        inputPrice.value = String((Number(price) * (Number(form["quantity"].value)-1)) + Number($("input:hidden[name=special_price]").val())) + currency;
        total = (Number(price) * (Number(form["quantity"].value)-1))+ Number($("input:hidden[name=special_price]").val());
    }else {
        inputPrice.value = String(Number(price) * Number(form["quantity"].value)) + currency;
    }

    if (!noFreeShippingCountries.includes(countryCode)) {
        let sum = total + shipping;
        html = String(sum.toFixed(2));
        $('.quantity-discount').show();
    }else{
        html = String(total.toFixed(2));
    }

    $("input:hidden[name=priceToBeDiscounted]").val(html);
    if (promoCodeIsActive && $("input[name=discount]").val() !== "") {
        html = countDiscount(Number($("input[name=discount]").val()));
    }

    if(html.indexOf(".")> -1){
        html = html.slice(0, (html.indexOf("."))+3);
    }

    if ($('.old-price h2 span').length > 0) {
        let oldpr = old_price * Number(form["quantity"].value);
        let oldprice = String(oldpr.toFixed(2));
        if (countryCode === 'AE') {
            $(".old-price h2 span").html(currency + ' ' + oldprice);
        }else{
            $(".old-price h2 span").html(oldprice + ' ' + currency);
        }
    }
    if (countryCode === 'AE') {
        $("#price-data h2 span").html(currency + ' ' + html);
    }else{
        $("#price-data h2 span").html(html + ' ' + currency);
    }
});


$("#dec-button").click(function () {
    var quantity = Number(form["quantity"].value) - 1;
    var currency = $("input[name=price]").data('currency');
    var shipping = $("input[name=price]").data('shipping');
    var price = $("input[name='price']").data('price');
    let old_price = $("input:hidden[name=old_price]").val();
    if (!noFreeShippingCountries.includes(countryCode)) {
        price = price - shipping;
    }
    if (Number(form["quantity"].value) !== 1) {
        form["quantity"].value = Number(form["quantity"].value) - 1;

        let html = '';
        let total = Number(price) * Number(form["quantity"].value);
        if(specialPriceIsActive){
            if(quantity == 2 ){
                inputPrice.value = String( Number(price) + Number($("input:hidden[name=special_price]").val())) + currency;
                total = (Number(price)) + Number($("input:hidden[name=special_price]").val());
            }else if(quantity >2){
                inputPrice.value = String(Number(price) * Number(form["quantity"].value)) + currency;
                total = (Number(price) * (Number(form["quantity"].value)-1))+ Number($("input:hidden[name=special_price]").val());
            }
        }else {
            inputPrice.value = String(Number(price) * Number(form["quantity"].value)) + currency;
        }

        if (!noFreeShippingCountries.includes(countryCode)) {
            let sum = total + shipping;
            html = String(sum.toFixed(2));
            if (form["quantity"].value == 1) {
                $('.quantity-discount').hide();
            }
        }else{
            html = String(total.toFixed(2));
        }

        $("input:hidden[name=priceToBeDiscounted]").val(html);
        if (promoCodeIsActive && $("input[name=discount]").val() !== "") {
            html = countDiscount(Number($("input[name=discount]").val()));
        }

        if(html.indexOf(".")> -1){
            html = html.slice(0, (html.indexOf("."))+3);
        }

        if ($('.old-price h2 span').length > 0) {
            let oldpr = old_price * Number(form["quantity"].value);
            let oldprice = String(oldpr.toFixed(2));
            if (countryCode === 'AE') {
                $(".old-price h2 span").html(currency + ' ' + oldprice);
            }else{
                $(".old-price h2 span").html(oldprice + ' ' + currency);
            }
        }

        if (countryCode === 'AE') {
            $("#price-data h2 span").html(currency + ' ' + html);

        }else{
            $("#price-data h2 span").html(html + ' ' + currency);
        }

    }
});


function inc() {
    console.log(form["quantity"].value);
    form["quantity"].value = Number(form["quantity"].value) + 1;
    // //inputPrice.value = 10 + ((price * 10 * Number(form["quantity"].value))) / 10;
    // price.value = (price * Number(form["quantity"].value)) + shipping;
    inputPrice.value = ($("input[name='price']").data('price') * Number(form["quantity"].value));
}

function dec() {
    if (Number(form["quantity"].value) !== 1) {
        form["quantity"].value = Number(form["quantity"].value) - 1;
        //inputPrice.value = ((price * 10 * Number(form["quantity"].value)) ) / 10;
        // inputPrice.value = (price * Number(form["quantity"].value)) + shipping;
        inputPrice.value = ($("input[name='price']").data('price') * Number(form["quantity"].value));
    }
}

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})()


$("input[name=promoCode]").on('keydown', function () {
    delay(function () {
        toggleSpinner();
        $.ajax({
            type: 'POST',
            url: '/api/validatePromoCode',
            data: {promoCode: $("input[name=promoCode]").val()}
        }).done((data) => {
            if (data.status === 'promoCodeError') {
                $("#promoCodeError").show();
                $("input[name=discount]").val();
                let currency = $("input[name=price]").data('currency');
                inputPrice.value = String($("input[name='price']").data('price') * Number(form["quantity"].value)) + currency;
                toggleSpinner(false);
            } else {
                $("#promoCodeError").hide();
                $("input[name=discount]").val(data.discount);
                $("#promoCodeSuccess").show();
                countDiscount(data.discount)
            }

            setTimeout(function () {
                $('.cover-spin').hide();
            }, 2000);


        }).fail((error) => {
            alert(error.message);
        });
    }, 1500);
});

function countDiscount(promoCode){
    let price =  $("input:hidden[name=priceToBeDiscounted]").val();
    let discount = (promoCode / 100 ) * price;
    let total = price - discount;

    $("#promoCodeSuccess").show();
    $("#price-data span").html($("input[name=price]").data('currency') + " " + String(total.toFixed(2)));

    return String(total.toFixed(2));
}

$('input').on('blur', (e) => {

    let val = e.currentTarget.value;
    let name = e.currentTarget.name;
    let error = false;
    error = formInputHasError(name, val);
    if (error) {
        $(`p#${name}.form-error`).show();
    } else {
        $(`p#${name}.form-error`).hide();
    }

});

function formInputHasError(name, val) {
    switch (name) {
        case 'firstnameAndLastname':
            if (val.length < 3) {
                return true;
            }
            break;
        case 'lastname':
            if (val.length < 3) {
                return true;
            }
            break;
        case 'phone':
            if (nonEuropeCountries.includes(countryCode)) {
                if (val.length < 6) {
                    return true;
                }
                break;
            } else {
                if (val.length < 9) {
                    return true;
                }
                break;
            }
        case 'email':
            var re = /^.+@.+\..+$/;
            if (val.length < 5 || !re.test(val)) {
                return true;
            }
            break;
        case 'address':
            if (val.length < 3) {
                return true;
            }
            break;
        case 'city':
            if (val.length < 3) {
                return true;
            }
            break;
        case 'country':
            if (val.length < 3) {
                return true;
            }
            break;
        case 'zip':
            if (val.length < 3) {
                return true;
            }
            break;
        case 'note':
            if (val.length > 500) {
                return true;
            }
            break;
        case 'paymentType':
            if (typeof val === 'undefined') {
                console.log('undefined');

                return true;
            }
            break;

    }
}

function resetErrors() {
    $('.form-error').hide();
}

function toggleSpinner(show = true) {
    if (show) {
        $('.cover-spin').show();
    } else {
        $('.cover-spin').hide();
    }
}

$('#back_to_2').click((e) => {
    $('#order_step_1').show();
    $('#order_step_2').hide();
});


$('.btn-order').click((e) => {

    e.preventDefault();

    resetErrors();
    toggleSpinner();
    let priceWithoutShipping = $("input[name=price]").val();
    let p = priceWithoutShipping.match(/\d+/)[0]; //remove currency
    let fullPrice = Number(p) + Number($("input[name=price]").data('shipping'));
    let currency = $("input[name=price]").data('currency');
    let order = {
        firstnameAndLastname: $("input[name=firstnameAndLastname]").val(),
        phone: $("input[name=phone]").val(),
        email: $("input[name=email]").val(),
        address: $("input[name=address]").val(),
        // city: $("select[name=city]").val(),
        zip: (typeof ($("input[name=zip]").val()) != 'undefined') ? $("input[name=zip]").val() : '000',
        note: $("textarea[name=note]").val(),
        quantity: $("input[name=quantity]").val(),
        price: fullPrice + $("input[name=price]").data('currency'),
        productPriceId: $("input[name=price]").data('price-id'),
        lang: $("input[name=price]").data('lang'),
        productId: productId,
        sessionId: $("input[name=price]").data('session-id'),
        paymentType: $('[name=paymentType]').val(),
        promoCode: $("input[name=promoCode]").val()
    };
    let countryCode = $("input[name=price]").data('country');
    // countryCode = 'AE';
    if (countryCode === 'AE' || countryCode === 'IN') {
        order.city = $("select[name=city]").val();
    } else {
        order.city = $("input[name=city]").val();
    }
    var formError = false;

    Object.keys(order).forEach((key, index) => {
        let error = formInputHasError(key, order[key]);
        if (error) {
            formError = true;
            $("input[name=" + key + "]").focus();
            $(`p#${key}.form-error`).show();
        } else {
            $(`p#${key}.form-error`).hide();
        }
    });

    if (!formError) {
        $.ajax({
            type: 'POST',
            url: '/api/order',
            data: {order: order}
        }).done((data) => {
            if (data.status === true) {
                if ('type' in data && data.type === 'corvus') {
                    let formFields = data.data;
                    let formHTML = '<form action="'+data.url+'" method="POST" style="display: none">'
                    Object.keys(formFields).map((key) => {
                        formHTML += '<input type="hidden" name="'+key+'" value="'+formFields[key]+'">'
                    })
                    formHTML += '</form>';
                    $(formHTML).appendTo('body').submit()
                } else {
                    fbq('track', 'Purchase', {
                        currency: currency,
                        value: (Number(priceWithoutShipping.replace(/[^0-9\.-]+/g,"")) - Number($("input[name=price]").data('shipping'))) * Number(order.quantity)
                    })
                    if (data.redirect === 'external') {
                        window.open(data.url, '_blank');
                    } else {
                        window.location.href = data.url;
                    }
                }
            } else if (data.status === 'promoCodeError') {
                $("#promoCodeError").show();
            } else {
                $("#error").show();
                $("#error").html(data.error);
            }
            toggleSpinner(false);

        }).fail((error) => {
            alert(error.message);
        });
    } else {
        toggleSpinner(false);
    }
});


var paymentNotificationModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    onClose: function () {
        window.location.href = document.querySelector('.returnPage').innerHTML;
    }
});
// set content

var url = window.location.search;
if (url) {
    paymentNotificationModal.setContent(document.querySelector('.paymentMessage').innerHTML);
    if (url.match("canceled").length > 0) {
        paymentNotificationModal.open();
    }
}



