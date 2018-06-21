var studentContainer = document.getElementById("studentInfo");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'student.json');
ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
};
ourRequest.send();

function renderHTML(data){
	studentContainer.insertAdjacentHTML('beforeend', 'testing123');
}