var apiLangCollectionRuby = Backbone.Collection.extend({
    url: 'https://api.github.com/legacy/repos/search/ruby',
    model: ApiLangModel ,

    parse: function(data){
      return data.repositories;
    }
});



var lang_repos = new apiLangCollectionRuby();

lang_repos.fetch({success: function(){
    var usernameRender = new topLang(lang_repos);
    var labels = lang_repos.pluck("username");
    var forks = lang_repos.pluck("forks");
    var name = lang_repos.pluck("name");
    var score = lang_repos.pluck("score");
    console.log(labels);
    console.log(forks);
    console.log(name);
    console.log(score);

    // line chart data
    var langData = {
        labels : labels,
        datasets : [
        {
            fillColor : "#2ecc71",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data : forks
        }
    ]
    }
    // get line chart canvas
    var lang = document.getElementById('lang-popularity').getContext('2d');
    // draw line chart
    new Chart(lang).Line(langData);

    // bar chart data
    var barData = {
        labels : name,
        datasets : [
            {
                fillColor : "#8e44ad",
                strokeColor : "#8e44ad",
                data : score
            }
        ]
    }
    // get bar chart canvas
    var score = document.getElementById("score").getContext("2d");
    // draw bar chart
    new Chart(score).Bar(barData);

}});
