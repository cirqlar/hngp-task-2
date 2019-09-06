(function app() {
	let form = document.querySelector("#form");
	let formtag = document.querySelector("form");
	let contact = document.querySelector("#contact");
	let message = {};
	
	form.addEventListener('click', function closeform(e) {
		if (e.target == form) {
			form.classList.remove("open");
		}
	});
	
	async function sendForm() {
		const rawResponse = await fetch('./submit.php', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(message)
		});
		let content;
		try {
			content = await rawResponse.clone().json();
		} catch (e) {
			content = await rawResponse.text();
		}
		
		console.log(content);
	}
	
	formtag.addEventListener('submit', function validate(e) {
		e.preventDefault();
		
		message.name = formtag.querySelector("input[name='name']").value;
		message.email = formtag.querySelector("input[name='email']").value;
		message.title = formtag.querySelector("input[name='title']").value;
		message.message = formtag.querySelector("textarea").value;
		
		sendForm(message);
		
		
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