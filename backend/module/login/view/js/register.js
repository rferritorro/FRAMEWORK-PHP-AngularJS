
  function validator_re(check) {
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

    if (check[2].value) {
        if (check[2].value != check[1].value) {
            boolean = false;
            toastr.error("Confirm password and password aren't the same");
            return boolean;
        }
    } else {
        toastr.error("Confirm password is required");
        boolean = false;
        return boolean;
    }
    if (check[3].value) {
  
        var regex = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
        var result = new RegExp(regex);
        var result = regex.test(check[3].value);
    
        if (result == false ) {
          boolean = false;
          toastr.error("Email ins't correct");
          return boolean;
        }
      } else {
        toastr.error("Email is required");
        boolean = false;
        return boolean;
      }
  
  
    return boolean;
  }
  function social_button() {


    var webAuth = new auth0.WebAuth({
      domain:       'dev-irl581xs.us.auth0.com',
      clientID:     '7q4vjPkTYlIw0Svb1iF9MDdvgLYwBduU',
      audience: 'https://' + 'dev-irl581xs.us.auth0.com' + '/userinfo',
      responseType: "token",
      scope: "openid profile email",
      redirectUri: "http://localhost/Proyecto_V.4-RafaFerri/home"
    });
    
    $(document).on('click','#register_google',function () {
      webAuth.authorize({
        connection: 'google-oauth2'
      })
      localStorage.setItem('social_type', 'google');
    });
    $(document).on('click','#register_github',function () {
      webAuth.authorize({
        connection: 'github'
      });
      localStorage.setItem('social_type', 'github');
    });
    
    webAuth.parseHash(function(err, authResult) {
      if (authResult) {
        webAuth.client.userInfo(authResult.accessToken, function(err, profile) {

        profile.type = localStorage.getItem('social_type');
        localStorage.removeItem('social_type');

          ajaxPromise(friendlyURL('?page=register&op=social_register'), 
          'POST', 'JSON',profile)
          .then(function(check_user) {
            if (check_user) {
              toastr.success("Se ha registrado correctamente");
            } else {
              toastr.error("El usuario ya esta registrado");
            }
        
            setTimeout(() => {
              webAuth.logout({
                returnTo: 'http://localhost/Proyecto_V.4-RafaFerri/home',
                clientID: '7q4vjPkTYlIw0Svb1iF9MDdvgLYwBduU'
              });            },3000);
          }).catch(function(info) {
            // window.location.href = "index.php?exceptions=controller&option=503";        
            console.log(info);
          });
        });    
      } else if (err) {
       
        console.log(err);
        alert('Error: ' + err.error + '. Check the console for further details.');
      }
    });
  }

 
  function give_data_register() {
  
    $(document).on('click','#register_button',function () {
        
      var check = $('form#register').serializeArray();
      for ( i in check) {
          if (check[i].value == "") {
            $('input#'+check[i].name).css('background-color','black');
            
          } else {
            $('input#'+check[i].name).css('background-color','#363636');
          }
      }
      var data = $('form#register').serialize();
  
      $.when(validator_re(check))
      .then(element => {
        if (element == false) {
          console.log("Error");
        } else {
         
          ajaxPromise(friendlyURL('?page=register&op=register'), 
          'POST', 'JSON',data)
          .then(function(check_user) {
           
            if (check_user == 0) {
              toastr.error("Username has already been registered");
            } else if (check_user == 1) {
              toastr.error("Email has already been registered");
            } else if (check_user == 2) {
              toastr.error("There is an error");
            }else {
              toastr.info("Se ha enviado un correo de verificación");
              var obj = {
                user_token: check_user[0],
                email: check_user[1]
              }

              ajaxPromise(friendlyURL('?page=register&op=sendverify'), 
              'POST', 'JSON',obj)
              .then(function(info) {                
                console.log(info);
              }).catch(function(info) {
                // window.location.href = "index.php?exceptions=controller&option=503";        
                console.log(info);
              });
            
            };
          }).catch(function(info) {
            // window.location.href = "index.php?exceptions=controller&option=503";        
            console.log(info);
          });

        }
      });
    });
  }
function register_user(token_user) {
  var data = {"token": token_user};
  ajaxPromise(friendlyURL('?page=register&op=newuser'), 
  'POST', 'JSON',data)
  .then(function(info) {
    window.location.href = "http://localhost/Proyecto_V.4-RafaFerri/home";
  }).catch(function(info) {
    // window.location.href = "index.php?exceptions=controller&option=503";        
    console.log(info);
  });
}

function load_content() {

  var path = window.location.pathname.split('/');
    path = path[2].split('&');
  if(path[1] === 'registered'){
    register_user(path[2]);
  }
 
}

  $(document).ready(function () {
    give_data_register();
    social_button();
    load_content();
  });