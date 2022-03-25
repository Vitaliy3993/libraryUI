import './lib/lib';

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

// console.log($('button').html('hello'));

$('div').click(function() {
    console.log($(this).index());
});

console.log($('div').eq(2).find('.some'));
