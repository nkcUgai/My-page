$(function()
{
  // 初期起動
  var nav = document.getElementById('TopMenu');
  var child = nav.getElementsByTagName('a');
  var path = location.hash; // 現在のパスのハッシュ値を取得する
  for(var i = 0; i < child.length; i++)
  {
      var href = child[i].getAttribute('href');
      if(href === path)
      {
        $(".content").removeClass("show").eq(i).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
        switch(path)
        {
          case '#home':
            alert('#home');
            //$("#cover").load("html/home.html");
            $("#home-content").load("home.html", function() {
              alert('Load was performed.');
            });
            break;
          default:
              break;
        }
  
        break;
      }else
      {
      }

  }
//$('.content.show').append('aaaaaaaa<br>');

  // 機能を呼び出す簡易な記述
  $('#TopMenu li').click(function()
  {
    const index = $(this).index();
    $(".content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
    //alert(index  + ' jQuery');
  });

  // 機能を呼び出す簡易な記述
  $('#button1').click(function()
  {
    alert('jQuery 1');
  });
});