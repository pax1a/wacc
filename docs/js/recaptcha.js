  let recaptcha = ""

  function verified() {
  	document.getElementsByClassName("agree")[0].classList.add("show");
  	recaptcha = grecaptcha.getResponse();
  }

  function agreeTerms() {
  	document.getElementsByClassName("api-button")[0].classList.toggle("show");
  }

  function execute() {
  	document.getElementById("api-form").classList.add("hide")
  	console.log(recaptcha)
  	fetch('{{ API_ENDPOINT }}/get', {
  		method: 'POST',
  		body: JSON.stringify({
  			captcha: recaptcha,
  			email: document.getElementById("email").value
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