Sign up here



<form id="demo-form" onsubmit=printSubmit() method="post">
  Name: <input type="text" name="fname">
</form>


<button class="g-recaptcha" data-sitekey="6LcQ_gwaAAAAAPF6WKL0azbGAWyxw69Ue286GM7g" data-callback='onSubmit' data-action='submit'>Submit</button>

<script>
     function printSubmit(token) {
     console.log("submitted");
   }
   function onSubmit(token) {
     console.log("captcha");
     document.getElementById("demo-form").submit();
   }
 </script>
