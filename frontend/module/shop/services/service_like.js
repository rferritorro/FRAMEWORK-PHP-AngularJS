app.factory('service_like', function($rootScope,toastr,services) {
    let service = {charge_all_likes:charge_all_likes,like_dislike:like_dislike};
    return service;
    function charge_all_likes() {
        setTimeout(()=>{ 
            if ($rootScope.likes || $rootScope.cars ) {
                $rootScope.likes.map(function(car){
                var darlike = document.getElementById(car.car+'like')
                if (darlike != null) {
                    darlike.setAttribute("on",1)
                    darlike.style.color=  "#dc3545"
                }
                })
            }
        },200)
    }

    function like_dislike(carid) {
        var token = localStorage.getItem('token')
        if (token) {

            var car = document.getElementById(carid+"like");
            var color ;
            if (car.getAttribute("on") == 0) {
                car.style.color = "#dc3545"
                color = 1;
                car.setAttribute("on",color)
            } else {
                car.style.color = "black";
                color = 0;
                car.setAttribute("on",color)
            }
            services.post('shop', 'like', {info_id: carid,info_color: color,token: token})
            .then(function(response) {
                console.log(response)
            }, function(error) {
                console.log(error);
            });

        } else {
            toastr.error("You need login first")
            localStorage.setItem('positionY',window.scrollY);
            setTimeout(()=>{document.getElementById('button_panel_user').click()},1500)
        }
    }
})