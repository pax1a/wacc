<style>
	.success,
	.failure,
	.api-button {
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
	.api-button {
		margin-top: 20px;
	}
</style>


## Sign up here




<div id="api-form">
	Please provide your email adress:
	<input type="email" class="input-email" id="email" placeholder="name@example.com">
	<div class="g-recaptcha" data-sitekey="6LeTWQ4aAAAAAL-8maK0CD5qlBJdmiO8jWFJPLh1" data-callback="test"></div>
	<div class="api-button">
		<a href="#" class="md-button md-button--primary" onclick=execute()>Get API key</a>
	</div>
</div>

!!! success
	Have in mind that we cares about the part:

	```
	
	```

	Text goes here

!!! failure
	It seems that you are already a registered user. Please contact support@wacc.io to retrieve your API key. Thank you!
