(function app() {
	let form = document.querySelector("#form");
	let formtag = document.querySelector("form");
	let contact = document.querySelector("#contact");
	
	form.addEventListener('click', function closeform(e) {
		if (e.target == form) {
			form.classList.remove("open");
		}
	});
	
	form.addEventListener('submit', function validate(e) {
		e.preventDefault();
		formtag.classList.add("filled");
		setTimeout(function closeform() {
			form.classList.remove("open");
			formtag.reset();
		}, 500);
	});
	
	contact.addEventListener('click', function openform(e) {
		formtag.classList.remove("filled");
		form.classList.add("open");
	});

})();