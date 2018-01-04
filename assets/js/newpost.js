$(document).ready(function () {

})
var idPost = 0;
function newPost(){
  var title = $('#newTitle').val(); //variable para rescatar el contenido del titulo ingresado por el usuario
  var urlImg = $('#imgUrl').val(); //variable para rescatar la url de la imagen  ingresada por el usuario
  var opinion = $('#newOpinion').val(); //variable para rescatar la opinion del usuario
  //creando el contenedor de mi nuevo post
  $('#my-opinion').append("<div id='post_" + idPost + "' class='post col-xs-12 col-sm-offset-1 col-sm-5'>" +

    "<div class='panel panel-default  panel-google-plus'>" +
    "<div class='dropdown'>" +
    "<span class='dropdown-toggle' type='button' data-toggle='dropdown'>" +
    "<span class='fa fa-bars'>" +
    "</span>" +
    "</span>" +
    "<ul class='dropdown-menu' role='menu'>" +
    "<li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Compartir</a></li>" +
    "<li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Editar</a></li>" +
    "<li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Eliminar</a></li>" +
    "</ul>" + "</div>" + //cierre dropdown
    "<div class='panel-heading'>" +
    "<img class='logo' src='assets/images/bunny.jpg'>" +
    "<h3>Bunnie!</h3>" +
    "<h5><span>3h</span> </h5> " +
    "</div>" + //cierre panel heading
    "<div><h3 class='panel-title'><strong>" + title + "</strong></h3>" +
    "</div>" + //cierre panel title
    "<div class = 'panel-body'>" +
    "<a href='#' class='thumbnail'>" +
    "<img src='" + urlImg + "' alt='...'>" +
    "</a>" +
    "<div class ='panel-opinion'>" + opinion + "</div>" +
    "</div>" + //cierre panel body
    "<div class='panel-footer'>" +
    "<button type='button' class='  btn btn-default  '><span class='fa fa-paw'></button>" +
    "<button type='button' class='  btn btn-default  '>" +
    "<span class='  glyphicon glyphicon-share-alt  '></span> " +
    "</button>" +
    "<div class='input-placeholder'>Add a comment...</div>" +
    "</div>" + //cierre panel footer
    "<div class='panel-google-plus-comment'>" +
    "<img class='img-circle' src'https://lh3.googleusercontent.com/uFp_tsTJboUY7kue5XAsGA=s46' alt='User Image' />" +
    "<div class='panel-google-plus-textarea'>" +
    "<textarea rows='4'></textarea>" +
    "<button type='submit' class='  btn btn-success disabled  '>Post comment</button>" +
    "<button type='reset' class='btn btn-default'>Cancel</button>" +
    "</div>" + //cierre panel-google-plus-textarea
    "<div class='clearfix'></div>" +
    "</div>" + //cierre panel-google-plus-comment



    "</div>" + //panel panel-default
    "</div>" //cierre post_


    /*"<ul class='dropdown-menu' role='menu'>" +
    "<li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Compartir</a></li>" +
    "<li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Editar</a></li>" +
    "<li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Eliminar</a></li>" +
    "</ul>" +*/



  );


};
