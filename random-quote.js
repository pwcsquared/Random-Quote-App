$(document).ready(function(){
  var getQuote = function(){
    $.ajax({
      type: "GET",
      headers:{
        "X-Mashape-Key": 'IJOV3xrIjCmshFcgsLQaeiB14q7Ap12dLt1jsn7CscrC4AZ2Vx',
      },
      dataType: 'json',
     url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
      success: function(data){
        $("#quote").html('"' + data.quote + '"');
        $("#author").html("-" + data.author);
        var tweetStub = "https://twitter.com/intent/tweet?text=";
        var tweetQuote = tweetStub + '"' + data.quote + '"' + " -" + data.author;
        $(".tweetQuote").on("mouseover",function(){
          $(".tweetQuote").attr("href", tweetQuote);
        });
      }    
    });
  };
  getQuote();
  $(".getQuote").on("click",getQuote);
});