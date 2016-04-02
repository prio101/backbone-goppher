var landingPageRequest = function(){
    return window.navigator.useragent ;
} ;


test('testViewOfLandingPage' , function(){
  ok( window.navigator.useragent , landingPageRequest());
});
