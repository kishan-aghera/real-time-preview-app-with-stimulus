module PostsHelper
  def to_markdown(content)
    return '' if content.blank?

    markdown = Redcarpet::Markdown.new(
      Redcarpet::Render::HTML,
      fenced_code_blocks: true,
      autolink: true
    )
    markdown.render(content).html_safe
  end
end
