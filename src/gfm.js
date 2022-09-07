import highlightedCodeBlock from './highlighted-code-block'
import strikethrough from './strikethrough'
import subscript from './subscript'
import superscript from './superscript'
import tables from './tables'
import taskListItems from './task-list-items'
import underline from './underline'

function gfm (turndownService) {
  turndownService.use([
    highlightedCodeBlock,
    strikethrough,
    subscript,
    superscript,
    tables,
    taskListItems,
    underline
  ])
}

export { gfm, highlightedCodeBlock, strikethrough, subscript, superscript, tables, taskListItems, underline }
