Sign up here


<div class="g-recaptcha" data-sitekey="6LeTWQ4aAAAAAL-8maK0CD5qlBJdmiO8jWFJPLh1" data-callback="test"></div>

<button class="md-button md-button--primary">Get API key</button>

<script>
  let recaptcha=""
  function test() {
    recaptcha=grecaptcha.getResponse()
    console.log(recaptcha)
  }
</script>
