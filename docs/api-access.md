Sign up here


<div class="g-recaptcha" data-sitekey="6LeTWQ4aAAAAAL-8maK0CD5qlBJdmiO8jWFJPLh1" data-callback="test"></div>

<button class="md-button md-button--primary">Get API key</button>


!!! check
    Have in mind that we cares about the part:

    ```
    123123123
    ```

    Text goes here



<script>
  let recaptcha=""
  function test() {
    recaptcha=grecaptcha.getResponse()
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
		console.log(data);
		}).catch(function (error) {
		console.warn('Something went wrong.', error);
	});
  }
</script>
