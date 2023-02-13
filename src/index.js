import { loadPage } from './initial-page-load.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
	loadPage();
});

// Menu Event Listener
const menu = document.querySelector('#menu')
menu.addEventListener('click', () => {
	menuPage()
});

// Home nav Event Listener
const home = document.querySelector('#home')
home.addEventListener('click', () => {
	loadPage()
});

// Home nav Event Listener
const contact = document.querySelector('#contact')
contact.addEventListener('click', () => {
	contactPage()
});