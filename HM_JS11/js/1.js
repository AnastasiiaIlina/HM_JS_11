// task 1
function setSettings() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		console.log('Браузер поддерживает Local storage!');
	} else {
		console.log('Данные не сохранятся, ваш браузер не поддерживает Local storage');
	}
}
document.getElementById('storage').onclick = setSettings;


// task 2
if (localStorage.getItem('css')!=null) {
		var link = localStorage.getItem('css');
		document.getElementsByTagName('head')[0].getElementsByTagName('link')[0].href = link;
	}

	document.getElementById('horizontal-nav').onclick = function () {
		document.getElementsByTagName('head')[0].getElementsByTagName('link')[0].href = 'css/nav-style1.css';
		localStorage.setItem('css','css/nav-style1.css');
	}

	document.getElementById('vertical-nav').onclick = function () {

		document.getElementsByTagName('head')[0].getElementsByTagName('link')[0].href = 'css/nav-style2.css';
		localStorage.setItem('css','css/nav-style2.css');
	}


// task 3
var array = ['green', 'blue', 'black', 'white'];
localStorage.setItem('array', JSON.stringify(array));
var storedArray = JSON.parse(localStorage.getItem('array'));

document.getElementById('btn-array').onclick = function(){
	document.getElementById('out').innerHTML=storedArray;
}


// task 4
function testDisplay(){
	if (localStorage.getItem('display')!==null && localStorage.getItem('display')=='none') {
		clearTimeout(setTimeout(popUp,1000));
	}
	else {
		setTimeout(popUp,1000);
	}
}	

testDisplay();

document.getElementById('btn-close').onclick = function() {
	var noPopUp = localStorage.getItem('display');
	document.getElementById('pop-up').style.display = noPopUp;

	if(document.getElementById('inp-check').checked==true) {
		document.getElementById('pop-up').style.display='none';
		localStorage.setItem('display', 'none');
	}
	else if (document.getElementById('inp-check').checked==false) {
		document.getElementById('pop-up').style.display='block';
		localStorage.setItem('display', 'block');
	} 
	
	document.getElementById('pop-up').style.display='none';
}

function popUp() {
		document.getElementById('pop-up').style.display = 'block';
	}


// Task 5
for (var i = 0; i < localStorage.length; i++) { key = localStorage.key(i);
     document.getElementById('contentLS').innerHTML += key + " = " + localStorage.getItem(key) + '<br>';
}





