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

console.log('============================================================');

let num = '';
const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// console.log('  X  X  X  X  X  X  X  X');
// console.log('X  X  X  X  X  X  X  X');
// console.log('  X  X  X  X  X  X  X  X');
// console.log('X  X  X  X  X  X  X  X');
// console.log('  X  X  X  X  X  X  X  X');
// console.log('X  X  X  X  X  X  X  X');
// console.log('  X  X  X  X  X  X  X  X');
// console.log('X  X  X  X  X  X  X  X');


let lineVar1 = '', lineVar2 = '';

for (let i = 0; i<4; i++) {
    // lineVar1 += '⬛  ⬜ ';
    // lineVar2 += '⬜  ⬛ '; - чтоб цифры попадали под ячейки(и в стороке 54 добавить пробел в строчку)

    lineVar1 += '⬛ ⬜ ';
    lineVar2 += '⬜ ⬛ ';
};

// ⬜
//⬛

for (let i = 0; i<8; i++) {
    num += `${i+1}  `;
    
    if (i % 2 == 0) {
        console.log(`${letter[i]}  ${lineVar1}`);
    } else {
        console.log(`${letter[i]}  ${lineVar2}`);
    }
};
console.log('    ' + num);










// H/W

// 1) Написать программу , которая выводит через клг числа от 1 до 23 . 
// * Числа , что нацело делятся на 3 => Кирилл
// * Числа , что нацело делятся на 5 => demiGod
// * Числа , что нацело делятся на 3 и на 5 => Кирилл demiGod

// 2) При помощи консоли вывести шахматную доску 8х8 
// Пример : 
// 				#  #  #  # 
// 			#  #  #  # 
// 				#  #  #  # 
// 			#  #  #  # 

// (Cycles : for , while )
// (Cond : if / else ; switch ; ternary)