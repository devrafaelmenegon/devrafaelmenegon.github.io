let burger = document.getElementById('burger'),
	nav    = document.getElementById('main-nav'),
	body = document.body;

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});