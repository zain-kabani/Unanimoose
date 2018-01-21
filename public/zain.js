$('.register').submit(function(e) {

    e.preventDefault();
    name = $("#regName")[0].value
    email = $("#regEmail")[0].value
    password = $("#regPassword")[0].value

    console.log($('#registerForm').serialize())


    $.ajax({type : 'POST',
    url : "http://localhost:3000/users/register",
    data : $('#registerForm').serialize(),

		success : function(data) {
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user))
        window.location.href = "/";
      } else {
        alert(data.msg)
      }

    }
  })

});

$('#loginForm').submit(function(e) {
    e.preventDefault();
    console.log('wetf')
    email = $("#loginEmail")[0].value
    password = $("#loginPassword")[0].value

    console.log("email: " + email + " " + password)

    console.log($('#loginForm').serialize())


    $.ajax({type : 'POST',
    url : "http://localhost:3000/users/authenticate",
    data : $('#loginForm').serialize(),

		success : function(data) {
      console.log(data)
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user))
        window.location.href = "/";

      }
      //localStorage.setItem('user', JSON.stringify(data.user))
      //window.location.href = "/";
    }
  })

});
