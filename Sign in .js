
       $("#submit_btn").click(function(){
        username = $("#username").val();
        password = $("#password").val();
          $("#user_error_msg").html("");
          $("#password_error_msg").html("");
        if(username == ""){
          $("#user_error_msg").html("This is required");
          $("#username").focus();
        } else if(password == ""){
          $("#password_error_msg").html("This is required");
          $("#password").focus();
        } else {
          alert("submitted");
    }
    });
