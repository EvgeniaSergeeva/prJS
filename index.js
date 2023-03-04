const elementaryBtn = document.getElementById("elementary");
const middleBtn = document.getElementById("middle");
const advancedBtn = document.getElementById("advanced");
const levelWrapper = document.querySelector(".wrapper");
const questionsWrap = document.querySelector('.questions')
const _endpoint = " http://localhost:3000";

const URLS = {
  elementary: "/elementary",
  middle: "/middle",
  advanced: "/advanced",
};

const elementaryLevel = (e) => {
  levelWrapper.style.display = "none";
  findElementary();
};

elementaryBtn.addEventListener("click", elementaryLevel);

const findElementary = async() => {
  const modifiedUrl = _endpoint + URLS.elementary;
  fetch(modifiedUrl)
  .then((response) => {
    const res =response.json()
    return res})
  .then((result) => {
    console.log(result);
    showRes(result);
  }
  
)};

showRes = (item) => {
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
    let questionWrapper = document.createElement("div");
    let question = document.createElement("p");
    question.innerHTML = item[i].question;
    questionWrapper.append(question);
    let answers = document.createElement("div");
    for (let j = 0; j < item[i].answers.length; i++) {
      console.log(item[i].answers.length);
      let answerItem = document.createElement("button");
      answerItem.innerHTML = item[i].answers[j];
      answerItem.classList.add = "answer";
      answers.append(answerItem);
      // document.addEventListener("click", function (e) {
      //   if (e.target.classList.contains("answer")) {
      //     if ((e.target.innerHTML = item[i].answer)) {
      //       alert("You are right!");
      //     } else {
      //       alert(`Wrong answer!`);
      //     }
        };
        questionWrapper.append(answers);
        questionsWrap.append(questionWrapper);
      }
      
    }
    
  


const middleLevel = (e) => {
  levelWrapper.style.display = "none";
  findAdvanced(el);
};
middleBtn.addEventListener("click", middleLevel);
const findMiddle = async() => {
  fetch(modifiedUrl)
  .then((response) => {
    const res =response.json()
    return res})
  .then((result) => {
    showRes(result);
  }
  
)};

const advancedLevel = (e) => {
  levelWrapper.style.display = "none";
  findMiddle(el);
};
middleBtn.addEventListener("click", advancedLevel);
const findAdvanced = async() => {
  fetch(modifiedUrl)
  .then((response) => {
    const res =response.json()
    return res})
  .then((result) => {
    showRes(result);
  }
  
)};