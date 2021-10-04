const clockTime = document.querySelector("#clock-time");
const clockDate = document.querySelector("#clock-date");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  clockTime.innerText = `${hour}:${minute}`;
  clockDate.innerText = `${year}년 ${month}월 ${day}일`;
}
getClock();
setInterval(getClock, 1000);

// setTimeout(sayHello, 5000);
