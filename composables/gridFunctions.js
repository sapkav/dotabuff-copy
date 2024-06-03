export default {
  imgItemCellRenderer: (cell) => {
    const src = `${getUrl()}/assets/img/items/${cell._cell.row.data.img}`;
    return `<div style="display: flex; color: #9dcf4c; align-items: center">
      <img src="${src}" width="33" height="24" style="margin-right: 10px">${cell._cell.value}
    </div>`
  },
  imgHeroCellRenderer: (cell) => {
    const src = `${getUrl()}/_nuxt/assets/img/heroes/${cell._cell.row.data.img}`;
    return `<div style="display: flex; color: #9dcf4c; align-items: center">
      <img src="${src}" width="42" height="24" style="margin-right: 10px">
      <div >
        <div class="leading-[16px]">${cell._cell.value}</div>
        <div class="leading-[16px] text-gray-400 text-xs">15 hours ago</div>
      </div>
    </div>`
  },
  matchesCellRenderer: (cell) => {
    return `<div style="display: grid">
        <div class="leading-[16px] mt-1">${cell._cell.value}</div>
        <div style="background-color: red; width: ${(cell._cell.value / cell._cell.row.data.max_match) * 100}%; height: 4px; margin-top: 3px"></div>
      </div>
    </div>`
  },
  winrateCellRenderer: (cell) => {
    const maxWin = cell._cell.table.rowManager.rows[0].data.max_win_rate;
    return `<div style="display: grid">
        <div class="leading-[16px] mt-1">${cell._cell.value}</div>
        <div style="background-color: #a9cf54; width: ${(+cell._cell.value/+maxWin) * 100}%; height: 4px; margin-top: 3px"></div>
      </div>
    </div>`
  },
  kdaCellRenderer: (cell) => {
    const maxKda = cell._cell.table.rowManager.rows[0].data.max_kda;
    return `<div style="display: grid">
        <div class="leading-[16px] mt-1">${cell._cell.value}</div>
        <div style="background-color: #f26522; width: ${(+cell._cell.value/+maxKda) * 100}%; height: 4px; margin-top: 3px"></div>
      </div>
    </div>`
  },
  matchKdaCellRenderer: (cell) => {
    const maxKda = cell._cell.table.rowManager.rows[0].data.max_kda;
    return `<div style="display: grid">
        <div class="leading-[16px] mt-1">${cell._cell.value}</div>
        <div style="background-color: #f26522; width: ${(+cell._cell.value/+maxKda) * 100}%; height: 4px; margin-top: 3px"></div>
      </div>
    </div>`
  }
}

function getUrl() {
  return location.origin;
}