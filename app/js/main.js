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
        $(lang).fadeIn(0);
      }
      else {
        $(lang).fadeOut(0);
      }
  });
} 

function updateBodySelectors(show) {
  console.log(show);
  [
    '#ruby',
    '#python',
    '#javascript',
    '#php',
    '#raw'
  ].forEach(function(lang) {
    $('[id=' + lang + ']').toggleClass('active', lang.indexOf(show) > -1);
  });
}

$(document).ready(function() {
    if (!sessionStorage.getItem('current_language')) {
      $('#language_select').val('ruby');
      updateSnippets('ruby');
      sessionStorage.setItem('current_language', 'ruby');
      updateBodySelectors('ruby');
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
      updateBodySelectors($('#language_select :selected').val());
    });

    // If someone switches the language on page, just swap
    // what is visible and not the default value
    $('.selector_switch').click(function(event) {
      updateSnippets(this.innerHTML);
      updateBodySelectors(this.innerHTML);
    });
});