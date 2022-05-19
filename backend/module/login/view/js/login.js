
function panel_user() {
  $(document).on('click','#show_panel',function () {
    $('div#panel_register').attr('hidden',false);
    $('div.layer_user').attr('hidden',false);

  });
  
  $(document).on('click','#logout',function () {
    localStorage.removeItem('token');
    toastr.info("User just finished session,wait a few seconds..");
    setTimeout(() => {  window.location.reload()},3000);

  });

  $(document).on('click','#user_login_close',function () {

    $('div#panel_register').attr('hidden',true);
    $('div.layer_user').attr('hidden',true);

  });

}
function change_password() {
  $(document).on('click','#remind',function () {
    $('div#login').empty();
    $('<div></div>').attr({'id':'panel_password'}).appendTo('div#login');
    $('<h3></h3>').html("Write your email").appendTo('#panel_password');
    $('<input></input>').attr({'id':'mail_2','type':'email','placeholder':'Email'}).appendTo('#panel_password');
    $('<br />').appendTo('#panel_password');
    $('<input></input>').attr({'id':'send_email','type':'button','value':'Recover','style':'background-color:red;color:white;border:none'}).appendTo('#panel_password');
  });
  $(document).on('click','#send_email',function () {

    var value = document.getElementById('mail_2').value;

    var regex = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    var result = regex.test(value);
    if (result) {
      var data = {"email": value};
      ajaxPromise(friendlyURL('?page=login&op=check_mail'), 
      'POST', 'JSON',data)
      .then(function(check) {
        
        if (check) {
          var mail = { "email": value,"token": check};
          ajaxPromise(friendlyURL('?page=login&op=recover_mail'), 
          'POST', 'JSON',mail)
          .then(function(check) {

            (check) ? toastr.info("Revise your mail to change password") : toastr.error("There was an error in the process to change your password");

          }).catch(function(info) {
            // window.location.href = "index.php?exceptions=controller&option=503";
            console.log(info);
          });
        } else {
          toastr.error("Email doens't exist or is vinculated with Google and Github");
        };
      }).catch(function(info) {
        // window.location.href = "index.php?exceptions=controller&option=503";
        console.log(info);
      });
    } else {
      toastr.error("Email ins't correct");
    }
  });
}
function validator_log(check) {
  var boolean = true;
  if (check[0].value) {
    var regex = /^[A-Za-z][A-Za-z0-9_]{2,20}$/;
    var result = new RegExp(regex);
    var result = regex.test(check[0].value);

    if (result == false ) {
      boolean = false;
      toastr.error("Username mustn't be contains less 20 caracters");
      return boolean;
    }
  } else {
        toastr.error("Username is required");
    boolean = false;
    return boolean;
  }

  if (check[1].value) {

    var regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    var result = new RegExp(regex);
    var result = regex.test(check[1].value);

    if (result == false ) {
      boolean = false;
      toastr.error("Passoword must be contains at least one lowercase, uppercase and one digit with limit between 8 and 16 caracters");
      return boolean;
    }
  } else {
    toastr.error("Password is required");
    boolean = false;
    return boolean;
  }

  return boolean;
}
function give_data_login() {

  $(document).on('click','#login_button',function () {
  
    var check = $('form#login').serializeArray();
    for ( i in check) {
      if (check[i].value == "") {
        $('input#'+check[i].name).css('background-color','black');
        
      } else {
        $('input#'+check[i].name).css('background-color','#363636');
      }
  }
    var data = $('form#login').serialize();

    $.when(validator_log(check))
    .then(element => {
      if (element == false) {
        console.log("Error");
      } else {
        ajaxPromise(friendlyURL('?page=login&op=logg-user'), 
        'POST', 'JSON',data)
        .then(function(data) {
          if (data == 0) {
            toastr.error("Username doesn't exist or is not activate");
          } else if ( data == 1) {
            toastr.error("Password isn't correct");
          } else {
            localStorage.setItem('token',JSON.stringify(data));
          toastr.info("User has logged");
          setTimeout(() => {window.location.reload()},3000);
        }
         console.log(data);
        }).catch(function(info) {
          // window.location.href = "index.php?exceptions=controller&option=503";
          console.log(info);
        });
      }
    });
  });
}

function new_password(token) {
  $('div#panel_register').attr('hidden',false);
  $('div.layer_user').attr('hidden',false);
  $('div#login').empty();
  $('<div></div>').attr({'id':'panel_password'}).appendTo('div#login');
  $('<h1></h1>').html("Write your new password").appendTo('#panel_password');
  $('<input></input>').attr({'id':'password_2','type':'password','placeholder':'Password'}).appendTo('#panel_password');
  $('<br />').appendTo('#panel_password');
  $('<input></input>').attr({'id':'confirm_2','type':'password','placeholder':'Confirm'}).appendTo('#panel_password');
  $('<br />').appendTo('#panel_password');
  $('<input></input>').attr({'id':'change_password','type':'button','value':'Change','style':'background-color:red;color:white;border:none'}).appendTo('#panel_password');
  check_password_and_send(token);
}

function check_password_and_send(token) {
  $(document).on('click','#change_password',function () {
    var password = document.getElementById('password_2').value;
    var Confirm = document.getElementById('confirm_2').value;

    var regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    var result = regex.test(password);

    if (result) {
      if (password == Confirm) {
        var data = {"password": password,"token": token};
        ajaxPromise(friendlyURL('?page=login&op=set_new_password'), 
        'POST', 'JSON',data)
        .then(function(data) {
          if (data) {
            
            toastr.success("Password has been changed correctly");
            setTimeout(() => {window.location.href = "http://localhost/Proyecto_V.4-RafaFerri/home"},3000);
          } else {
            toastr.success("an error has occured"); 
          }
        }).catch(function(info) {
          // window.location.href = "index.php?exceptions=controller&option=503";
          console.log(info);
        });

      } else {
        toastr.error("Password and Confirm password aren't the same");
      }
    } else {
    toastr.error("Password isn't correct");
    }
  });
}
function load_contented() {

  var path = window.location.pathname.split('/');
    path = path[2].split('&');
  
  if(path[1] === 'recover'){
    
    new_password(path[2]);
  }
}

function social_login() {

  //Al tener register y login separados,tengo que crear dos objetos auth para realizar la conexión y por eso peta:
  // var webAuth = new auth0.WebAuth({
  //   domain:       'dev-irl581xs.us.auth0.com',
  //   clientID:     '7q4vjPkTYlIw0Svb1iF9MDdvgLYwBduU',
  //   audience: 'https://' + 'dev-irl581xs.us.auth0.com' + '/userinfo',
  //   responseType: "token",
  //   scope: "openid profile email",
  //   redirectUri: "http://localhost/Proyecto_V.4-RafaFerri/home"
  // });
  
  $(document).on('click','#login_google',function () {
    webAuth.authorize({
      connection: 'google-oauth2'
    })
  });
  $(document).on('click','#login_github',function () {
    webAuth.authorize({
      connection: 'github'
    });
  });

  // webAuth.parseHash(function(err, authResult) {
  //   console.log(authResult);
  //   if (authResult) {
  //     webAuth.client.userInfo(authResult.accessToken, function(err, profile) {

  //       ajaxPromise(friendlyURL('?page=login&op=social_login'), 
  //       'POST', 'JSON',profile)
  //       .then(function(check_user) {

  //         if (check_user) {
  //            toastr.success("Se ha logeado correctamente");
  //            localStorage.setItem('token',JSON.stringify(check_user));
  //           setTimeout(() => {window.location.href="http://localhost/Proyecto_V.4-RafaFerri/home"},2000);
  //         } else {
  //           toastr.error("El usuario no existe");
  //           setTimeout(() => {window.location.href="http://localhost/Proyecto_V.4-RafaFerri/home"},2000);
  //         }
  //       }).catch(function(info) {
  //         // window.location.href = "index.php?exceptions=controller&option=503";        
  //         console.log(info);
  //       });
  //     });    
  //   } else if (err) {
     
  //     console.log(err);
  //     alert('Error: ' + err.error + '. Check the console for further details.');
  //   }
  // });
}

$(document).ready(function () {
   panel_user();
   give_data_login();
  social_login();
   change_password();
   load_contented();
});