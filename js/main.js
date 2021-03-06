
var index = 1;
var nextButton = document.querySelector('.next-button');
var prevButton = document.querySelector('.prev-button')
var lessons = document.querySelectorAll('.lesson');

var mainIndex = 1;
var mainSections = document.querySelectorAll('.main-section')

var lessonTab = document.querySelector('.lesson-tab')
var readTab = document.querySelector('.read-tab')
var writeTab = document.querySelector('.write-tab')
var listenTab = document.querySelector('.listen-tab')

//This can be used for slideshows for other sites
// setInitialMain();
setInitialLesson();
showSection(1);
function setInitialLesson() {

    if (index > lessons.length) {
        index = 1
    }
    if (index < 1) {
        index = lessons.length
    }
    lessons[index - 1].style.display = 'block';
}
function hideLessons() {
    lessons.forEach((lesson) => {
        lesson.style.display = 'none'
    })
}
function nextLesson() {
    hideLessons()
    index++;
    setInitialLesson()
}
function prevLesson() {
    hideLessons()
    index--;
    setInitialLesson()
}
function lessonRefresh() {
    index = 1
    hideLessons()
    lessons[index - 1].style.display = 'block';
}

function showSection(n) {
    // showInitialSection()
    if (n > mainSections.length) {
        mainIndex = 1
    }
    if (n < 1) {
        mainIndex = mainSections.length
    }
    mainSections.forEach((section) => {
        section.style.display = 'none'
    })
    mainSections[n - mainIndex].style.display = 'block'

}

prevButton.addEventListener('click', prevLesson)
nextButton.addEventListener('click', nextLesson)

lessonTab.addEventListener('click', () => {
    showSection(1)
    lessonRefresh();
})
readTab.addEventListener('click', () => {
    // refresh();
    showSection(2)
})
writeTab.addEventListener('click', () => {
    showSection(3)
})
listenTab.addEventListener('click', () => {
    showSection(4)
})


//GAME PLAY CODES
var vowelIndex = 1;

// var nextVowelButton = document.querySelector('#next-vowel-button');
// var prevVowelButton = document.querySelector('#prev-vowel-button');


showVowels(vowelIndex);

function nextVowels(n) {
    showVowels(vowelIndex += n)
}

function currentVowel(n) {
    showVowels(vowelIndex = n)
};

function showVowels(n) {

    var i;
    var vowelList = document.querySelectorAll('.vowel');
    var thumbnails = document.querySelectorAll('.vowel-thumbnail');

    if (n > vowelList.length) {
        vowelIndex = 1
    }
    if (n < 1) {
        vowelIndex = vowelList.length
    }
    vowelList.forEach(vowel => {
        vowel.style.display = 'none'
    })
    thumbnails.forEach(thumbnail => {
        thumbnail.className = thumbnail.className.replace(' active', ' ')
    })
    thumbnails[vowelIndex - 1].className += " active";
    vowelList[vowelIndex - 1].style.display = 'block';
}
