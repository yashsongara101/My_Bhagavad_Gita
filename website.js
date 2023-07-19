console.log(BHAGAVAD_GITA[1][13][0]) // sanity check

function showRandomVerse() {
  let randomChapter = Math.floor(Math.random() * 18) + 1;
  let chapter = BHAGAVAD_GITA[randomChapter];
  let chapterLength = Object.keys(chapter).length;
  
  // Get random verse from that chapter
  let randomVerse = Math.floor(Math.random() * chapterLength) + 1;

  let audioURL = constructAudioURL(randomChapter, randomVerse);
  let audio = document.getElementById('audioPlayer');
  let audioSource = document.getElementById('audiosrc');
  audioSource.src = audioURL;
  audio.load()

  document.getElementById('m').innerText = 
    "Chapter " + randomChapter + ", verse " + randomVerse + ":\n" +
    BHAGAVAD_GITA[randomChapter][randomVerse][0] +
    "\n\n" + BHAGAVAD_GITA[randomChapter][randomVerse][1]
}

function constructAudioURL(chapter, verse) {
  // Prefix the chapter and verse with '0' if needed
  if (chapter < 10) {
    chapter = '0' + chapter;
  }

  if (verse < 10) {
    verse = '0' + verse;
  }

  // Build the path
  // For example,
  // 01/01_01_m_mpeg.mp3
  let path = `verses_audio/${chapter}/With_meaning/mpeg/${chapter}_${verse}_m_mpeg.mp3`;
  // let path = '10/With_meaning/mpeg/10_09_m_mpeg.mp3';

  console.log(path)

  // Return the full URL
  return path;
  // return 'chapter is ' + chapter + ' verse is ' + verse;
}

document.getElementById('button').addEventListener('click', showRandomVerse);
// document.getElementById('button').addEventListener('click', () => {
//   setInterval(printRandomVerse, 50)
// });

let verseRange = document.getElementById('verseRange');
let inputChapter = document.getElementById('input_chapter');
let inputVerse = document.getElementById('input_verse');
let selectedVerse = document.getElementById('selectedVerse');
let searchValue = document.getElementById('inputSearch');
let searchResults = document.getElementById('searchResults');

inputChapter.addEventListener('change', () => {
  let chapterValue = inputChapter.value;
  let chapter = BHAGAVAD_GITA[chapterValue];
  let numberOfVerses = Object.keys(chapter).length;

  verseRange.innerText = `Verse (1 - ${numberOfVerses})`;

  inputVerse.innerHTML = '';
  
  for (let i = 1; i <= numberOfVerses; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    inputVerse.appendChild(option);
  }

  selectedVerse.innerText = 
  "Chapter " + chapterValue + ", Verse " + 1 + ":\n" +
    BHAGAVAD_GITA[chapterValue][1][0] +
    "\n\n" + BHAGAVAD_GITA[chapterValue][1][1]
})

inputVerse.addEventListener('change', () => {
  let chapterValue = inputChapter.value;
  let verseValue = inputVerse.value;

  let displayText = 
  "Chapter " + chapterValue + ", Verse " + verseValue + ":<br>" +
    BHAGAVAD_GITA[chapterValue][verseValue][0] +
    "<br><br>" + BHAGAVAD_GITA[chapterValue][verseValue][1];

  selectedVerse.innerHTML = '<em>' + displayText + '</em>'

  let audioURL = constructAudioURL(chapterValue, verseValue);
  let audio = document.getElementById('browse_audioPlayer');
  let audioSource = document.getElementById('browse_audiosrc');
  audioSource.src = audioURL;
  audio.load()
});

searchValue.addEventListener('keyup', () => {
  console.log(searchValue.value)

  if (searchValue.value.trim().length < 1) { return; }
  let verses = '';

  for (let i = 1; i <= 18; i++) {
    for (let j = 1; j <= Object.keys(BHAGAVAD_GITA[i]).length; j++) {
      let sanskritVerse = BHAGAVAD_GITA[i][j][0];
      let englishVerse = BHAGAVAD_GITA[i][j][1];

      if (englishVerse.includes(searchValue.value)) {
        verses += 
          "Chapter " + i + ", Verse " + j + "\n" +
          sanskritVerse + "\n" + englishVerse + "\n\n"
      }
    }
  }

  searchResults.innerText = verses;
})

// Preload chapter one on initial page load
window.onload = () => {
  let chapterValue = inputChapter.value;
  let chapter = BHAGAVAD_GITA[chapterValue];
  let numberOfVerses = Object.keys(chapter).length;

  for (let i = 1; i <= numberOfVerses; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    inputVerse.appendChild(option);
  }
}