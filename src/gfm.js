import highlightedCodeBlock from './highlighted-code-block'
import strikethrough from './strikethrough'
import tables from './tables'
import taskListItems from './task-list-items'
import underline from './underline'

function gfm (turndownService) {
  turndownService.use([
    highlightedCodeBlock,
    strikethrough,
    tables,
    taskListItems,
    underline
  ])
}

export { gfm, highlightedCodeBlock, strikethrough, tables, taskListItems, underline }
