(function() {
  (function() {
    return $(function() {
      var $banner, mensaje;
      $banner = {
        padre: $('#slider'),
        hijo: $('#slider').children()
      };
      console.log($banner.hijo);
      mensaje = function() {
        var $altura;
        $altura = $banner.hijo.outerHeight();
        console.log($altura);
        return $banner.padre.css({
          'height': $altura + 'px'
        });
      };
      mensaje();
      return $(window).resize(function() {
        return mensaje();
      });
    });
  })();

}).call(this);

