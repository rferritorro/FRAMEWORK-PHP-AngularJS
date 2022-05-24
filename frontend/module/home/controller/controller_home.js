app.controller('controller_home', function($scope,BrandsCar,TypeCar,CategoriesCar,service_news) {

  $scope.brands= BrandsCar;
  $scope.types= TypeCar;
  $scope.categories= CategoriesCar;
  $scope.service_news_button = true;

  $scope.news = service_news.more_news([0,null]);

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
  console.log(index[0]);

  if (index[0] == 6) {

    $scope.service_news_button = false;
    $scope.news = service_news.more_news(index);
    
    
  } else {
    
    $scope.news = service_news.more_news(index);

  }

}
})



// function charge_filter_home() {
//   var filtro = {};

//   $(document).on('click','.image_brand_car',function () {
//       var id_brand_car = this.getAttribute('data-id');
//       brand = {marca: id_brand_car};
//       filtro = Object.assign(filtro,brand);
//       reload_shop(filtro);
//   });
//   $(document).on('click','.image-type',function () {
//       var id_type_car = this.getAttribute('data-id');
//       type = {tipo: id_type_car};
//       filtro = Object.assign(filtro,type);
//       reload_shop(filtro);
//   });
//   $(document).on('click','.image-category',function () {
//       var id_category_car = this.getAttribute('data-id');
//       categories = {categoria: id_category_car};
//       filtro = Object.assign(filtro,categories);
//       reload_shop(filtro);
//   });
  