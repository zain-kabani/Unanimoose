$('.register').submit(function(e) {

    e.preventDefault();
    name = $("#regName")[0].value
    email = $("#regEmail")[0].value
    password = $("#regPassword")[0].value
    //console.log(e.target)

    // form = e.target
    // console.log(form)
    //
    // form.attr("method", "post");
    // form.attr("action", 'http://localhost:3000/users/register');

    $.ajax({type : 'POST',
		// url : "http://localhost:3000/users/register?name=" + name + "&email=" + email + "&password=" + password,
    url : "http://localhost:3000/users/register",
    data : $('#registerForm').serialize(),

		success : function(data) {
      localStorage.setItem('user', JSON.stringify(data.user))
      window.location.href = "/";
			// data.forEach(function(s){
      //
			// 	var time = s["time"], data = s["data"], type = s["type"], s_name = s["submission_name"], userSubmitted = s["username"]
      //
			// 	var row = $('#' + s_name + '_row')
			// 	row.find("input[type='checkbox']").prop('checked', true);
			// 	row.children().children().slideDown()
			// 	if (row.find('.dataField').attr('type') == "text" && type == "text") {
			// 		row.find('.dataField').val(data)
			// 		row.find('.dataCell').append("<p class='submissionInfo'>Submitted by: " + userSubmitted + ", on " + time + "</p>")
			// 		setImageToValid(row)
			// 	} else if (row.find('.dataField').attr('type') == "file" && type == "file") {
			// 		row.find('.dataCell').append("<p class='submissionInfo'>Previously submitted by: " + userSubmitted + ", on " + time + "</p>")
			// 		row.find('.dataCell').append("<button class='submissionInfo' type='button' onClick='getFiles(\"" + s_name + "\", \"" + period + "\")' >Download</button>");
			// 		setImageToInvalid(row)
			// 	}
			// })
    }
  })




    //thisIsUnique = e

    // $(this).serialize(); will be the serialized form
    //$(this).append($(this).serialize() + '<br />');
});

console.log('were in')
