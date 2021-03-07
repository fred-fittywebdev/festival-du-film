// $(document).ready(function() {
// /* =============== ouverture du menu mobile au click =============== */
//     $('.hamburger-menu').click(function() {
//         $('.navigation').toggleClass('change');
//     });
// /* =============== Animation de la gallerie au scroll =============== */
//     $(window).scroll(function() {
//         let position = $(this).scrollTop();

//         if(position >= 450) {
//             $('.gallery').addClass('change');
//         } else {
//             $('.gallery').removeClass('change');
//         }
//     });

//     $(function () {
//         $('[data-toggle="popover"]').popover()
//       });

//       $(function () {
//         $('[data-toggle="tooltip"]').tooltip()
//       });
// });
// /* =============== fermeture du menu mobile au click =============== */
// $(document).ready(function() {
//     $(document).click(function(event) {
//         let clickover = $(event.target);
//         let _opened = $('.collapse').hasClass('show');
//         if(_opened === true && !clickover.hasClass('navbar-toggler')) {
//             $('.navbar-toggler').click();
//         }
//     });
// });
/* =============== smmoth scrolling vers les liens  =============== */
// $(document).ready(function() {
//     $('a').on('click', function(event) {
//         if(this.hash !== '' ) {
//             event.preventDefault();
//             let hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top}, 1000, function() {
//                     window.location.hash = hash;
//                 });
//         } // fin de la condition
//     });
// });

$(document).ready(function(){
    $('button').click(function(){
        $('.alert').show()
    }) 
});






























