console.log('[The site will reload itself, if you click on it]');
const img = document.querySelector('img');

createAndCheckRandomNum(1, 23);

function createAndCheckRandomNum(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    console.log('Random Number', random);
    
    if (random % 3 == 0 && random % 5 == 0) {
        console.log('Kirill demiGod');
    } else if (random % 3 == 0) {
        console.log('Kirill');
    } else if (random % 5 == 0) {
        console.log('demiGod');
    } else {
        console.log('Feck off');
    }
}

img.addEventListener('click', function () {
    document.location.reload();
});