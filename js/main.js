$(function () {
  // ナビゲーションがスクロールされたときの処理
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  // ========================================
  // ハンバーガーメニュー
  // ========================================
  var hamburgerMenu = (function () {
    // メニューボタン
    var $navToggle = $('.js-toggle-sp-menu');
    var $navToggleOpen = $('.js-toggle-sp-menu,.js-toggle-sp-menu-target');
    return {
      toggleOpen: function () {
        $navToggleOpen.toggleClass('active');
      },
      toggleClose: function () {
        // ハンバーガーメニューを閉じるための処理
        $navToggleOpen.removeClass('active');
      },
      init: function () {
        $navToggle.on('click', function () {
          hamburgerMenu.toggleOpen();
        });
        var $document = $(document);
        // メニューボタンとリスト要素
        var $clickTarget = $('.js-toggle-sp-menu');
        $document.on('click', function (event) {
          // メニューボタンとリスト要素以外がクリックされた場合
          if (!$(event.target).closest($clickTarget).length) {
            hamburgerMenu.toggleClose();
          }
        });
      }
    }
  })();
  hamburgerMenu.init();

  // ナビゲーションがスクロールされたときの処理
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  // js-scroll-topがクリックされたら500ミリ秒かけてトップまで遷移する
  $(".js-scroll-top").on("click", function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
  });

});
