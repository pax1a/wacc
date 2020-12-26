<style>
	.success,
	.failure,
	.agree,
	.question,
	.api-button,
	.reset-button,
	.g-recaptcha {
		display: none;
	}

	.show {
		display: block;
	}

	.hide {
		display: none;
	}

	.input-email {
		display: block;
		width: 100%;
		padding: .375rem .75rem;
		margin: 10px 0 20px 0;
		font-weight: 400;
		font-size: 16px;
		line-height: 1.5;
		color: #212529;
		background-color: #fff;
		border: 1px solid #ced4da;
		border-radius: .1rem;
	}
	
	.agree, .api-button {
		margin-top: 20px;
	}
</style>


## Sign up here




<div class="api-form" id="api-form">
	Please provide your email adress:
	<input type="email" class="input-email" id="email" placeholder="name@example.com" oninput=validate()>
	<div class="g-recaptcha" id="g-recaptcha" data-sitekey="6LeTWQ4aAAAAAL-8maK0CD5qlBJdmiO8jWFJPLh1" data-callback="verified"></div>
	<div class="agree">
		<input type="checkbox" id="news" /> Subscribe to our newsletter
		<br/>
		<input type="checkbox" id="agree" onclick=agreeTerms() /> I have read and agree to the <a href="/terms-of-service" target="_blank">Terms of Service</a> and <a href="/data-privacy" target="_blank">Privacy Policy</a> 
	</div>
	<div class="api-button">
		<a href="#" class="md-button md-button--primary" onclick=execute()>Get API key</a>
	</div>
</div>

!!! success
	New API Key created and **it will be displayed only now.**

	```
	
	```

	Please store it somewhere safe because as soon as you navigate away from this page, we will not be able to retrieve or 
	restore this generated token.

!!! question

!!! failure

<div class="reset-button" id="reset-button">
	<a href="/api-access" class="md-button">Reset</a>
</div>