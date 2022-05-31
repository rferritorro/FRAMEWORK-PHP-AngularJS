app.controller('controller_home', function($scope,$rootScope,BrandsCar,TypeCar,CategoriesCar,service_news) {

  $scope.brands= BrandsCar;
  $scope.types= TypeCar;
  $scope.categories= CategoriesCar;
  $scope.service_news_button = true;

  $scope.news = service_news.more_news([0,null]);

  $rootScope.home_filter = function(data,type) {
    var obj = {};
    if (type == "brand") {
      obj.marca = data;
    } else if (type == "type") {
      obj.tipo = data;

    }else if (type == "categorie") {
      obj.categoria = data;

    }
    
    localStorage.setItem('filter_home',JSON.stringify(obj));
    window.location.href="#/shop"
  }

setTimeout(() => {  
  new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 3,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // And if we need scrollbar
    })
  },0)


$scope.allnews = function(){

  var index = JSON.parse(localStorage.getItem('limits'));

  if (index[0] == 6) {

    $scope.service_news_button = false;
    $scope.news = service_news.more_news(index);
    
    
  } else {
    
    $scope.news = service_news.more_news(index);

  }

}
})
