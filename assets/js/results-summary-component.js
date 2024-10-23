const summaryData = [
  {
    name: 'reactionScore',
    label: 'Reaction',
    icon: 'reaction-icon.svg',
    score: 80,
  },
  {
    name: 'memoryScore',
    label: 'Memory',
    icon: 'memory-icon.svg',
    score: 92,
  },
  {
    name: 'verbalScore',
    label: 'Verbal',
    icon: 'verbal-icon.svg',
    score: 61,
  },
  {
    name: 'visualScore',
    label: 'Visual',
    icon: 'visual-icon.svg',
    score: 73,
  },
];


const images = document.querySelectorAll('.icon');
const labels = document.querySelectorAll('.label');
const scores = document.querySelectorAll('.score');


function addData(){
  for(let i = 0; i < summaryData.length; i++){
    images[i].src += summaryData[i].icon;
    labels[i].innerText += summaryData[i].label;
    scores[i].innerText += summaryData[i].score;
  }
}

addData();

