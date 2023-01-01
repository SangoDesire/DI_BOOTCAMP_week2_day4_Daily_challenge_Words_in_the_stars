//Daily Challenge: Words In The Stars======================
//====== === === === === === === === === === === === === === === === === =

//Prompt the use for several words(separated by commas).
let word = prompt("Please, Enter words separated by commas :");

//Put the words into an array.
let wordTab = word.split(",");
let space = ' ';
let maxLenght = -1;
let stars = '';

for (let j of wordTab) {
    if (j.length > maxLenght) {
        maxLenght = j.length;
    }
}

maxLenght += 4;

for (let j = 1; j <= maxLenght; j++) {
    stars += '*';
}
console.log(stars);
for (let j of wordTab) {
    if (j.length < (maxLenght - 4)) {

        for (let k = 0; k < (maxLenght - 4 - Number(j.length)); k++) {
            space += ' ';
        }
        console.log(`* ${j}${space}*`);
        space = ' ';
    } else {
        console.log(`* ${j} *`);
    }

}
//Console.log the words one per line, in a rectangular frame as seen below
console.log(stars);