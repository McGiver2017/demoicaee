 $(function(){
        $(".digits").countdown({
          image: "img/digits.png",
          format: "dd:hh:mm:ss",
          endTime: new Date(2017, 10, 09)
        });
     
      });

function ver_mision(){
    sel_no_select();
    ocultar_parrafos();
    $('#mision p').removeClass("hidden");    
    $('#sel_mision').addClass("seleccionado"); 
}
function ver_mensaje(){
    sel_no_select();
    ocultar_parrafos();
    $('#mensaje p').removeClass("hidden");    
    $('#sel_mensaje').addClass("seleccionado");        
}
function ver_vision(){
    sel_no_select();
    ocultar_parrafos();
    $('#vision p').removeClass("hidden");    
    $('#sel_vision').addClass("seleccionado");        
}
function ver_facultad(){
    sel_no_select();
    ocultar_parrafos();
    $('#facultad p').removeClass("hidden");    
    $('#sel_facultad').addClass("seleccionado");        
}
function ver_organizadores(){
    sel_no_select();
    ocultar_parrafos();
    $('#organizadores p').removeClass("hidden");    
    $('#sel_organizadores').addClass("seleccionado");        
}
function sel_no_select(){
    $('#sel_mensaje').removeClass("seleccionado");
    $('#sel_mision').removeClass("seleccionado");
    $('#sel_vision').removeClass("seleccionado");
    $('#sel_facultad').removeClass("seleccionado");
    $('#sel_organizadores').removeClass("seleccionado"); 
}
function ocultar_parrafos(){
    $('#mision p').addClass("hidden");
    $('#mensaje p').addClass("hidden");
    $('#vision p').addClass("hidden");
    $('#facultad p').addClass("hidden");
    $('#organizadores p').addClass("hidden");
}