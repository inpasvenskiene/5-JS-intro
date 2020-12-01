/*
duodamas skaiciu masyvas -> rasti didziausia skaiciu
*/

function bigNum(list) {
    const size = value;
    let biggestNumber = -Infinity;
    for (let i = 0; i < size; i++) {
        const num = list[i];
        if (num > biggestNumber) {
            biggestNumber = num;
        }   
    }
    return biggestNumber;
}

const list = [1, 2 , 5 ,100, 500, 9547];
console.log(list);
const value = list.length;
console.log(value);
console.log(bigNum(list));


console.log('------------------');

/*
duodamas skaiciu masyvas -> rasti vidurki
*/

function vid(pazymiai) {
    let suma = 0;
    for (let i = 0; i < kiekis; i++) {
        const pazymys = pazymiai[i];
        suma += pazymys;
    }
    const vidurkis = suma / kiekis;
    return vidurkis
} 

const pazymiai = [8, 9, 7, 6, 10, 8, 10, 9, 10];
console.log(pazymiai);
const kiekis = pazymiai.length;
console.log(kiekis);
console.log(vid(pazymiai));


console.log('----------------');

/*
duodamas skaiciu masyvas -> rasti maziausia skaiciu
*/

function smallNum(numbers) {
    const size = kiekis1;
    let smallNumber = Infinity;
    for (let i = 0; i < size; i++) {
        const snum = numbers[i];
        if (snum < smallNumber) {
            smallNumber = snum;
        } 
    }
    return smallNumber;
}
const numbers = [8, 15, -5, 555, 89521, 475, 99963, 94756];
console.log(numbers);
const kiekis1 = numbers.length;
console.log(kiekis1);
console.log(smallNum(numbers));



console.log('--------------------');

/*
duodamas tekstas -> rasti kiek kartu yra panaudota ieskoma raide
*/

function kiekKartu(text) {
    const size = text.length;

    return rez;
}
const text = 'As vakar suzinojau labai daug naujos informacijos.';
console.log(text);