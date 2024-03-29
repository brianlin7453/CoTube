
    // The "getFormData()" function retrieves the names and values of each input field in the form; 

    function getFormData(form) {
      var data = {};
      $(form).find('input, select').each(function() {
        if (this.tagName.toLowerCase() == 'input') {
          if (this.type.toLowerCase() == 'checkbox') {
            data[this.name] = this.checked;
          } else if (this.type.toLowerCase() != 'submit') {
            data[this.name] = this.value;
          }
        }else if(this.tagName.toLowerCase() == 'select'){
          var e = document.getElementById("user_security_question")
          data[this.name] = e.options[e.selectedIndex].value;
        }
         else {
          data[this.name] = this.value;
        }
      });
      return data;
    }


    // The "addFormError()" function, when called, adds the "error" class to the form-group that wraps around the "formRow" attribute;

    function addFormError(formRow, errorMsg) {
      var errorMSG = '<span class="error-msg">' + errorMsg + '</span>';
      $(formRow).parents('.form-group').addClass('has-error');
      $(formRow).parents('.form-group').append(errorMSG);
      $('#dialog').removeClass('dialog-effect-in');
      $('#dialog').addClass('shakeit');
      setTimeout(function() {
        $('#dialog').removeClass('shakeit');
      }, 300);
    }

    // FORM HANDLER:

    // form_name - This attribute ties the form-handler function to the form you want to submit through ajax. Requires an ID (ex: #myfamousid)
    // custom_validation - 

    function form_handler(form_name, custom_validation, success_message, error_message, success_function, error_function) {
      $(form_name).find('input[type="submit"]').on('click', function(e) { // if submit button is clicked

        window.onbeforeunload = null; // cancels the alert message for unsaved changes (if such function exists)

        $(form_name).find('.form-group .error-msg').remove();
        var submitButton = this;
        submitButton.disabled = true; // Disables the submit buttton until the rows pass validation or we get a response from the server.

        var form = $(form_name)[0];
        // The custom validation function must return true or false.
        if (custom_validation != null) {
          if (!custom_validation(form, getFormData(form))) {
            submitButton.disabled = false;
            return false;
          }
        }
        e.preventDefault(); //STOP default action
      });
      $(document).click(function(e) { // Whenever the user clicks inside the form, the error messages will be removed.
        if ($(e.target).closest(form_name).length) {
          $(form_name).find('.form-group').removeClass('has-error');
          setTimeout(function() {
            $(form_name).find('.form-group .error-msg').remove();
          }, 300);
        } else {
          return
        }
      });
    }

    // LOGIN FORM: Validation function
    function validate_login_form(form, data) {
      if (data.user_username == "") {
        // if username variable is empty
        addFormError(form["user_username"], 'The username is invalid');
        return false; // stop the script if validation is triggered
      }

      if (data.user_password == "") {
        // if password variable is empty
        addFormError(form["user_password"], 'The password is invalid');
        return false; // stop the script if validation is triggered
      }


      /*
        Unfinished, use the following code to test after connect to the database (login part)
       */


      // $.ajax({
      //   url: "index.html/login",
      //   type: "post",
      //   async: false,
      //   data: {username: data.user_username,password:data.user_password},
      //   success: function (data) {//loginController to check if the username and password match
      //     validality = data;
      //   }
      // });
      //
      // //VALIDATE USER INFO FROM THE DATABASE
      // if (!validality){
      //   addFormError(form["user_username"], 'The username does not exist or password incorrect');
      //   return false;
      // }

      $('#dialog').removeClass('dialog-effect-in').removeClass('shakeit');
      $('#dialog').addClass('dialog-effect-out');

      $.cookie('username',data.user_username);
      $.cookie('role',"user");

      $('#successful_login').addClass('active');
      document.location.href="./home.html";
    }

    // REGISTRATION FORM: Validation function
    function validate_registration_form(form, data) {
      if (data.user_username == "") {
        // if username variable is empty
        addFormError(form["user_username"], 'The username is invalid');
        return false; // stop the script if validation is triggered
      }

      if (data.user_password == "") {
        // if password variable is empty
        addFormError(form["user_password"], 'The password is invalid');
        return false; // stop the script if validation is triggered
      }

      if (data.user_cnf_password == "" || data.user_password != data.user_cnf_password) {
        // if password variable is empty
        addFormError(form["user_cnf_password"], "The passwords don't match");
        return false; // stop the script if validation is triggered
      }

      if (data.user_security_answer == ""){
        // if security answer variable is empty
        addFormError(form["user_security_answer"], "The security answer is invalid");
        return false;
      }

      /*
        Unfinished, use the following code to test after connect to the database (signUp part)
       */


      // $.ajax({
      //   url: "index.html/signup",
      //   type: "post",
      //   async: false,
      //   data: {username: data.user_username,password:data.user_password},
      //   success: function (data) {//signUpController to check if the username already exist
      //     validality = data;
      //   }
      // });
      //
      // if (!validality){
      //   addFormError(form["user_username"], 'The username already exists');
      //   return false;
      // }



      $('#dialog').removeClass('dialog-effect-in').removeClass('shakeit');
      $('#dialog').addClass('dialog-effect-out');



      $.cookie('username',data.user_username);
      $.cookie('role',"user");
      $('#successful_registration').addClass('active');
      document.location.href="./home.html";
      //return true;
    }

    // REGISTRATION FORM: Validation function
    function validate_reset_form(form, data) {
      if (data.user_username == "") {
        // if username variable is empty
        addFormError(form["user_username"], 'The username is invalid');
        return false; // stop the script if validation is triggered
      }

      if (data.user_new_password == "") {
        // if password variable is empty
        addFormError(form["user_new_password"], 'The password is invalid');
        return false; // stop the script if validation is triggered
      }

      if (data.user_cnf_new_password == "" || data.user_new_password != data.user_cnf_new_password) {
        // if password variable is empty
        addFormError(form["user_cnf_new_password"], "The passwords don't match");
        return false; // stop the script if validation is triggered
      }

      if (data.user_security_answer == ""){
        // if security answer variable is empty
        addFormError(form["user_security_answer"], "The security answer is invalid");
        return false;
      }
      alert(data.user_security_answer);
      /*
        Unfinished, use the following code to test after connect to the database (signUp part)
       */


      // $.ajax({
      //   url: "index.html/signup",
      //   type: "post",
      //   async: false,
      //   data: {username: data.user_username,password:data.user_password},
      //   success: function (data) {//signUpController to check if the username already exist
      //     validality = data;
      //   }
      // });
      //
      // if (!validality){
      //   addFormError(form["user_username"], 'The username already exists');
      //   return false;
      // }



      $('#dialog').removeClass('dialog-effect-in').removeClass('shakeit');
      $('#dialog').addClass('dialog-effect-out');



      $.cookie('username',data.user_username);
      $.cookie('role',"user");
      $('#successful_registration').addClass('active');
      document.location.href="./home.html";
      //return true;
    }



 

    form_handler("#reset_form",validate_reset_form, null, null, null, null, null ,null);
    form_handler("#login_form", validate_login_form, null, null, null, null, null, null);
    form_handler("#register_form", validate_registration_form, null, null, null, null, null, null);

    var dialogBox = $('#dialog');

    dialogBox.on('click', 'a.user-actions', function() {
      dialogBox.toggleClass('flip');
    });

    $('#successful_login,#successful_registration').on('click', 'a.dialog-reset', function() {
      $('#successful_login,#successful_registration').removeClass('active');
      dialogBox.removeClass('dialog-effect-out').addClass('dialog-effect-in');
      document.getElementById('login_form').reset();
      document.getElementById('register_form').reset();
    });