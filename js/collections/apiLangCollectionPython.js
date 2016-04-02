var apiLangCollectionPython = Backbone.Collection.extend({
    url: 'https://api.github.com/legacy/repos/search/python',
    model: ApiLangModel ,

    parse: function(data){
      return data.repositories;
    }
});



var lang_repos = new apiLangCollectionPython();

lang_repos.fetch({success: function(){
    var usernameRender = new topLangNPython(lang_repos);

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
            fillColor : "#f2ca27",
            strokeColor : "#f2ca27",
            pointColor : "#fff",
            pointStrokeColor : "##f2ca27",
            data : forks
        }
    ]
    }
    // get line chart canvas
    var lang = document.getElementById('lang-popularity-python').getContext('2d');
    // draw line chart
    new Chart(lang).Line(langData);

    // bar chart data
    var barData = {
        labels : name,
        datasets : [
            {
                fillColor : "#48A497",
                strokeColor : "#48A4D1",
                data : score
            }
        ]
    }
    // get bar chart canvas
    var score = document.getElementById("score-python").getContext("2d");
    // draw bar chart
    new Chart(score).Bar(barData);

}});
