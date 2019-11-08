$('#apoyo').change(function() {
    if ($(this).is(":checked")) {
        $('.1').addClass('active');
        $('#img1').attr('src', './img/triangle.svg');
        $('#img1a').attr('src', './img/triangle.svg');
        $('#next-img').attr('src', './img/next.png');
    } else {
        $('.1').removeClass('active');
        $('#img1').attr('src', './img/triangle-red.svg');
        $('#img1a').attr('src', './img/triangle-red.svg');

    };

});
$('#idea').change(function() {
    if ($(this).is(":checked")) {
        $('.2').addClass('active');
        $('#img2').attr('src', './img/triangle.svg');
        $('#img2a').attr('src', './img/triangle.svg');
        $('#next-img').attr('src', './img/next.png');
    } else {
        $('.2').removeClass('active');
        $('#img2').attr('src', './img/triangle-red.svg');
        $('#img2a').attr('src', './img/triangle-red.svg');

    }

});
$('#emprendi').change(function() {
    if ($(this).is(":checked")) {
        $('.3').addClass('active');
        $('#img3').attr('src', './img/triangle.svg');
        $('#img3a').attr('src', './img/triangle.svg');
        $('#next-img').attr('src', './img/next.png');
    } else {
        $('.3').removeClass('active');
        $('#img3').attr('src', './img/triangle-red.svg');
        $('#img3a').attr('src', './img/triangle-red.svg');

    }

});
$('#mejorar').change(function() {
    if ($(this).is(":checked")) {
        $('.4').addClass('active');
        $('#img4').attr('src', './img/triangle.svg');
        $('#img4a').attr('src', './img/triangle.svg');
        $('#next-img').attr('src', './img/next.png');
    } else {
        $('.4').removeClass('active');
        $('#img4').attr('src', './img/triangle-red.svg');
        $('#img4a').attr('src', './img/triangle-red.svg');

    }

});
$('#especializarse').change(function() {
    if ($(this).is(":checked")) {
        $('.5').addClass('active');
        $('#img5').attr('src', './img/triangle.svg');
        $('#img5a').attr('src', './img/triangle.svg');
        $('#next-img').attr('src', './img/next.png');
    } else {
        $('.5').removeClass('active');
        $('#img5').attr('src', './img/triangle-red.svg');
        $('#img5a').attr('src', './img/triangle-red.svg');

    }

});
$('#inversion').change(function() {
    if ($(this).is(":checked")) {
        $('.6').addClass('active');
        $('#img6').attr('src', './img/triangle.svg');
        $('#img6a').attr('src', './img/triangle.svg');
        $('#next-img').attr('src', './img/next.png');
    } else {
        $('.6').removeClass('active');
        $('#img6').attr('src', './img/triangle-red.svg');
        $('#img6a').attr('src', './img/triangle-red.svg');

    }

});
$('#innovacion').change(function() {
    if ($(this).is(":checked")) {
        $('.7').addClass('active');
        $('#img7').attr('src', './img/triangle.svg');
        $('#img7a').attr('src', './img/triangle.svg');
        $('#next-img').attr('src', './img/next.png');

    } else {
        $('.7').removeClass('active');
        $('#img7').attr('src', './img/triangle-red.svg');
        $('#img7a').attr('src', './img/triangle-red.svg');

    }

});
let contador = 0
$(".box-check ").click(function() {
    if ($(this).hasClass("active")) {
        contador--;
        // Hacer algo si el checkbox ha sido seleccionado
        if (contador === 0) {
            $('#next-img').attr('src', './img/next-disabled.png');
            // $(".next-button").click(function() {
            //     $("a").removeAttr("href");
            // });

        }
    } else {
        contador++;
    }
    console.log(contador);
});

$(function() {
    $('#print').on('show.bs.modal', function() {
        var myModal = $(this);
        clearTimeout(myModal.data('hideInterval'));
        myModal.data('hideInterval', setTimeout(function() {
            myModal.modal('hide');
        }, 3000));
    });
});