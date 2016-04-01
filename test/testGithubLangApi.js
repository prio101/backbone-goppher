function testGithubLangApi(val){
    return val != '';
}


test('testGithubLangApi' , function(){
  ok(testGithubLangApi('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc' ), 'Github Lang API is okay')
});
