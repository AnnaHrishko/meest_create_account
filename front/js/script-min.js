function ValidatePassword(){var e=[{Pattern:"[A-Z]",Target:"UpperCase"},{Pattern:"[a-z]",Target:"LowerCase"},{Pattern:"[0-9]",Target:"Numbers"},{Pattern:"[!@@#$%^&*]",Target:"Symbols"}],r=$(this).val();$("#Length").removeClass(r.length>8?"glyphicon-remove":"glyphicon-ok"),$("#Length").addClass(r.length>8?"glyphicon-ok":"glyphicon-remove");for(var i=0;i<e.length;i++)$("#"+e[i].Target).removeClass(new RegExp(e[i].Pattern).test(r)?"glyphicon-remove":"glyphicon-ok"),$("#"+e[i].Target).addClass(new RegExp(e[i].Pattern).test(r)?"glyphicon-ok":"glyphicon-remove")}$(function(){$(".accordion-wrap .accordion-section").eq(0).find(".section-sub-menu").addClass("active"),$(".section-name").click(function(e){e.preventDefault(),$(".section-name").removeClass("active"),$(this).addClass("active"),$(".section-sub-menu").removeClass("active"),$(this).next(".section-sub-menu").addClass("active")})}),$(function(){$.validator.addMethod("emailRegex",function(e,r){return this.optional(r)||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(e)},"")}),$(function(){$.validator.addMethod("passwordRegex",function(e,r){return this.optional(r)||/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(e)},"")}),$(document).ready(function(){$(".password").on("keyup",ValidatePassword)}),$(function(){$(".login-form-valid").validate({rules:{user:{required:!0,minlength:2},password:{required:!0,passwordRegex:!0}},messages:{user:{required:"Required",minlength:"Enter your full name"},password:{required:"",passwordRegex:""}}})}),$(function(){$(".form-create-account").validate({rules:{email:{required:!0,emailRegex:!0},password:{required:!0,passwordRegex:!0},password_confirm:{required:!0,equalTo:'[name="password"]'},phone:{required:!0},last_name:{required:!0,minlength:3},year:{required:!0},month:{required:!0},day:{required:!0},first_name:{required:!0,minlength:3}},messages:{email:{required:"You must enter a email name",emailRegex:"Login format not valid"},password:{required:"",passwordRegex:""},password_confirm:{required:"Password is reguired",equalTo:"Enter the correct password"},phone:{required:"Required field"},last_name:{required:"Required field",minlength:"Enter your full last name"},year:{required:"Required field"},month:{required:"Required field"},day:{required:"Required field"},first_name:{required:"Required field",minlength:"Enter your full name"}}})}),$(function(){$(".phone").intlTelInput({allowDropdown:!0,initialCountry:"us",separateDialCode:!0,preferredCountries:["fr","us","gb"]})}),$(function(){$(".form-user-address").validate({rules:{email:{required:!0,emailRegex:!0},phone:{required:!0},last_name:{required:!0,minlength:3},first_name:{required:!0,minlength:3},street:{required:!0},apt:{required:!0},address:{required:!0},province:{required:!0},country:{required:!0}},messages:{email:{required:"You must enter a email name",emailRegex:"Email format not valid"},phone:{required:"Required field"},last_name:{required:"Required field",minlength:"Enter your full last name"},first_name:{required:"Required field",minlength:"Enter your full name"},street:{required:"Required field"},apt:{required:"Required field"},address:{required:"Required field"},province:{required:"Required field"},country:{required:"Required field"}}})});