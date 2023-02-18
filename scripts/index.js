var d = new Date();
var month = d.getMonth();
var date = d.getDate();

const span = document.getElementById('date')
span.dataset.content = '/'+ date;
span.setAttribute("data-content", date.dataset.content);
span.innerText = month;