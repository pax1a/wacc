<style>
	.success,
	.failure,
	.agree,
	.question,
	.warning,
	.api-button,
	.reset-button,
	.g-recaptcha {
		display: none;
	}

	.claim-divider {
		min-height: 50px;
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

	.loader {
		display: none;
		border: 6px solid #f3f3f3;
		border-radius: 50%;
		border-top: 6px solid #FB4A59;
		width: 50px;
		height: 50px;
		-webkit-animation: spin 2s linear infinite; /* Safari */
		animation: spin 2s linear infinite;
	}

	/* Safari */
	@-webkit-keyframes spin {
		0% { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>


## Claim your API Key



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

<div class="loader" id="loader"></div>

!!! success
	New API Key created and **it will be displayed only now.**

	```
	
	```

	Please store it somewhere safe because as soon as you navigate away from this page, we will not be able to retrieve or 
	restore this generated token.

!!! warning

!!! failure

<div class="reset-button" id="reset-button">
	<a href="/api-access" class="md-button">Reset</a>
</div>

<div class="claim-divider"></div>

## Support

[Support and Q&A goes here]