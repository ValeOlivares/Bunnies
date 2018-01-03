    $(document).ready(function () {

        // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
        $('#noti_Counter')
            .css({ opacity: 0 })
            .text('7')              // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
            .css({ top: '-10px' })
            .animate({ top: '-2px', opacity: 1 }, 500);

        $('#noti_Button').click(function () {

            // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
            $('#notifications').fadeToggle('fast', 'linear', function () {
                if ($('#notifications').is(':hidden')) {
                    $('#noti_Button').css('background-color', '#2E467C');
                }
                else $('#noti_Button').css('background-color', '#FFF');        // CHANGE BACKGROUND COLOR OF THE BUTTON.
            });

            $('#noti_Counter').fadeOut('slow');                 // HIDE THE COUNTER.

            return false;
        });

        // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
        $(document).click(function () {
            $('#notifications').hide();

            // CHECK IF NOTIFICATION COUNTER IS HIDDEN.
            if ($('#noti_Counter').is(':hidden')) {
                // CHANGE BACKGROUND COLOR OF THE BUTTON.
                $('#noti_Button').css('background-color', '#2E467C');
            }
        });

        $('#notifications').click(function () {
            return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
        });
    });
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