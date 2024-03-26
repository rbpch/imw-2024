console.log('hello world')
// check if it's connected

$('body').css('background-color', 'white')


// let text = 'dummy text';
// $('.background').hide();


for (let i = 0; i < 500; i++) {
    let block = `<div style="width:${i}px; height: 100vw; background-color: hsl(${i}, 100%, 50%)"></div>`;
    $('.foreground').append(block);
}
// the block style is copied from inline css
// select foreground instead of body to move the bars 
// `: special symbol in js which allows to put in variable in a string

$('div').each(function () {
    $(this).on('mouseenter', function () {
        $(this).addClass('no-width');
    })
})

$('body').on('keypress', function () {
    // console.log('key')
    $('div').removeClass('no-width');
}) //press random keys and restore to 100%

