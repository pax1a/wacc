Sign up here


<div class="g-recaptcha" data-sitekey="6LeTWQ4aAAAAAL-8maK0CD5qlBJdmiO8jWFJPLh1" data-callback="test"></div>

<button class="md-button md-button--primary">Get API key</button>

<script>
  let recaptcha=""
  function test() {
    recaptcha=grecaptcha.getResponse()
  
  fetch('https://new.pax1a.usw1.kubesail.org/get', {
	method: 'POST',
	body: JSON.stringify({
		captcha: rerecaptcha
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
	console.log(data);
}).catch(function (error) {
	console.warn('Something went wrong.', error);
});
  

  }
</script>
