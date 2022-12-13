
$(function() {
  $(".accordion-wrap .accordion-section").eq(0).find('.section-sub-menu').addClass('active')
  $(".section-name").click(function(e){
    e.preventDefault();
    $(".section-name").removeClass('active')
    $(this).addClass("active")
    $(".section-sub-menu").removeClass('active')
    $(this).next(".section-sub-menu").addClass('active')
     })
});



$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
    }, "");
});

function ValidatePassword() {
  var rules = [{
      Pattern: "[A-Z]",
      Target: "UpperCase"
    },
    {
      Pattern: "[a-z]",
      Target: "LowerCase"
    },
    {
      Pattern: "[0-9]",
      Target: "Numbers"
    },
    {
      Pattern: "[!@@#$%^&*]",
      Target: "Symbols"
    }
  ];
  var password = $(this).val();

  $("#Length").removeClass(password.length > 8 ? "glyphicon-remove" : "glyphicon-ok");
  $("#Length").addClass(password.length > 8 ? "glyphicon-ok" : "glyphicon-remove");

  for (var i = 0; i < rules.length; i++) {

    $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-remove" : "glyphicon-ok"); 
    $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-ok" : "glyphicon-remove");
      }
    }

    $(document).ready(function() {
      $(".password").on('keyup', ValidatePassword)
    });



$(function() {
    $(".login-form-valid").validate({
        rules: {
            "user": {
                required: true,
                minlength: 2,
            },
            "password": {
                required: true,
                passwordRegex: true,
            },
        },
        messages: {
            "user": {
                required: "Required",
                minlength: "Enter your full name",
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
        },
    });
});


$(function() {
    $(".form-create-account").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true,
            },
            "password_confirm": {
              required: true,
              equalTo : '[name="password"]'
            },
            "phone": {
              required: true,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "year": {
              required: true,
            },
            "month": {
              required: true,
            },
            "day": {
              required: true,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },

        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
            "password_confirm": {
              required: "Password is reguired",
              equalTo : "Enter the correct password"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "year": {
              required: "Required field",
            },
            "month": {
              required: "Required field",
            },
            "day": {
              required: "Required field",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
        },
    });
});

$(function() {
    $(".phone").intlTelInput({
      allowDropdown: true,
      initialCountry: "us",
      separateDialCode: true,
      preferredCountries: ["fr", "us", "gb"],

        // options here
    });
});

$(function() {
    $(".form-user-address").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "phone": {
              required: true,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },
            "street": {
              required: true,
            },
            "apt": {
              required: true,
            },
            "address": {
              required: true,
            },
            "province": {
              required: true,
            },
            "country": {
              required: true,
            },
        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Email format not valid"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
            "street": {
              required: "Required field",
            },
            "apt": {
              required: "Required field",
            },
            "address": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
            "country": {
              required: "Required field",
            },
        }
    });
});
           







 





















