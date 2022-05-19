function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData,
            beforeSend: function() {
                $("#imgSpinner1").show();
              },
              // hides the loader after completion of request, whether successfull or failor.             
            complete: function() {
                $("#imgSpinner1").hide();
              },
        }).done((data) => {
            resolve(data);
        }).fail((jqXHR, textStatus, errorThrow) => {
            reject(errorThrow);
        }); 
    });
}

function friendlyURL(url) {
    var link="";
    url = url.replace("?", "");
    url = url.split("&");
    cont = 0;
    for (var i=0; i<url.length; i++) {
    	cont++;
        var aux = url[i].split("=");
        if (cont == 2) {
        	link +=  "/"+aux[1]+"/";	
        }else{
        	link +=  "/"+aux[1];
        }
    }

    return "http://localhost/Proyecto_V.4-RafaFerri" + link;
    // return "http://192.168.1.32/Proyecto_V.4-RafaFerri" + link;

}
function load_user(token) {
    var data = {"token": token};
    ajaxPromise(friendlyURL('?page=login&op=charge-user'), 
    'POST', 'JSON',data)
    .then(function(data) {
        $('<div></div>').attr({'id':'perfil'}).appendTo('div#default_panel')
        $('<img></img>').attr({'src':data[0].avatar}).appendTo('#perfil');
        $('<br />').appendTo('#perfil');
        $('<h3></h3>').html(data[0].uid).appendTo('#perfil');
        $('<i></i>').attr({'id':'logout','class':'fa fa-door-open fa-3x'}).appendTo('div#default_panel');    
    }).catch(function(info) {
      // window.location.href = "index.php?exceptions=controller&option=503";
      console.log(info);
    });
}
function load_menu() {
     var user = JSON.parse(localStorage.getItem('token'));
    if (user) {
        load_user(user);    
    } else {
        var random = Math.floor(Math.random() * 9);
        var array = ["fa-user","fa-user-astronaut","fa-user-graduate","fa-user-injured","fa-user-md","fa-user-ninja","fa-user-nurse","fa-user-secret","fa-user-tie"];
        $('<i></i>').attr({'class':'fa '+ array[random] +' fa-3x'}).appendTo('div#default_panel');
        $('<h3></h3>').attr({'id':'show_panel'}).html("Login In").appendTo('#default_panel');
    }
}
$(document).ready(function()
{
   load_menu();
})

