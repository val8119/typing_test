// selectors
const inputArea = document.querySelector(".input-area");
const wordsCont = document.querySelector(".words");
const mistakesText = document.querySelector(".mistakes");
const wpmText = document.querySelector(".wpm");
var words = ["angle", "ant", "apple", "arch", "arm", "army", "baby", "bag", "ball", "band", "basin", "basket", "bath", "bed", "bee", "bell", "berry", "bird", "blade", "board", "boat", "bone", "book", "boot", "bottle", "box", "boy", "brain", "brake", "branch", "brick", "bridge", "brush", "bucket", "bulb", "button", "cake", "camera", "card", "cart", "carriage", "cat", "chain", "cheese", "chest", "chin", "church", "circle", "clock", "cloud", "coat", "collar", "comb", "cord", "cow", "cup", "curtain", "cushion", "dog", "door", "drain", "drawer", "dress", "drop", "ear", "egg", "engine", "eye", "face", "farm", "feather", "finger", "fish", "flag", "floor", "fly", "foot", "fork", "fowl", "frame", "garden", "girl", "glove", "goat", "gun", "hair", "hammer", "hand", "hat", "head", "heart", "hook", "horn", "horse", "hospital", "house", "island", "jewel", "kettle", "key", "knee",
    "knife", "knot", "leaf", "leg", "library", "line", "lip", "lock", "map", "match", "monkey", "moon", "mouth", "muscle", "nail", "neck", "needle", "nerve", "net", "nose", "nut", "office", "orange", "oven", "parcel", "pen", "pencil", "picture", "pig", "pin", "pipe", "plane", "plate", "plough", "pocket", "pot", "potato", "prison", "pump", "rail", "rat", "receipt", "ring", "rod", "roof", "root", "sail", "school", "scissors", "screw", "seed", "sheep", "shelf", "ship", "shirt", "shoe", "skin", "skirt", "snake", "sock", "spade", "sponge", "spoon", "spring", "square", "stamp", "star", "station", "stem", "stick", "stocking", "stomach", "store", "street", "sun", "table", "tail", "thread", "throat", "thumb", "ticket", "toe", "tongue", "tooth", "town", "train", "tray", "tree", "trousers", "umbrella", "wall", "watch", "wheel", "whip", "whistle", "window", "wing", "wire", "worm"
];
var randomWords = words.sort(() => Math.random() - Math.random()).slice(0, 25);
var userWords = [];
var currentWordIndex = 0;
var correctAmount = 0;
var incorrectAmount = 0;
var firstTime = true;

// listeners
wordsCont.innerText = randomWords.join(" ");

document.onkeypress = function (e) {
    if (currentWordIndex < 25) {
        if (firstTime) {
            console.log("first time");
            firstTime = false;
            startDate = +new Date();
        }
        if (e.keyCode === 32) {
            userWords.push(inputArea.value.replace(/\s/g, '')); // add to userWords array without spaces
            inputArea.value = ""; // clear input area

            if (userWords[currentWordIndex] != randomWords[currentWordIndex]) {
                incorrectAmount++;
                mistakesText.innerHTML = `Mistakes: ${incorrectAmount}`;
            }

            currentWordIndex++; // index + 1

            if (currentWordIndex === 25) {
                endDate = +new Date();

                totalTime = endDate - startDate;

                console.log(totalTime);

                var wpm = 25 * totalTime;

                wpmText.innerText = `Speed: ${wpm} WPM`;
            }
        }
    }
};