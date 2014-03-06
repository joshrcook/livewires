(function() {
  $(document).on('click', '.js-reveal', function(e) {
    var target;
    target = $(this).attr('href');
    $(target).toggleClass('opened');
    return e.preventDefault();
  });

}).call(this);

(function() {
  $('.js-show-pw').click(function(e) {
    var type;
    type = $(this).parents('.field').find('input');
    if ($(type).attr('type') === 'text') {
      $(type).get(0).type = 'password';
      $(this).text('Show password');
    } else {
      $(type).get(0).type = 'text';
      $(this).text('Hide password');
    }
    return e.preventDefault();
  });

  $('.js-options input').change(function() {
    var check, type;
    type = $(this).attr('type');
    check = $(this).parent('label');
    if (type === 'checkbox') {
      return check.toggleClass('checked');
    } else if (type === 'radio') {
      check.siblings('label').removeClass('checked');
      return check.addClass('checked');
    }
  });

}).call(this);

(function() {
  $('.content > p > img, .content > p > iframe, .content > p > input').each(function() {
    return $(this).unwrap('p');
  });

  $('.content > iframe').each(function() {
    var isMap, map, source;
    source = $(this).attr('src');
    map = /maps.google/;
    isMap = map.test(source);
    if (isMap) {
      return $(this).wrap('<figure class="map"></figure>');
    } else {
      return $(this).wrap('<figure class="video"></figure>');
    }
  });

  $('.content > img, .content > p > img').wrap('<figure></figure>');

  $('.video').fitVids();

}).call(this);

(function() {
  $('.js-open-canvas').click(function(e) {
    var target, targetName;
    target = $(this).find('a').attr('href');
    targetName = target.substring(4);
    $(this).toggleClass('active');
    $(target).toggleClass('offcanvas--open');
    if ($(target).hasClass('offcanvas--left')) {
      $('.offcanvas--push').toggleClass('offcanvas--push-left');
      $('.offcanvas--squish').toggleClass('offcanvas--squish-left');
    } else if ($(target).hasClass('offcanvas--right')) {
      $('.offcanvas--push').toggleClass('offcanvas--push-right');
      $('.offcanvas--squish').toggleClass('offcanvas--squish-right');
    }
    return e.preventDefault();
  });

}).call(this);

(function() {
  $('[placeholder]').each(function() {
    var hint;
    if ($(this).val() === '') {
      hint = $(this).attr('placeholder');
      return $(this).val(hint).addClass('hint');
    }
  });

  $('[placeholder]').focus(function() {
    if ($(this).val() === $(this).attr('placeholder')) {
      return $(this).val('').removeClass('hint');
    }
  }).blur(function() {
    if ($(this).val() === '') {
      return $(this).val($(this).attr('placeholder')).addClass('hint');
    }
  });

}).call(this);

(function() {
  $('.js-scroll').click(function(e) {
    var dest;
    dest = $(this).attr('href');
    e.preventDefault();
    return $('html, body').animate({
      scrollTop: $(dest).offset().top
    }, 1000);
  });

}).call(this);

(function() {
  $('.tabs').each(function() {
    var $active, $content, $links;
    $links = $(this).find('a');
    $active = $($links.filter('[href=\'' + location.hash + '\']')[0] || $links[0]);
    $active.addClass('active');
    $content = $($active.attr('href'));
    $links.not($active).each(function() {
      return $($(this).attr('href')).hide();
    });
    return $(this).on('click', 'a', function(e) {
      $active.removeClass('active');
      $content.hide();
      $active = $(this);
      $content = $($(this).attr('href'));
      $active.addClass('active');
      $content.show();
      return e.preventDefault();
    });
  });

}).call(this);

(function() {
  $('h1:contains("&"),h2:contains("&"),h3:contains("&"),h4:contains("&"),h5:contains("&"),h6:contains("&"),.lead:contains("&"),.content > p:first-child:contains("&")').each(function() {
    return $(this).html($(this).html().replace(/&amp;/, "<abbr class='amp'>&amp;</abbr>"));
  });

}).call(this);
