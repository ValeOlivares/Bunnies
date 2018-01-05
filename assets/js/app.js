$(document).ready(function () {

})
  // Mostrar el contador de mensajes
  $('#noti_Counter')
  .css({ opacity: 0 })
  .text('7') // valor que se muestra en pantalla, después cambiar a un valor dinamico
  .css({ top: '-10px' })
  .animate({ top: '-2px', opacity: 1 }, 500);

  $('#noti_Button').click(function () {
    // Mostrar o ocultar pantalla despegagle
    $('#notifications').fadeToggle('fast', 'linear', function () {
    if ($('#notifications').is(':hidden')) {
    $('#noti_Button').css('background-color', '#ECE5CE');
    }else $('#noti_Button').css('background-color', '#FFF'); // cambia el fondo del boton
    });
    $('#noti_Counter').fadeOut('slow'); // esconder el contador
    return false;
  });
  // Ocultar pantalla de notificaciones cuando se hace click en la patalla
  $(document).click(function () {
    $('#notifications').hide();
    // chequear contador
    if ($('#noti_Counter').is(':hidden')) {
    // cambir color del fondo del boton.
    $('#noti_Button').css('background-color', '#ECE5CE');
  }
});
  $('#notifications').click(function () {
    return false; // no hacer nada si se hace click dentro de la pantalla de mensajes.
        });
//Area para comentar un post ya realizado
$(function () {
  $('.panel-google-plus > .panel-footer > .input-placeholder, .panel-google-plus > .panel-google-plus-comment > .panel-google-plus-textarea > button[type="reset"]').on('click', function(event) {
    var $panel = $(this).closest('.panel-google-plus');
    $comment = $panel.find('.panel-google-plus-comment');
    $comment.find('.btn:first-child').addClass('disabled');
    $comment.find('textarea').val('');
    $panel.toggleClass('panel-google-plus-show-comment');
    if ($panel.hasClass('panel-google-plus-show-comment')) {
    $comment.find('textarea').focus();
  }
});
  $('.panel-google-plus-comment > .panel-google-plus-textarea > textarea').on('keyup', function(event) {
    var $comment = $(this).closest('.panel-google-plus-comment');
    $comment.find('button[type="submit"]').addClass('disabled');
    if ($(this).val().length >= 1) {
      $comment.find('button[type="submit"]').removeClass('disabled');
    }
  });
});

/*(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGcXZzGc8ZHIuV7Ulf3PG-QG8zU0zntdc",
    authDomain: "login-54f11.firebaseapp.com",
    databaseURL: "https://login-54f11.firebaseio.com",
    projectId: "login-54f11",
    storageBucket: "login-54f11.appspot.com",
    messagingSenderId: "75182368334"
  };

  firebase.initializeApp(config);



const txtEmail = document.getElementById('txtEmail');
const txtpassword = document.getElementById('txtpassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//añadir Evento Login
btnLogin.addEventListener('click' , e => {
 //obtener email y pass
 const email = txtEmail.value;
 const pass = txtpassword.value;
 const auth = firebase.auth();
 //Sign in
 const promise = auth.signInWithEmailAndPassword(email , pass);
 promise.catch(e => console.log(e.message));

});

//sign up
btnSignUp.addEventListener('click' , e => {
 //obtener email y pass
 const email = txtEmail.value;
 const pass = txtpassword.value;
 const auth = firebase.auth();
 //Sign in
 const promise = auth.createUserWithEmailAndPassword(email , pass);
 promise.catch(e => console.log(e.message));
});

//desloguearse
btnLogout.addEventListener('click' , e => {
  firebase.auth().signOut();
});

//añadir un listener en tiempo real
firebase.auth().onAuthStateChanged (firebaseUser=> {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  } else {
    console.log('no logeado');
    btnLogout.classList.add('hide');
  }
});



} ()); */
