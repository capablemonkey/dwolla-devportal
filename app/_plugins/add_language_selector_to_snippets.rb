require 'nokogiri' # <3

module Jekyll
  module Converters
    class Markdown

      # In Jekyll, RedcarpetParser is the OOB lexer configuration
      # shell. We need to monkeypatch it.
      class RedcarpetParser
        # We are replacing the convert function with a modified version
        def convert(content)
          @redcarpet_extensions[:fenced_code_blocks] = !@redcarpet_extensions[:no_fenced_code_blocks]
          @renderer.send :include, Redcarpet::Render::SmartyPants if @redcarpet_extensions[:smart]
          markdown = Redcarpet::Markdown.new(@renderer.new(@redcarpet_extensions), @redcarpet_extensions)

          # Use Redcarpet to generate HTML, load into Nokogiri
          html = Nokogiri::HTML(markdown.render(content))

          # Selector
          selector = "<div class=\"code-snippet__selector\">
            <nav>
                <button class=\"active\">json</button>
                <button>raw</button>
                <button>php</button>
                <button>ruby</button>
                <button>python</button>
                <button>javascript</button>
            </nav>
          </div>"

          # Use CSS regex selector to find all code snippets
          html.css('[class*="language-"]').each do |snippet|
            snippet.inner_html = selector + "<div class=\"code-snippet__cnt\">#{snippet.inner_html}</div>"
          end

          html.to_html
        end
      end
    end
  end
end