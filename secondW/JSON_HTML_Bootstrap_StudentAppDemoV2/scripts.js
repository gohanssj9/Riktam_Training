$(document).ready(function(){
	// GET
	$("#getButton").on("click", function(){
		$.ajax({
			url: '/student',
			contentType: 'application/json',
			success: function(response){
				var data = JSON.parse(response);
				var tbodyEl = $('tbody');
				tbodyEl.html('');
				for(i = 0; i < data.length; i++){
					console.log(data[i]);
					var viewRecord = "<button type='button' class='btn btn-warning btn-lg' data-toggle='modal' data-target='#myModal3" + data[i].id + "' style = 'width:33%;'>View Record</button><div class='modal fade' id='myModal3" + data[i].id + "' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>View Record</h4></div><form method='get' action = '/student/" + data[i].id + "' name='viewRecord' id = 'viewRecordForm'><div class='modal-body'><p>Name : " + data[i].name + "</p><p>Age : " + data[i].age + "</p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></form></div></div></div>";
					var updateRecord = "<button type='button' class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal" + data[i].id + "' style = 'width:33%;'>Update Record</button><div class='modal fade' id='myModal" + data[i].id + "' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Update Record</h4></div><form method='post' name='updateRecord' id = 'updateRecordForm'><fieldset><div class='modal-body'><div class='form-group'><label for='name'>Name</label><input type='text' id='name' name = 'name' placeholder='Name' class='form-control' required/></div><div class='form-group'><label for='age'>Age</label><input type='number' id='age' name = 'age' placeholder='Age' class='form-control' required/></div></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button><button type='submit' class='btn btn-primary btn2'> Update Record </button></div></fieldset><input type = 'hidden' name = 'id' value = '" + data[i].id + "' /><input type='hidden' name='_method' value='put'></form></div></div></div>";	
					var deleteRecord = "<button type='button' class='btn btn-danger btn-lg' data-toggle='modal' data-target='#myModal2" + data[i].id + "' style = 'width: 33%;'>Delete Record</button><div class='modal fade' id='myModal2" + data[i].id + "' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Delete Record</h4></div><form method='post' name='deleteRecord' id = 'deleteRecordForm'><p> Are you sure you want to delete the record? </p><button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button><button type='submit' class='btn btn-danger btn3'> Delete Record? </button><input type = 'hidden' name = 'id' value = '" + data[i].id + "' /><input type='hidden' name='_method' value='delete' /></form></div></div></div>";

					tbodyEl.append("<tr width = '80%' border = '0' style = 'text-align: center;'>");
					tbodyEl.append("<td class = 'idi'>" + data[i].id + "</td>");
					tbodyEl.append("<td>" + data[i].name + "</td>");
					tbodyEl.append("<td>" + data[i].age + "</td>");
					tbodyEl.append("<td>" + viewRecord + updateRecord + deleteRecord + "</td>")
					tbodyEl.append("</tr>");

					console.log(tbodyEl);
					
				}
			}
		});
	});

	$("#btn1").on('click', function(event){
		event.preventDefault();
		var input = $('#addRecordForm');
		$.ajax({
			url: '/student',
			method: 'POST',
			data: input.serialize(),
			success: function(response){
				input[0].reset();
				console.log(response);
				$("#myModal").modal('hide');
				$("#getButton").click();
			}
		});
	});

	$(document).on('click',"table .btn2", function(event){
		event.preventDefault();
		// console.log(this);
		// console.log(this.form[1].value); //Name tag position in form i.e 1. Therefore Zero
		// console.log(this.form[2].value); //Age tag position in form i.e 2. Therefore One
		// console.log(this.form[5].value); // Hidden Type for id in form i.e 5. Therefore Five
		//var idIndent = (this.nextElementSibling.defaultValue);
		//console.log(idIndent);

		// var input = $("#updateRecordForm");
		// var inputSerialize = input.serialize();

		var named = this.form[1].value;
		var aged = this.form[2].value;
		var idd = this.form[5].value;
		var inputSerialize = "name=" + named + "&age=" + aged + "&id=" + idd + "&_method=put"; 
		console.log(inputSerialize);
		$.ajax({
			url: '/student',
			method: 'POST',
			data: inputSerialize,
			success: function(response){
				console.log(response);
				$("#myModal").modal('hide');
				$(".modal-backdrop").remove();
				$("#getButton").click();
			}
		});
	});
	
	$(document).on('click','table .btn3', function(event){
		event.preventDefault();
		var idIndent = (this.nextElementSibling.defaultValue); // contains the ID to be deleted. Worst Hack of the Decade :(

		var inputSerialize = "id=" + idIndent + "&_method=delete";
		$.ajax({
			url: '/student',
			method: 'POST',
			data: inputSerialize,
			success: function(response){
				console.log(response);
				$("#myModal2").modal('hide');
				$(".modal-backdrop").remove();
				$("#getButton").click();
			}
		});
	});
});