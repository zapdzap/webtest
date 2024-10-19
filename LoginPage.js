// JavaScript Document
const registerBtn = document.getElementById('register');
const container = document.getElementById('container');
const loginBtn = document.getElementById('login');
const Body = document.getElementById('body');
const LOGGINGBTN = document.getElementById("sign1");

const sign_in_email = document.getElementById("sign_in_email");
const sign_in_password = document.getElementById("sign_in_password");

window.onload = load();

Body.addEventListener('click', ()=>{
	
	Body.style.opacity = "1";
});

registerBtn.addEventListener('click', ()=>{
	
	container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
	
	container.classList.remove("active");
});

LOGGINGBTN.addEventListener('click', ()=>{
	
	switchsite()
});




async function sleep(seconds){
	return new Promise(resolve=>setTimeout(resolve,seconds*1000));
}

async function load(){
	await sleep(0.1);
	Body.style.opacity = "1";
}

