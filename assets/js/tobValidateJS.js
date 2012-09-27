$(function(){

	$('#submBtn').click(function()
	{	
		MakeValidation();
	});
	

});

function MakeValidation()
{
	var validator = $('#theForm').validate(
	{
		errorContainer: ".errorContainer",
		errorLabelContainer: ".errorContainer ul",
		wrapper: "li",
		
		invalidHandler: function() 
		{
		},
		
		submitHandler: function()
		{
			alert('Valid!');
		}	
		
	});
	
	if(validator.numberOfInvalids() > 0)
	{
		$('.errorContainer').slideDown('slow', function(){});
	}
}