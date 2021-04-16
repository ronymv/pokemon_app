$(document).ready(function () {
    jQuery.support.cors = true;
    $.ajax(
     {
         type: "GET",
         url: 'https://pokeapi.co/api/v2/pokemon/',
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         cache: false,
         success: function (data) {
             var trHTML = '';
             $.each(data.results, function (i, element) {
                  trHTML += '<div class="row"> <div class="cell"> '+element.name+'</div> <div class="cell"> <div class="button" onClick="getPokemonDetail(\''+element.url+'\')">ver Detalles</div> </div></div>';
             });
             /* #product es el nombre de una tabla, pero puedes utilizar cualquier contenedor html*/
             $('#pokemonList').append(trHTML);
         },

         error: function (msg) {
             trHTML += msg.responseText;
         }
     });
});




function getPokemonDetail(urlSelected){
    jQuery.support.cors = true;
    var pokemon = {};
    $.ajax(
        {
            type: "GET",
            url: urlSelected,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $('#nombre').html(data.name);
                $('#altura').html(data.height);
                $('#peso').html(data.weight);
            },
   
            error: function (msg) {
                console.log(msg);
            }
        });

        return pokemon;
}