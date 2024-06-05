import gridFunctions from '@/composables/gridFunctions';

export const matchAllPickColumns = [
  {
    title: 'Match ID',
    field: 'match_id',
    resizable: false,
    headerFilter: false,
    width: '12%',
    formatter: gridFunctions.matchIdRenderer,
  },
  {
    title: 'Game mode',
    field: 'lobby_type',
    resizable: false,
    headerFilter: false,
    width: '12%',
  },
  {
    title: 'Result',
    field: 'radiant_win',
    resizable: false,
    headerFilter: false,
    width: '12%',
    formatter: gridFunctions.cellResultRenderer,
  },
  {
    title: 'Duration',
    field: 'duration',
    resizable: false,
    headerFilter: false,
    width: '12%',
    formatter: gridFunctions.durationRenderer,
  },
  {
    title: '<div class="green-default">Radiant team</div>',
    field: 'radiant_team',
    resizable: false,
    headerFilter: false,
    width: '26%',
    formatter: gridFunctions.fiveHeroCellRenderer,
  },
  {
    title: '<div class="red-default">Dire team</div>',
    field: 'dire_team',
    resizable: false,
    headerFilter: false,
    width: '26%',
    formatter: gridFunctions.fiveHeroCellRenderer,
  }
]