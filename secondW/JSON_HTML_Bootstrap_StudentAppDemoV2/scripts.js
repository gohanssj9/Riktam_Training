$(document).ready(function(){
	// Function to convert an HTMLFormElement to an Object, so that it can be converted into data that can be used by Ajax request
	function objectifyForm(formArray){
		var returnArray = {};
		for (var i = 0; i < formArray.length; i++)
    		returnArray[formArray[i]['name']] = formArray[i]['value'];

    	console.log(returnArray);
  		return returnArray;
	}
	
	// Get All Records
	$("#getButton").on("click", function(){
		$.ajax({
			url: '/student',
			contentType: 'application/json',
			success: function(response){
				var data = JSON.parse(response);
				var tbodyEl = $('tbody#mainBody');
				tbodyEl.html('');
				for(i = 0; i < data.length; i++){
					console.log(data[i]);
					var viewRecord = "<button type='button' id = '" + data[i].id + "' class='btn btn-warning mainViewButton' style = 'float: left; width: 33%; margin-top: 3px; margin-bottom: 3px;'>View Record</button>";
					var updateRecord = "<button type='button' id = '" + data[i].id + "' class='btn btn-primary mainUpdateButton' style = 'width: 33%; margin-top: 3px; margin-bottom: 3px;'>Update Record</button>";	
					var deleteRecord = "<button type='button' id = '" + data[i].id + "' class='btn btn-danger mainDeleteButton' data-toggle='modal' data-target='#deleteRecordModal' style = 'float: right; width: 33%; margin-top: 3px; margin-bottom: 3px;'>Delete Record</button>";

					tbodyEl.append("<tr scope = 'row' border = '0' style = 'text-align: center;'>");
					tbodyEl.append("<td class = 'idi'>" + data[i].id + "</td>");
					tbodyEl.append("<td>" + data[i].name + "</td>");
					tbodyEl.append("<td>" + data[i].age + "</td>");
					tbodyEl.append("<td>" + "<div class = 'text-center' >" +  viewRecord + updateRecord + deleteRecord + "</div></td>");
					tbodyEl.append("</tr>");

					console.log(tbodyEl);
					
				}
			},
			error: function(xhr){
				console.log("An Error Occurred!");
			}
		});
	});
	
	// Add a record
	$(document).on('click','#addRecordButton', function (event){
		event.preventDefault();
		var input = $('#addRecordForm');
		$.ajax({
			url: '/student',
			method: 'POST',
			data: input.serialize(),
			success: function(response){
				input[0].reset();
				console.log(response);
				$("#addRecordModal").modal('hide');
				$("#getButton").click();
			},
			error: function(xhr){
				console.log("An Error Occurred!");
			}
		});
	});

	//View a Record
	$(document).on('click', '.mainViewButton', function (event){
		event.preventDefault();
		console.log($(this));
		var passableId = $(this)[0].id;
		$.ajax({
			url: '/student/' + passableId,
			contentType: 'application/json',
			success: function (response){
				var data = JSON.parse(response);
				console.log(data[0]);

				$("#populateDataFromViewRecord").html("<p>Name: " + data[0].name + "</p><p>Age: " + data[0].age + "</p>");
				$("#viewRecordModal").modal();
			}
		});
	});

	// $('#updateRecordModal').on('show.bs.modal', function (event){
	// 	var getNameFromRow = event;//.data('name');
	// 	//$("#name").val(getNameFromRow);

	// 	var getAgeFromRow = event.relatedTarget;//.data('age');
	// 	//$("#age").val(getAgeFromRow);
	// 	console.log(getNameFromRow);
	// 	console.log(getAgeFromRow);

	// 	});

	// Update a record
	$(document).on('click','.mainUpdateButton', function (event){
		event.preventDefault();
		var passableId = $(this)[0].id;

		$("#updateRecordModal").modal("show");
		console.log("Modal Shown");
		$(document).on('click','.updateRecordButton', function (event){
			// console.log(this);
			// console.log(this.form[1].value); //Name tag position in form i.e 1. Therefore Zero
			// console.log(this.form[2].value); //Age tag position in form i.e 2. Therefore One
			// console.log(this.form[5].value); // Hidden Type for id in form i.e 5. Therefore Five
			//var idIndent = (this.nextElementSibling.defaultValue);
			//console.log(idIndent);
			var inputt = objectifyForm($(this)[0].form);
			inputt.id = passableId;
			
			var inputSerialize = jQuery.param(inputt);
			inputSerialize = inputSerialize.substring(2);
			// console.log(this.form);
			// console.log($(this)[0].form);
			// console.log($(this).serialize());
			// console.log($(this)[0].form.serializeArray());
			// console.log($("input#name").val());
			// var named = this.form[1].value;
			// var aged = this.form[2].value;
			// var idd = this.form[5].value;
			// var inputSerialize = "name=" + named + "&age=" + aged + "&id=" + idd + "&_method=put"; 	//Complete Hack Testing, Let it be there.
			$.ajax({
				url: '/student',
				method: 'POST',
				data: inputSerialize,
				success: function(response){
					console.log(response);
					$("#updateRecordModal").modal('hide');
					$(".modal-backdrop").remove();
					$("#getButton").click();
				},
				error: function(xhr){
					console.log("An Error Occurred!");
				}
			});
		});
	});
	
	// Delete a record
	$(document).on('click','.mainDeleteButton', function (event){
		event.preventDefault();
		var passableId = $(this)[0].id;
		$(document).on('click', '.deleteRecordButton', function (event){
			// var idIndent = (this.nextElementSibling.defaultValue); // contains the ID to be deleted. Worst Hack of the Decade :(
			// console.log("Hello-2," + $(this)[0].form);
			// var inputSerialize = "id=" + idIndent + "&_method=delete"; // Complete Hack, but now set.
			var inputt = objectifyForm($(this)[0].form);
			inputt.id = passableId;
			var inputSerialize = jQuery.param(inputt);
			inputSerialize = inputSerialize.substring(2);
			$.ajax({
				url: '/student',
				method: 'POST',
				data: inputSerialize,
				success: function(response){
					console.log(response);
					$("#deleteRecordModal").modal('hide');
					$(".modal-backdrop").remove();
					$("#getButton").click();
				},
				error: function(xhr){
					console.log("An Error Occurred!");
				}
			});
		});
	});
});

//data-toggle='modal' data-target='#updateRecordModal'