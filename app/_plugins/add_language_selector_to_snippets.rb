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
            code = "<pre>#{super}</pre>"

            # Selector
            selector = "<div class=\"code-snippet__selector language-#{lang}\">
              <nav>
                  <button class=\"selector_switch\" id=\"raw\">raw</button>
                  <button class=\"selector_switch\" id=\"php\">php</button>
                  <button class=\"selector_switch\" id=\"ruby\">ruby</button>
                  <button class=\"selector_switch\" id=\"python\">python</button>
                  <button class=\"selector_switch\" id=\"javascript\">javascript</button>
              </nav>
            </div>"            

            output = "<div class=\"code-snippet #{lang}-code-snippet\">" + selector + "<div class=\"code-snippet__cnt highlight language-#{lang}\">"
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