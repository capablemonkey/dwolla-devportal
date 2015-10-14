function updateSnippets(show) {
  [
    '.language-ruby',
    '.language-python',
    '.language-javascript',
    '.language-java',
    '.language-php',
    '.language-raw'
  ].forEach(function(lang) {
      if (lang.indexOf(show) > -1) {
        $(lang).fadeIn();
      }
      else {
        $(lang).fadeOut();
      }
  });
} 

$(document).ready(function() {
    if (!sessionStorage.getItem('current_language')) {
      $('#language_select').val('ruby');
      updateSnippets('ruby');
    }
    else {
      var current_language = sessionStorage.getItem('current_language');
      updateSnippets(current_language);
      $('#language_select').val(current_language);
    }

    // Update value of language selector on change
    $('#language_select').change(function () {
      // Fade old language out, fade new language in
      sessionStorage.setItem('current_language', $('#language_select :selected').val());
      updateSnippets($('#language_select :selected').val());
    });
});