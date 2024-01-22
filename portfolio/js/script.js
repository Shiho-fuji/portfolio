$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });




  $(window).scroll(function () {
    $('.graph').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      if (scroll > position - windowHeight) {
        // クラス 'active' を追加
        $(this).addClass('.active');
  
        // .number 要素からパーセンテージを取得
        var progressValue = parseInt($(this).find('.number').text());
  
        // keyframesを動的に生成し、スタイルに追加
        var dynamicKeyframes = `@keyframes progress-${progressValue} {
          0% { width: 0; opacity: 0; }
          ${progressValue}% { width: ${progressValue}%; opacity: 1;}
        }`;
  
        $("<style>")
          .prop("type", "text/css")
          .html(dynamicKeyframes)
          .appendTo("head");
  
        // アニメーションに動的に生成したkeyframesを設定
        $(this).css({
          "animation": `progress-${progressValue} 5s normal`,
          "animation-fill-mode": "forwards"
        });
  
        console.log(`Progress value for ${$(this).find(".skill-name").text()}: ${progressValue}%`);
      }
    });
  });

});


