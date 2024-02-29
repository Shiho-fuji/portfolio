$(function() {
  $('#submit').on('click', function (event) {
    // formタグによる送信を拒否
    event.preventDefault();
  
    // 入力チェックをした結果、エラーがあるかないか判定
    let result = inputCheck();

    // エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    // エラーが無かったらフォームを送信する
    if (error == false) {
      // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
      alert('お問い合わせを送信しました。')
    } else {
      // エラーメッセージを表示する
      alert(message);
    }
  });
  // フォーカスが外れたとき（blur）にフォームの入力チェックをする
  $('#fullname').blur(function () {
    inputCheck();
  });
  $('#email').blur(function () {
    inputCheck();
  });
  $('#tell').blur(function () {
    inputCheck();
  });
  $('#message').blur(function () {
    inputCheck();
  });
  function inputCheck() {
    // エラーのチェック結果
    let result;

    // エラーメッセージのテキスト
    let message = '';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;

    // お名前のチェック
    if ($('#fullname').val() == '') {
      // エラーあり
      $('#fullname').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      // エラーなし
      $('#fullname').css('background-color', '#fafafa');
    }

    // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
    if ($('#phone').val() == '' && $('#phone').val().indexOf('-') == -1) {
      // エラーあり
      $('#phone').css('background-color', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    } else {
      // エラーなし
      $('#phone').css('background-color', '#fafafa');
    }

    // メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    }

    // お問い合わせのチェック
    if ($('#message').val() == '') {
      // エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
    }

    // エラーの有無で送信ボタンを切り替え
    if (error == true) {
      $('#submit').attr('src', 'images/button-submit.png');
    } else {
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }

        // エラーが無かったらフォームを送信する
    if (error == false) {
      // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
      alert('お問い合わせを送信しました。');

      // 成功した場合にページをリダイレクトする
      window.location.href = 'index.html'; // リダイレクト先のURLを指定
    }

    // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    // 戻り値としてエラーがあるかどうかを返す
    return result;
  }


  $(window).scroll(function (){
    $('.fadein').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= position - windowHeight + 200){
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
        if (scroll <= 200) {
          $(this).removeClass('active');
      }
    });
  });




  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });

});