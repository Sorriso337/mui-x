import { huHU as huHUCore } from '@mui/material/locale';
import { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, Localization } from '../utils/getGridLocalization';

const huHUGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Nincsenek sorok',
  noResultsOverlayLabel: 'Nincs találat.',

  // Density selector toolbar button text
  toolbarDensity: 'Sormagasság',
  toolbarDensityLabel: 'Sormagasság',
  toolbarDensityCompact: 'Kompakt',
  toolbarDensityStandard: 'Normál',
  toolbarDensityComfortable: 'Kényelmes',

  // Columns selector toolbar button text
  toolbarColumns: 'Oszlopok',
  toolbarColumnsLabel: 'Oszlopok kiválasztása',

  // Filters toolbar button text
  toolbarFilters: 'Szűrők',
  toolbarFiltersLabel: 'Szűrők megjelenítése',
  toolbarFiltersTooltipHide: 'Szűrők elrejtése',
  toolbarFiltersTooltipShow: 'Szűrők megjelenítése',
  toolbarFiltersTooltipActive: (count) => `${count} aktív szűrő`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Keresés…',
  toolbarQuickFilterLabel: 'Keresés',
  toolbarQuickFilterDeleteIconLabel: 'Törlés',

  // Export selector toolbar button text
  toolbarExport: 'Exportálás',
  toolbarExportLabel: 'Exportálás',
  toolbarExportCSV: 'Mentés CSV fájlként',
  toolbarExportPrint: 'Nyomtatás',
  toolbarExportExcel: 'Mentés Excel fájlként',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Oszlop keresése',
  columnsPanelTextFieldPlaceholder: 'Oszlop neve',
  columnsPanelDragIconLabel: 'Oszlop átrendezése',
  columnsPanelShowAllButton: 'Összes megjelenítése',
  columnsPanelHideAllButton: 'Összes elrejtése',

  // Filter panel text
  filterPanelAddFilter: 'Szűrő hozzáadása',
  filterPanelRemoveAll: 'Összes törlése',
  filterPanelDeleteIconLabel: 'Törlés',
  filterPanelLogicOperator: 'Logikai operátor',
  filterPanelOperator: 'Operátorok',
  filterPanelOperatorAnd: 'És',
  filterPanelOperatorOr: 'Vagy',
  filterPanelColumns: 'Oszlopok',
  filterPanelInputLabel: 'Érték',
  filterPanelInputPlaceholder: 'Érték szűrése',

  // Filter operators text
  filterOperatorContains: 'tartalmazza:',
  filterOperatorEquals: 'egyenlő ezzel:',
  filterOperatorStartsWith: 'ezzel kezdődik:',
  filterOperatorEndsWith: 'ezzel végződik:',
  filterOperatorIs: 'a következő:',
  filterOperatorNot: 'nem a következő:',
  filterOperatorAfter: 'ezutáni:',
  filterOperatorOnOrAfter: 'ekkori vagy ezutáni:',
  filterOperatorBefore: 'ezelőtti:',
  filterOperatorOnOrBefore: 'ekkori vagy ezelőtti:',
  filterOperatorIsEmpty: 'üres',
  filterOperatorIsNotEmpty: 'nem üres',
  filterOperatorIsAnyOf: 'a következők egyike:',
  // 'filterOperator=': '=',
  // 'filterOperator!=': '!=',
  // 'filterOperator>': '>',
  // 'filterOperator>=': '>=',
  // 'filterOperator<': '<',
  // 'filterOperator<=': '<=',

  // Header filter operators text
  // headerFilterOperatorContains: 'Contains',
  // headerFilterOperatorEquals: 'Equals',
  // headerFilterOperatorStartsWith: 'Starts with',
  // headerFilterOperatorEndsWith: 'Ends with',
  // headerFilterOperatorIs: 'Is',
  // headerFilterOperatorNot: 'Is not',
  // headerFilterOperatorAfter: 'Is after',
  // headerFilterOperatorOnOrAfter: 'Is on or after',
  // headerFilterOperatorBefore: 'Is before',
  // headerFilterOperatorOnOrBefore: 'Is on or before',
  // headerFilterOperatorIsEmpty: 'Is empty',
  // headerFilterOperatorIsNotEmpty: 'Is not empty',
  // headerFilterOperatorIsAnyOf: 'Is any of',
  // 'headerFilterOperator=': 'Equals',
  // 'headerFilterOperator!=': 'Not equals',
  // 'headerFilterOperator>': 'Is greater than',
  // 'headerFilterOperator>=': 'Is greater than or equal to',
  // 'headerFilterOperator<': 'Is less than',
  // 'headerFilterOperator<=': 'Is less than or equal to',

  // Filter values text
  filterValueAny: 'bármilyen',
  filterValueTrue: 'igaz',
  filterValueFalse: 'hamis',

  // Column menu text
  columnMenuLabel: 'Menü',
  columnMenuShowColumns: 'Oszlopok megjelenítése',
  columnMenuManageColumns: 'Oszlopok kezelése',
  columnMenuFilter: 'Szűrők',
  columnMenuHideColumn: 'Elrejtés',
  columnMenuUnsort: 'Sorrend visszaállítása',
  columnMenuSortAsc: 'Növekvő sorrendbe',
  columnMenuSortDesc: 'Csökkenő sorrendbe',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) => `${count} aktív szűrő`,
  columnHeaderFiltersLabel: 'Szűrők megjelenítése',
  columnHeaderSortIconLabel: 'Átrendezés',

  // Rows selected footer text
  footerRowSelected: (count) => `${count.toLocaleString()} sor kiválasztva`,

  // Total row amount footer text
  footerTotalRows: 'Összesen:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} (összesen: ${totalCount.toLocaleString()})`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Jelölőnégyzetes kijelölés',
  checkboxSelectionSelectAllRows: 'Minden sor kijelölése',
  checkboxSelectionUnselectAllRows: 'Minden sor kijelölésének törlése',
  checkboxSelectionSelectRow: 'Sor kijelölése',
  checkboxSelectionUnselectRow: 'Sor kijelölésének törlése',

  // Boolean cell text
  booleanCellTrueLabel: 'igen',
  booleanCellFalseLabel: 'nem',

  // Actions cell more text
  actionsCellMore: 'további',

  // Column pinning text
  pinToLeft: 'Rögzítés balra',
  pinToRight: 'Rögzítés jobbra',
  unpin: 'Rögzítés törlése',

  // Tree Data
  treeDataGroupingHeaderName: 'Csoport',
  treeDataExpand: 'gyermekek megjelenítése',
  treeDataCollapse: 'gyermekek elrejtése',

  // Grouping columns
  groupingColumnHeaderName: 'Csoportosítás',
  groupColumn: (name) => `Csoportosítás ${name} szerint`,
  unGroupColumn: (name) => `${name} szerinti csoportosítás törlése`,

  // Master/detail
  detailPanelToggle: 'Részletek panel váltása',
  expandDetailPanel: 'Kibontás',
  collapseDetailPanel: 'Összecsukás',

  // Row reordering text
  rowReorderingHeaderName: 'Sorok újrarendezése',

  // Aggregation
  aggregationMenuItemHeader: 'Összesítés',
  aggregationFunctionLabelSum: 'Összeg',
  aggregationFunctionLabelAvg: 'Átlag',
  aggregationFunctionLabelMin: 'Minimum',
  aggregationFunctionLabelMax: 'Maximum',
  aggregationFunctionLabelSize: 'Darabszám',
};

export const huHU: Localization = getGridLocalization(huHUGrid, huHUCore);
