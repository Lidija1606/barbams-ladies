var c=0,productImg=document.getElementById("product-img"),resultImg=document.getElementById("result-img");if(resultImg)var language="ar"===resultImg.getAttribute("data-language")?"en":resultImg.getAttribute("data-language");var i=0;function navigationControl(){if(0==c){var e=document.getElementById("nav"),t=document.getElementById("logo"),o=document.getElementById("menu-icon"),n=document.getElementsByClassName("first")[0];if(e.classList.contains("showNav")){for(var l=e.offsetHeight,i=1;i<=Math.floor(l/2);i++)!function(t){setTimeout(function(){e.style.height=l-3*t+"px",t==Math.floor(l/2)&&e.removeAttribute("style")},5*t)}(i);o.src="../../img/menu.png",c=1,n.removeAttribute("style"),setTimeout(function(){e.className="",c=0},1100)}else e.className="showNav",n.className+=" transitionNav",o.src="../../img/logo.png";t.classList.contains("hidden")?t.classList.remove("hidden"):t.classList.add("hidden")}}function absolutePositionElement(e){e.classList.add("absolutePosition"),c=0}function productShowMore(){var e=document.getElementsByClassName("product-info-more")[0];document.getElementsByClassName("product-info")[0].style.display="none",e.style.height="unset",e.style.opacity=1}function productHideMore(){var e=document.getElementsByClassName("product-info-more")[0];e.style.display="none",e.style.height="0px",document.getElementsByClassName("product-info")[0].style.display="block",setTimeout(function(){e.style.opacity=0,e.style.display="block"},700)}function showFaq(e){var t=document.getElementsByClassName("faq-img-cont")[e],o=document.getElementById("faq-"+e);if(t.classList.contains("faq-img-hide"))return o.style.opacity="0",t.classList.remove("faq-img-hide"),t.style.border="0",t.style.zIndex="unset",void(t.style.minHeight="unset");o.style.opacity="1",t.classList.add("faq-img-hide"),t.style.border="1px solid #2f2f2f",t.style.borderRadius="15px",t.style.minHeight=o.offsetHeight+"px",t.style.zIndex="1"}function imgN(){productImg.style.opacity="0",setTimeout(function(){productImg.src="../../img/black.png"},300),i<productLen-1?i++:i=0,setTimeout(function(){productImg.src="../../img/"+productName+"/"+productImgs[i],productImg.style.opacity="1"},500)}function imgP(){productImg.style.opacity="0",setTimeout(function(){productImg.src="../../img/black.png"},300),i>0?i--:i=productLen-1,setTimeout(function(){productImg.src="../../img/"+productName+"/"+productImgs[i],productImg.style.opacity="1"},500)}function resN(){console.log(productName),resultImg.style.opacity="0",setTimeout(function(){resultImg.src="../../img/black.png"},300),i<resultLen-1?i++:i=0,setTimeout(function(){resultImg.src="../../img/"+productName+"/results/"+language+"/"+resultImgs[i],resultImg.style.opacity="1"},500)}function resP(){console.log(productName),resultImg.style.opacity="0",setTimeout(function(){resultImg.src="../../img/black.png"},300),i>0?i--:i=resultLen-1,setTimeout(function(){resultImg.src="../../img/"+productName+"/results/"+language+"/"+resultImgs[i],resultImg.style.opacity="1"},500)}$(".lang-switcher").click(function(){console.log("test");let e=$(this).data("lang");null!=e&&$.ajax({type:"post",url:"/lang",data:{locale:e}}).done(e=>{console.log("done")})}),window.innerWidth,$("#arrow-payment-right").bind("click",function(){const e=$("#payment-options"),t=$("[name=paymentType]").val(),o=$("#payment-options li").toArray().map(e=>e.getAttribute("data-paymentid")),n=(o.indexOf(t)+1)%o.length;$("[name=paymentType]").val(o[n]);let l=e.width();e.scrollLeft(n*l)}),$("#arrow-payment-left").bind("click",function(){const e=$("#payment-options"),t=$("[name=paymentType]").val(),o=$("#payment-options li").toArray().map(e=>e.getAttribute("data-paymentid")),n=(o.length+(o.indexOf(t)-1))%o.length;$("[name=paymentType]").val(o[n]);let l=e.width();e.scrollLeft(n*l)}),$("#results-gallery-desktop").bxSlider({minSlides:3,maxSlides:3,slideWidth:400,slideMargin:0,auto:!1,pager:!1,touchEnabled:!1}),$("#slider-button-left").bind("click",function(){const e=$("#slider-gallery"),t=e.width(),o=e.scrollLeft();0===o?e.scrollLeft(2e4):e.scrollLeft(o-t)}),$("#slider-button-right").bind("click",function(){const e=$("#slider-gallery"),t=e.width(),o=e.scrollLeft();e.scrollLeft(o+t),o>=e.scrollLeft()&&e.scrollLeft(0)});const partBoldText=document.querySelector("#part-bold-text");if(partBoldText){const e=partBoldText.innerHTML.split(" "),t=document.createElement("span");t.innerHTML=e.slice(0,2).join(" "),t.innerHTML+=" ";const o=document.createElement("span");o.innerHTML=e.slice(2).join(" "),o.setAttribute("style","font-family:'Gotham Bold'; color: black"),partBoldText.innerHTML="",partBoldText.appendChild(t),partBoldText.appendChild(o)}const partBoldTextTop=document.querySelector("#part-bold-text-top");if(partBoldTextTop){const e=partBoldTextTop.innerHTML.split(" "),t=document.createElement("span");t.innerHTML=e.slice(0,2).join(" "),t.innerHTML+=" ";const o=document.createElement("span");o.innerHTML=e.slice(2).join(" "),o.setAttribute("style","font-family:'Gotham Bold'"),partBoldTextTop.innerHTML="",partBoldTextTop.appendChild(t),partBoldTextTop.appendChild(o)}$(this).trigger("load"),$(function(){let e="";const t={pager:!1,controls:!1,touchEnabled:!1,oneToOneTouch:!1,auto:!0,speed:2e3,stopAutoOnClick:!0,pause:5e3};$(window).width()<=1023?(e=".bxslider-mobile",t.touchEnabled=!1,t.oneToOneTouch=!0,t.responsive=!0,t.swipeThreshold=1,t.autoHover=!0,t.auto=!0):(e=".bxslider-desktop",t.pager=!0),$(e).bxSlider(t)}),$("#results-gallery-mobile").bxSlider({minSlides:1,maxSlides:1,slideWidth:400,slideMargin:0,auto:!1,pager:!1,touchEnabled:!1,onSliderLoad:function(){$(".elixir-page-results .bx-wrapper:nth-child(3) .bx-prev").on("click",function(e){document.getElementById("results-gallery-mobile").scrollIntoView({block:"start",behavior:"smooth"}),e.preventDefault()}),$(".elixir-page-results .bx-wrapper:nth-child(3) .bx-next").on("click",function(e){document.getElementById("results-gallery-mobile").scrollIntoView({block:"start",behavior:"smooth"}),e.preventDefault()})}}),$("#read-more-btn").click(function(){console.log("click on read more"),$(".tingle-modal").toggleClass("open"),"Read More"==$("#read-more-btn").text()?($("#read-more-btn").text("Read Less"),$("#more-text").slideDown()):($("#read-more-btn").text("Read More"),$("#more-text").slideUp())}),$(".marquee").marquee({duration:8e3,gap:10,delayBeforeStart:0,direction:"left",duplicated:!0});
