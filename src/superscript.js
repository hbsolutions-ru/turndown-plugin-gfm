export default function superscript (turndownService) {
  turndownService.addRule('superscript', {
    filter: ['sup'],
    replacement: function (content) {
      return '<sup>' + content + '</sup>'
    }
  })
}
