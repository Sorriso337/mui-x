import { trTR as trTRCore } from '@mui/material/locale';
import { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, Localization } from '../utils/getGridLocalization';

const trTRGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Satır yok',
  noResultsOverlayLabel: 'Sonuç bulunamadı.',

  // Density selector toolbar button text
  toolbarDensity: 'Yoğunluk',
  toolbarDensityLabel: 'Yoğunluk',
  toolbarDensityCompact: 'Sıkı',
  toolbarDensityStandard: 'Standart',
  toolbarDensityComfortable: 'Rahat',

  // Columns selector toolbar button text
  toolbarColumns: 'Sütunlar',
  toolbarColumnsLabel: 'Sütun seç',

  // Filters toolbar button text
  toolbarFilters: 'Filtreler',
  toolbarFiltersLabel: 'Filtreleri göster',
  toolbarFiltersTooltipHide: 'Filtreleri gizle',
  toolbarFiltersTooltipShow: 'Filtreleri göster',
  toolbarFiltersTooltipActive: (count) => `${count} aktif filtre`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Ara…',
  toolbarQuickFilterLabel: 'Ara',
  toolbarQuickFilterDeleteIconLabel: 'Temizle',

  // Export selector toolbar button text
  toolbarExport: 'Dışa aktar',
  toolbarExportLabel: 'Dışa aktar',
  toolbarExportCSV: 'CSV olarak aktar',
  toolbarExportPrint: 'Yazdır',
  toolbarExportExcel: 'Excel olarak aktar',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Sütun ara',
  columnsPanelTextFieldPlaceholder: 'Sütun adı',
  columnsPanelDragIconLabel: 'Sütunları yeniden sırala',
  columnsPanelShowAllButton: 'Hepsini göster',
  columnsPanelHideAllButton: 'Hepsini gizle',

  // Filter panel text
  filterPanelAddFilter: 'Filtre Ekle',
  filterPanelRemoveAll: 'Hepsini kaldır',
  filterPanelDeleteIconLabel: 'Kaldır',
  filterPanelLogicOperator: 'Mantıksal operatörler',
  filterPanelOperator: 'Operatör',
  filterPanelOperatorAnd: 'Ve',
  filterPanelOperatorOr: 'Veya',
  filterPanelColumns: 'Sütunlar',
  filterPanelInputLabel: 'Değer',
  filterPanelInputPlaceholder: 'Filtre değeri',

  // Filter operators text
  filterOperatorContains: 'içerir',
  filterOperatorEquals: 'eşittir',
  filterOperatorStartsWith: 'ile başlar',
  filterOperatorEndsWith: 'ile biter',
  filterOperatorIs: 'eşittir',
  filterOperatorNot: 'eşit değildir',
  filterOperatorAfter: 'büyük',
  filterOperatorOnOrAfter: 'büyük eşit',
  filterOperatorBefore: 'küçük',
  filterOperatorOnOrBefore: 'küçük eşit',
  filterOperatorIsEmpty: 'boş',
  filterOperatorIsNotEmpty: 'dolu',
  filterOperatorIsAnyOf: 'herhangi biri',
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
  filterValueAny: 'herhangi',
  filterValueTrue: 'doğru',
  filterValueFalse: 'yanlış',

  // Column menu text
  columnMenuLabel: 'Menü',
  columnMenuShowColumns: 'Sütunları göster',
  columnMenuManageColumns: 'Sütunları yönet',
  columnMenuFilter: 'Filtre uygula',
  columnMenuHideColumn: 'Gizle',
  columnMenuUnsort: 'Sıralama',
  columnMenuSortAsc: 'Sırala - Artan',
  columnMenuSortDesc: 'Sırala - Azalan',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) => `${count} filtre aktif`,
  columnHeaderFiltersLabel: 'Filtreleri göster',
  columnHeaderSortIconLabel: 'Sırala',

  // Rows selected footer text
  footerRowSelected: (count) => `${count.toLocaleString()} satır seçildi`,

  // Total row amount footer text
  footerTotalRows: 'Toplam Satır:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} / ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Seçim',
  checkboxSelectionSelectAllRows: 'Tüm satırları seç',
  checkboxSelectionUnselectAllRows: 'Tüm satırların seçimini kaldır',
  checkboxSelectionSelectRow: 'Satırı seç',
  checkboxSelectionUnselectRow: 'Satır seçimini bırak',

  // Boolean cell text
  booleanCellTrueLabel: 'Evet',
  booleanCellFalseLabel: 'Hayır',

  // Actions cell more text
  actionsCellMore: 'daha fazla',

  // Column pinning text
  pinToLeft: 'Sola sabitle',
  pinToRight: 'Sağa sabitle',
  unpin: 'Sabitlemeyi kaldır',

  // Tree Data
  treeDataGroupingHeaderName: 'Grup',
  treeDataExpand: 'göster',
  treeDataCollapse: 'gizle',

  // Grouping columns
  groupingColumnHeaderName: 'Grup',
  groupColumn: (name) => `${name} için grupla`,
  unGroupColumn: (name) => `${name} için gruplamayı kaldır`,

  // Master/detail
  detailPanelToggle: 'Detay görünümüne geçiş',
  expandDetailPanel: 'Genişlet',
  collapseDetailPanel: 'Gizle',

  // Row reordering text
  rowReorderingHeaderName: 'Satırı yeniden sırala',

  // Aggregation
  aggregationMenuItemHeader: 'Toplama',
  aggregationFunctionLabelSum: 'top',
  aggregationFunctionLabelAvg: 'ort',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'maks',
  aggregationFunctionLabelSize: 'boyut',
};

export const trTR: Localization = getGridLocalization(trTRGrid, trTRCore);
