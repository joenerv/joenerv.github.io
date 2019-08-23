var words = [
    'арбуз',
    'персик',
    "дыня",
    "хачапур",
    "море",
    "чурчхела"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.").toLowerCase();
    
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Введите только одну букву.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] !== '_') {
                    alert('вы уже угадали эту букву');
                } else {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
                
            }
        }
    }
}

alert(answerArray.join(' '));
alert('Отлично! Было загадано слово ' + word);

/*var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя !+";

var randomString = "";

while (randomString.length < 20) {
    
    var word = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[word];
}

console.log(randomString);*/

/*var input = 'javascript is awesome';
var output = '';

for ( var i = 0; i < input.length; i++) {
    if (input[i] == 'a') {
        output += 4;
    } else if (input[i] == 'e') {
        output += 3;
    } else if (input[i] == 'i') {
        output += 1;
    } else if (input[i] == 'o') {
        output += 0;
    } else {
        output += input[i];
    }
}
console.log(output);*/