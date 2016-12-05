( ->
  $ ->
    $banner = {
      padre: $('#slider'),
      hijo: $('#slider').children()
    }
    console.log($banner.hijo)

    mensaje = ->
      $altura = $banner.hijo.outerHeight()
      console.log($altura)

      $banner.padre.css({
        'height': $altura + 'px'
        })
    # Se llama por Default
    mensaje()

    # Llamada dinámica
    $(window).resize( ->
      # Se Ejecutara cada vez que se redimencione
      mensaje()
    )

)()
