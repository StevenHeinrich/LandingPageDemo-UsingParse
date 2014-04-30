toastr.options = {
    "closeButton": true,
    "debug": false,
    "positionClass": "toast-bottom-full-width",
    "showDuration": "300",
    "hideDuration": "2000",
    "timeOut": "6000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

Parse.initialize("Xzh54LY8nnmS7wU8GcPvp8XA6BocuK9Ulat9Jdwd", "rZmIzKa3fooeHiLdS1DQLhhpQhVHFIJWMeDb0Ev5");

$('#email').keypress(function(e) {
  if (e.which == '13') {
     e.preventDefault();
     if(IsEmail($('#email').val())){
        storeEmail(this.value);
    } else {
        toastr.error('Please provide a valid email address.', 'There was a problem with your email');
    }
   }
});

$('#saveEmailBtn').click(function(evt){
    if(IsEmail($('#email').val())){
        storeEmail($('#email').val());
    } else {
        toastr.error('Please provide a valid email address.', 'There was a problem with your email');
    }
});

function storeEmail(email){
    var InterestedPerson = Parse.Object.extend("InterestedPerson");
    var interestedPerson = new InterestedPerson();
    interestedPerson.save({"email": email}, {
      success: function(object) {
        $(".success").show();
        toastr.success('Keep an eye on your inbox for upcoming news regarding our launch plans and pre-release promotions', 'Your email was successfully stored.');
      },
      error: function(model, error) {
        $(".error").show();
      }
    });
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}