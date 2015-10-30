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
  $('.selector_switch').toggleClass('active', false);
  $('.selector_switch').each(function(i, element) {
    $(element).toggleClass('active', element.id.indexOf(show) > -1);
  });
}

$(document).ready(function() {
    if (!sessionStorage.getItem('current_language')) {
      $('.language_select').val('ruby');
      updateSnippets('ruby');
      sessionStorage.setItem('current_language', 'ruby');
      updateBodySelectors('ruby');
    }
    else {
      var current_language = sessionStorage.getItem('current_language');
      updateSnippets(current_language);
      $('.language_select').val(current_language);
      updateBodySelectors(current_language);
    }

    // Update value of language selector on change
    $('.language_select').change(function () {
      // set both top tier nav (mobile, desktop) to same lang
      $('.language_select').val($(this).val());
      sessionStorage.setItem('current_language', $(this).val());
      updateSnippets($(this).val());
      updateBodySelectors($(this).val());
    });

    // If someone switches the language on page, just swap
    // what is visible and not the default value
    $('.selector_switch').click(function(event) {
      updateSnippets(this.id);
      updateBodySelectors(this.id);
      // change global language selector as well:
      $('.language_select').val(this.id);
      sessionStorage.setItem('current_language', $('.language_select :selected').val());
    });
});