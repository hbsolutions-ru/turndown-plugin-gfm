export default function subscript (turndownService) {
  turndownService.addRule('subscript', {
    filter: ['sub'],
    replacement: function (content) {
      return '<sub>' + content + '</sub>'
    }
  })
}
