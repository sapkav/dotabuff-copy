import { objHero } from '@/composables/dotaObjects';

export default {
  imgItemCellRenderer: (cell) => {
    const src = `${getUrl()}/_nuxt/assets/img/items/${cell._cell.row.data.img}`;
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
        <div class="leading-[16px] text-gray-400 text-xs">${timeAgoCalc(cell._cell.row.data.start_time)}</div>
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
    const obj = cell._cell.row.data;
    const sum = obj.kills + obj.deaths + obj.assists;
    return `<div style="display: grid">
        <div class="leading-[16px] mt-1 text-xs">${obj.kills + '/' + obj.deaths + '/' + obj.assists}</div>
        <div style="width: 100%; height: 4px; margin-top: 3px; display: flex">
          <div style="background-color: red; width: ${(obj.kills/sum) * 100}%; height: 4px"></div>
          <div style="background-color: white; width: ${(obj.deaths/sum) * 100}%; height: 4px"></div>
          <div style="background-color: #a9cf54; width: ${(obj.assists/sum) * 100}%; height: 4px"></div>
        </div>
      </div>
    </div>`
  },
  durationRenderer: (cell) => {
    const maxDuration = cell._cell.table.rowManager.rows[0].data.max_duration;
    return `<div style="display: grid">
        <div class="leading-[16px] mt-1">${calcTime(cell._cell.value)}</div>
        <div style="background-color: white; width: ${(+cell._cell.value/+maxDuration) * 100}%; height: 4px; margin-top: 3px"></div>
      </div>
    </div>`
  },
  fiveHeroCellRenderer: (cell) => {
    let final = '<div class="pt-1 flex">'
    for (let i = 0; i < 5; i++) {
      const src = `${getUrl()}/_nuxt/assets/img/heroes/${objHero[cell._cell.value[i]].name}.jpg`;
      final += `<img src="${src}" title="${objHero[cell._cell.value[i]].localized_name}" width="42" height="24" style="margin-right: 5px">`
    }
    final += '</div>'
    return final;
  },
  matchIdRenderer: (cell) => {
    return `<div class="text-xs leading-[16px]">
      <div class="green-default text-sm leading-[16px]">${cell._cell.value}</div>
      <div class="leading-[16px]">${timeAgoCalc(cell._cell.row.data.start_time)}</div>
    </div>`
  },
  cellResultRenderer: (cell) => {
    let fin = '<div class="text-xs leading-[16px]">';
    if (cell._cell.value) {
      fin += `<div class="green-default text-sm leading-[16px]">Radiant Victory</div>`;
    } else {
      fin += `<div class="green-default text-sm leading-[16px]">Dire Victory</div>`;
    }
    fin += `<div class="leading-[16px]">${23}</div>
    </div>`;
    return fin;
  },
}


function getUrl() {
  return location.origin;
};

function calcTime(val) {
  return `${Math.floor(val/60)}:${('0' + val%60).slice(-2)}`;
};

function timeAgoCalc(time) {
  const timeDiff = +String(new Date().getTime()).slice(0, 10) - time;
  if (timeDiff < 3600) {
    return `${timeDiff & 3600} minutes ago`;
  } else if (timeDiff < 86400) {
    return `${Math.floor(timeDiff / 3600)} hours ago`;
  } else {
    return `${Math.ceil(timeDiff / 86400)} days ago`;
  }
};