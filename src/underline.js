export default function underline (turndownService) {
  turndownService.addRule('underline', {
    filter: ['ins', 'u'],
    replacement: function (content) {
      return '<ins>' + content + '</ins>'
    }
  })
}
