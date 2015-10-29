module Jekyll
  module Converters
    class Markdown
      # In Jekyll, RedcarpetParser is the OOB lexer configuration
      # shell. We need to monkeypatch it.
      class RedcarpetParser
        # We are using Rouge, so let's piggyback on the lexed data
        # provided to WithRouge#block_code
        module WithRouge
          def block_code(code, lang)
            # TODO: figure out more idiomatic way to do this
            nohide = false

            # Selector
            selector = "<div class=\"code-snippet__selector\">
              <nav>
                  <button class=\"selector_switch\" id=\"raw\">raw</button>
                  <button class=\"selector_switch\" id=\"php\">php</button>
                  <button class=\"selector_switch\" id=\"ruby\">ruby</button>
                  <button class=\"selector_switch\" id=\"python\">python</button>
                  <button class=\"selector_switch\" id=\"javascript\">javascript</button>
              </nav>
            </div>"

            if lang.is_a?(String)
              if lang.include?('noselect')
                lang['noselect'] = ''
                selector = ''
                nohide = true
              end
            end

            code = "<pre>#{super}</pre>"

            lang = lang + 'nohide' if nohide

            # Button
            button = "<button class=\"btn alternative\">copy</button>"         

            output = "<div class=\"code-snippet js-code-snippet language-#{lang}\">" + button + selector + "<div class=\"code-snippet__cnt highlight\">"
            output << add_code_tags(code, lang)
            output << "</div></div>"
          end

          protected
          def rouge_formatter(lexer)
            Rouge::Formatters::HTML.new(:wrap => false)
          end
        end

      end
    end
  end
end