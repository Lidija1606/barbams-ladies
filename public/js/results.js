var galleryContainer=$(".galeries-container"),progressBar=$("#progress"),startImageIndex=0,numberOfImages=12;function debounce(e,t,n){var s;return function(){var l=this,a=arguments,r=n&&!s;clearTimeout(s),s=setTimeout(function(){s=null,n||e.apply(l,a)},t),r&&e.apply(l,a)}}function shuffle(e){for(var t,n,s=e.length;0!==s;)n=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[n],e[n]=t;return e}const loadImages=()=>{if(-1===startImageIndex)return;const e=window.innerWidth;let t=document.createElement("div");t.setAttribute("class","grid-gallery"),t=$(t);const n=document.querySelectorAll(".featureImage");$.ajax({type:"get",url:`/images/results/${startImageIndex}/${numberOfImages}`,beforeSend:()=>{progressBar.show()}}).done(s=>{progressBar.hide();const l=shuffle([...document.querySelector(".invisible").querySelectorAll(".not-result")]),a=[...document.querySelector(".invisible").querySelectorAll(".text")],r=document.querySelector(".results-order-button");s.images.length>1&&galleryContainer.append(t);const i=l.filter(e=>![...e.classList].includes("empty"));s.images.forEach((s,o)=>{if(e>1100)if([1,2,5].some(e=>e===(o+1)%6)){if(4===o){const e=n[0].cloneNode(!0);e.setAttribute("style","grid-area: f"),t.append(e)}if(10===o){const e=n[1].cloneNode(!0);e.setAttribute("style","grid-area: fe"),t.append(e)}t.append(`\n                <div class="result">\n                    <a href="/img/results/${s.path}" class="col-sm-4">\n                    <img src="/img/results/${s.thumbnailPath}" class="img-fluid">\n                    </a>\n                    <p>${s.title}</p>\n                </div>\n            `);const e=l[o].cloneNode(!0);e&&e.setAttribute("style","display: flex"),t.append(e)}else{const e=l[o].cloneNode(!0);e&&e.setAttribute("style","display: flex"),t.append(e),t.append(`\n                <div class="result">\n                    <a href="/img/results/${s.path}" class="col-sm-4">\n                    <img src="/img/results/${s.thumbnailPath}" class="img-fluid">\n                    </a>\n                    <p>${s.title}</p>\n                </div>\n            `)}else if(e>500){if(t.append('\n                <div style={display: none}">\n                   \n                </div>\n            '),4===o){const e=n[0].cloneNode(!0);e.setAttribute("style","grid-area: f"),t.append(e)}if(10===o){const e=n[1].cloneNode(!0);e.setAttribute("style","grid-area: fe"),t.append(e)}t.append(`\n                <div class="result">\n                    <a href="/img/results/${s.path}" class="col-sm-4">\n                    <img src="/img/results/${s.thumbnailPath}" class="img-fluid">\n                    </a>\n                    <p>${s.title}</p>\n                </div>\n            `);const e=i[o].cloneNode(!0);e&&e.setAttribute("style","display: flex"),t.append(e)}else{const e=r.cloneNode(!0);[...e.classList].includes("results-order-button-invisible")&&e.classList.toggle("results-order-button-invisible"),t.append(`\n                <div class="result">\n                    <a href="/img/results/${s.path}" class="col-sm-4">\n                    <img src="/img/results/${s.thumbnailPath}" class="img-fluid">\n                    </a>\n                    <p>${s.title}</p>\n                    <hr />\n                    <div>${a[o].innerHTML}</div>\n                </div>\n            `),(o+startImageIndex+1)%5==0&&t.append(e)}}),startImageIndex=0===s.images.length?-1:startImageIndex+numberOfImages+1})};$(document).ready(()=>{loadImages();const e=document.querySelector("body");e.addEventListener("scroll",debounce(function(){const t=document.querySelector(".galeries-container").clientHeight;e.scrollTop+e.clientHeight>=t&&loadImages()},250))}),$(document).ready(function(){galleryContainer.magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")}}})});
