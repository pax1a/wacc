  let recaptcha=""
  function test() {
    recaptcha=grecaptcha.getResponse()
document.getElementsByClassName("api-button")[0].classList.add("show")
	document.getElementsByClassName("success")[0].classList.add("show")
  console.log(recaptcha)
  fetch('https://new.pax1a.usw1.kubesail.org/get', {
	method: 'POST',
	body: JSON.stringify({
		captcha: recaptcha
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
		document.getElementsByTagName("code")[0].innerHTML=data.api_key
		console.log(data);
		}).catch(function (error) {
		console.warn('Something went wrong.', error);
	});
  }
