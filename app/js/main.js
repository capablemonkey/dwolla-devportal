$(document).ready(function() {

    // Update value of language selector on change
    $('#language_select').change(function () {
      sessionStorage.setItem('current_language', $('#language_select :selected').val());
    });
});