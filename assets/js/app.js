

// import jquery from 'jquery';
//  let jQuery = require('dist/jquery');
// console.log(jQuery);
// window.jQuery = jQuery;
// window.$ = window.jQuery;
import Popper from 'popper.js/dist/umd/popper.js';

import 'bootstrap';


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});



// let miniCart = $(".wrapper-mini-cart").html();
//
// $('.popover-tel').popover({
//     trigger: 'click',
//     html: true,
//     placement: "bottom",
//     title: "",
//     content: miniCart,
//     container: ".tel-wrap"
// });
//
//
// $('.footer-tel').popover({
//     trigger: 'click',
//     html: true,
//     placement: "bottom",
//     title: "",
//     content: miniCart,
//     container: ".position-tel"
// });


$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$('#myTabTwo a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});
