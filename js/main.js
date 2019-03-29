$(function(){
    $('#ustava h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#048'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });
    var kviz = $('#kviz div.row');
    var odkazy = $('#odkazy ul');
    auta.forEach(function(obj,idx){
        kviz.append('<div class="col-sm-3"><figure><img src="img/nic0.jpg" class="img-fluid" alt="zahada"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
        odkazy.append('<li><a href="'+ obj.link +'">'+ obj.name +'</a></li>');
    });
    auta.forEach(function(obj,idx){
        idx++;
        $('#aautaa').append('<div class="col-md-3" ><img src="img/logo'+idx+'.jpg" alt="'+obj.name+'" class="img-fluid"></div>')
    })
    var modal = $('#myModal')
    var foto = $('#kviz figure');
    var tohleto=null;
    foto.on('click', function(){
            tohleto=null;
            var alt = $(this).find('figcaption').text();
            modal.find('.modal-title').text(alt);
            modal.modal('show');
            modal.hide();
            modal.toggle(500)
            tohleto=this;
            $('#myModal img').on('click', function(){
                $(tohleto).find('img').attr('src',$(this).attr('src'))
                                      .attr('alt',$(this).attr('alt'));
                modal.modal('hide');
            })
        });
    $('#kviz .btn-success').on('click', function(){
        $('#kviz figure').each(function(idx,obj) {
            var alt = $(obj).find('img').attr('alt');
            var figcaption = $(obj).find('figcaption').text();
            if (alt == figcaption) {
                $(obj).find('img').css({'border':'2px solid green'}); 
            } else {
                $(obj).find('img').css({'border':'2px solid red'}); 
            }
        });
    });

    var i = 1;
    window.setInterval(function(){
        $('#vuz img').attr('src','img/'+vozy[i].photo);
        $('#vuz figcaption').text(vozy[i].place);
        i<vozy.length-1 ? i++ : i=0; 
    }, 2000);
})