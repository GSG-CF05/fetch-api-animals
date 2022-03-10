const catBtn = document.getElementById("cat-btn");
const dogBtn = document.getElementById("dog-btn");
const catBox = document.getElementById("cat-box");
const dogBox = document.getElementById("dog-box");

catBtn.addEventListener("click", getRandomCat);
dogBtn.addEventListener("click", getRandomDog);

function getRandomCat() {
    fetch("https://aws.random.cat/meow")
        .then((res) => res.json())
        .then((data) => {
            catBox.innerHTML = `<img src=${data.file} alt="cat" />`;
        });
}

function getRandomDog() {
    fetch("https://random.dog/woof.json")
        .then((res) => res.json())
        .then((data) => {
            if (data.url.includes(".mp4")) {
                getRandomDog();
            } else {
                dogBox.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}
