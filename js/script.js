/*home-burger begin*/
$( ".toggle-navigation" ).click(function() {
    $( ".toggle-navigation" ).toggleClass("open-navigation");
    $(".home__menu--list ").toggleClass("open-navigation");
    $("body").toggleClass("fixed-page");
});

$(document).click(function (e) {
    const closeToggleNav = $('.toggle-navigation');
    const navList = $('.home__menu--item');
    if(!closeToggleNav.is(e.target)&&!navList.is(e.target)){
        $( ".toggle-navigation" ).removeClass("open-navigation");
        $(".home__menu--list ").removeClass("open-navigation");
        $("body").removeClass("fixed-page");
    };
});

/*home-burger end*/

/*design slick-slider begin*/
$('.design__image--section').slick({
    arrows:true,
    adaptiveHeight:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
});

/*design slick-slider end*/

/*subscription popap begin*/
const subscriptionJs = document.querySelector('.subscription');
const submitBtnS = document.querySelector('.subscription__form--submit');

const submitAnswerS = document.createElement('div');
submitAnswerS.className = 'message-answer';

const crossBtn = document.createElement('button');
crossBtn.className = 'cross-closeBtnJs';
submitAnswerS.appendChild(crossBtn);

const titleSubmitAnswerS = document.createElement('h3');
titleSubmitAnswerS.className = 'title-subscriptionJs';
const textTitleAnswerS = document.createTextNode('Unfortunately the service does not work');
titleSubmitAnswerS.appendChild(textTitleAnswerS);
submitAnswerS.appendChild(titleSubmitAnswerS);

const buttonAnswerS = document.createElement('button');
buttonAnswerS.className = 'message-answer--btn';
buttonAnswerS.textContent = "CLOSE";
submitAnswerS.appendChild(buttonAnswerS);

subscriptionJs.appendChild(submitAnswerS);

$('#form-subscription').on('submit', function(e) {
    e.preventDefault();
    $('.message-answer').fadeIn("slow");
    $("body").addClass("fixed-page");
    return false;
});	

$('.message-answer--btn').click(function() {
    $('.message-answer').fadeOut("slow", function() {
        $("body").removeClass("fixed-page"); 
    });
    return false;
});

$('.cross-closeBtnJs').click(function() {
    $('.message-answer').fadeOut("slow", function() {
        $("body").removeClass("fixed-page");
    });
    return false;
});

/*subscription popap end*/

/*community slider-API begin */

function createImage (link, id) {
    const linkImg = document.createElement('img');
    linkImg.className = '.com-image';
    linkImg.src = link;
    linkImg.alt = id;
    return linkImg;
}

fetch(`https://pixabay.com/api/?key=20076700-7c45ada5dc69c5a61091930f4&width=200&previewHeight=150&category=travel&orientation=horizontal&per_page&pretty=true`)
.then((response) => response.json())
.then((data) => {
    data.hits.forEach((photo) => {
        const photoLayout = createImage(photo.previewURL, photo.id);
        $('.community__images').append(photoLayout);
    }); 
    $('.community__images').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
        adaptiveHeight:true,
        speed: 800,
        autoplay: true,
        autoplaySpeed:1000,
    });
});

/*community slider-API end */