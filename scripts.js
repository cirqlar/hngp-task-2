(function app() {
	let form = document.querySelector("#form");
	let contact = document.querySelector("#contact");
	
	form.addEventListener('click', function closeform(e) {
		if (e.target == form) {
			form.classList.remove("open");
		}
	});
	
	contact.addEventListener('click', function openform(e) {
		form.classList.add("open");
	});

})();