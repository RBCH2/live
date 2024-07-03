(function ($) {
  "use strict";
  var support_ticket_datatable = {
    init: function () {
      $("#basic-6, #basic-20, #basic-21").DataTable();
    },
  };
  jQuery(document).ready(function () {
    support_ticket_datatable.init();
  });
})(jQuery);

