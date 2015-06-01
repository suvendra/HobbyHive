		$(document).ready(function () {
		if (!(localStorage.getItem("hobby_userID") === null)){
			var id = localStorage.getItem("hobby_userID");
			var sendData = { "id": id};
			$('body').prepend("<div class='loading'></div>");
			$.ajax({
				type: "POST",
				url: "http://www.mhhdev.com/mobileapp/newdb/auth.php",
				data: sendData,
				dataType: "json",
				success: function(data) {
					if((data['isactive'] == 0) || data['isactive'] == null){
						window.location = "info_form.html";
					}else {
						$('.loading').remove();	
					}
				}
			});
		}else {
			window.location = "login.html";
		}
		});
