app.factory('service_news', function(services) {
    let service = {more_news: more_news};
    return service;

    function more_news(index) {

        var e = Math.floor((Math.random() * 5));
        var them_array= ["Audi","BMW","Ferrari","Mercedes"];
        index[0] = index[0]+3;

        if (index[0] == 3) {

            index = [index[0],them_array[e]];
            localStorage.setItem('limits',JSON.stringify(index));

        } else {

            localStorage.setItem('limits',JSON.stringify(index));

        }
        var news_array= [];
        services.get_out('https://gnews.io/api/v4/search?q='+index[1]+'&token=0385cf3c96b012a44d32a89154502a99')
        .then(function(data) {
            for (i=0;i < index[0];i++) {
                news_array.push(data.articles[i]);
            }

        }, function(error) {
            console.log(error);
        });
       
        return news_array;
    }
});