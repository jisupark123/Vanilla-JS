const wiseSayings = [
  {
    korean: "성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다.",
    english:
      "Success is walking from failure to failure with no loss of enthusiasm.",
  },
  {
    korean: "모든 성과는 요령을 피우지 않을 때 생긴다.",
    english: "All progress takes place outside the comfort zone.",
  },
  {
    korean: "성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다.",
    english:
      "Success usually comes to those who are too busy to be looking for it.",
  },
  {
    korean: "성공은 행동과 연결되어 있다. 성공적인 사람들은 계속해서 움직인다.",
    english:
      "Success seems to be connected with action. Successful people keep moving.",
  },
  {
    korean: "노력 전에 성공이 나오는 곳은 사전뿐이다.",
    english:
      "The only place where success comes before work is in the dictionary.",
  },
  {
    korean: "충고는 해 줄 수 있으나, 행동하게 할 수는 없다.",
    english: "We can give advice, but we cannot give conduct.",
  },
  {
    korean: "아예 안하는 것보단 늦게라도 하는 게 낫다.",
    english: "Better late than never.",
  },
  {
    korean: "도전하는 자가 승리한다.",
    english: "Who dares, wins.",
  },
  {
    korean: "천천히 그리고 꾸준히 하면 경주에서 승리한다.",
    english: "Slow and steady win the race.",
  },
  {
    korean: "로마는 하루아침에 만들어지는 것이 아니다.",
    english: "Rome is not built in a day.",
  },
];

const english = document.querySelector("#wise_sayings span:first-child");
const korean = document.querySelector("#wise_sayings span:last-child");

const todaysSaying = wiseSayings[parseInt(Math.random() * wiseSayings.length)];

english.innerText = todaysSaying.english;
korean.innerText = todaysSaying.korean;
