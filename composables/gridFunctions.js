export default {
  imgItemCellRenderer: (cell) => {
    const src = `_nuxt/assets/img/items/${cell._cell.row.data.img}`;
    return `<div style="display: flex; color: #9dcf4c; align-items: center">
      <img src="${src}" width="33" height="24" style="margin-right: 10px">${cell._cell.value}
    </div>`
  },
}