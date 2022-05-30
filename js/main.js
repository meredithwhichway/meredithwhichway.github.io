$(document).ready(function () {
 $('.collapse')
     .on('shown.bs.collapse', function() {
         $(this)
             .parent()
             .find(".fa-caret-down")
             .removeClass("fa-caret-down")
             .addClass("fa-caret-up");
         })
     .on('hidden.bs.collapse', function() {
         $(this)
             .parent()
             .find(".fa-caret-up")
             .removeClass("fa-caret-up")
             .addClass("fa-caret-down");
         });
     });

