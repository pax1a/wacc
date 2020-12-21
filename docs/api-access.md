<style>
.success, .failure, .api-button {
	display: none;
}
.show {
	display: block;
}

</style>


Sign up here


<div class="g-recaptcha" data-sitekey="6LeTWQ4aAAAAAL-8maK0CD5qlBJdmiO8jWFJPLh1" data-callback="test"></div>

<div class="api-button">
	<a href="#" class="md-button md-button--primary">Get API key</a>
</div>

!!! success
    Have in mind that we cares about the part:

    ```
    123123123
    ```

    Text goes here
    
!!! failure
    It seems that you are already a registered user. Please contact support@wacc.io to retrieve your API key. Thank you!



<script>
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
</script>
