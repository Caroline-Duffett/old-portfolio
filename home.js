console.log('hi!');


let date = new Date()
console.log(date); //works

let mm = date.getMonth() + 1
console.log(mm); //works

let dd = date.getDate()
console.log(dd); //works

let yyyy = date.getFullYear()
console.log(yyyy); //works

let dateText = `${mm} / ${dd} / ${yyyy}`
console.log(dateText); //works



$(() => {
  document.getElementById('date').innerHTML=dateText;
})


//This video helped me learn how to make date: https://www.youtube.com/watch?v=yDnyIPSsGbk

//This link helped me figure out how to put the date in the html: https://www.howtocodeschool.com/2020/05/display-current-date-and-time-using-html-javascript.html#:~:text=Date%20object%20is%20created%20with,the%20current%20date%20and%20time.
