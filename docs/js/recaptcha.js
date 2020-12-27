let recaptcha = "";

let message = "";

function verified() {
	document.getElementsByClassName("agree")[0].classList.add("show");
	recaptcha = grecaptcha.getResponse();
}

function agreeTerms() {
	document.getElementsByClassName("api-button")[0].classList.toggle("show");
}

function execute() {
	document.getElementById("api-form").classList.add("hide")
	fetch('{{ API_ENDPOINT }}/user/create', {
		method: 'POST',
		body: JSON.stringify({
			captcha: recaptcha,
			email: document.getElementById("email").value,
			agreedTos: document.getElementById("agree").checked,
			agreedNews: document.getElementById("news").checked
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	}).then(function (response) {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(response);
	}).then(function (data) {
		document.getElementsByTagName("code")[0].innerHTML = data.api_key
		document.getElementsByClassName("success")[0].classList.add("show")
	}).catch(function (error) {
		switch (error.status) {
			case 401:
				message = "Captcha expired, please try again.";
				document.getElementsByClassName("failure")[0].innerHTML += "<p>" + message + "</p>";
				document.getElementsByClassName("failure")[0].classList.add("show");
				document.getElementById("reset-button").classList.add("show")
				break;
			case 406:
				message = "Email address not valid, please try again.";
				document.getElementsByClassName("failure")[0].innerHTML += "<p>" + message + "</p>";
				document.getElementsByClassName("failure")[0].classList.add("show");
				document.getElementById("reset-button").classList.add("show")
				break;
			case 409:
				message = "It seems that you are already a registered user. Please contact support@wacc.io to retrieve your API key. Thank you!"
				document.getElementsByClassName("warning")[0].innerHTML += "<p>" + message + "</p>";
				document.getElementsByClassName("warning")[0].classList.add("show");
				break;
			default:
				message = "Somethin went wrong, please try again or contact support@wacc.io. Thank you!"
				document.getElementsByClassName("failure")[0].innerHTML += "<p>" + message + "</p>";
				document.getElementsByClassName("failure")[0].classList.add("show");
				document.getElementById("reset-button").classList.add("show")
		}
		console.warn('Something went wrong.', error);
	});
}


function validate() {
	if (validateEmail(document.getElementById("email").value)) {
		document.getElementById("g-recaptcha").classList.add("show")
	} else {
		document.getElementById("g-recaptcha").classList.remove("show")
	}
}

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}