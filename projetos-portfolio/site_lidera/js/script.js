(function ($) {
    "use strict";
    // Windows load
    $(window).on("load", function () {
        // Site loader 
        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });

    // Back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').addClass('active');
            } else {
                $('.scroll-to-top').removeClass('active');
            }
        });
    });

    // Scroll to
    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -71
    });

    $(".link-menu").on("click", function () {
        $("div .navbar-collapse").removeClass("show");
    });
    
    var form = $('#form-contato');
    var submit = $('#enviar-msg');
    form.on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: '/contato/index.php',
            type: 'POST',
            dataType: 'json',
            data: form.serialize(),
            beforeSend: function () {
                submit.html("<i class='fas fa-spinner fa-spin'></i> AGUARDE ENVIANDO... ");
                $("#resposta-form").fadeOut('slow').html("").removeClass('alert alert-success alert-danger');
            },
            success: function (data) {
                switch (data.return) {
                    case undefined:
                        submit.fadeOut('slow');
                        $("#resposta-form").fadeIn('slow').html("<i class='fa fa-times'></i> Atenção, ocorreu um erro inesperado. Entre em contato com o suporte técnico").addClass("alert alert-danger");
                        break;
                    case 'ok':
                        form.trigger("reset");
                        submit.html("ENVIAR");
                        $("#resposta-form").fadeIn('slow').html("<i class='fa fa-check'></i> " + data.mensagem).addClass("alert alert-success");
                        break;
                    case 'erro':
                        submit.html("TENTAR NOVAMENTE");
                        $("#resposta-form").fadeIn('slow').html("<i class='fa fa-times'></i> " + data.mensagem).addClass("alert alert-danger");
                        break;
                }

            },
            error: function (e) {
                submit.html("TENTAR NOVAMENTE");
                $("#resposta-form").html("<i class='fa fa-times'></i> Atenção, ocorreu um erro inesperado. Entre em contato com o suporte técnico").addClass("alert alert-danger");
            }

        });

    });
    
})(jQuery);