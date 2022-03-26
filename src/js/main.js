import './lib/lib';

/* $('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
}); */

// console.log($('button').html('hello'));

/* $('button').click(function() {
    // console.log($(this).index());
    $('.some').scaleIn(1500);
}); */
$('#primary').click(function() {
    $('div').eq(1).fadeOut(800);
});
$('[data-count="second"]').click(function() {
    $('div').eq(2).fadeOut(800);
});
$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));
