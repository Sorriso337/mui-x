import { GridRowId, GridColumnHeaderParams, GridValidRowModel } from '@mui/x-data-grid';
import type {
  GridRowScrollEndParams,
  GridRowOrderChangeParams,
  GridFetchRowsParams,
} from '../models';
import type {
  GridColumnPinningInternalCache,
  GridPinnedColumns,
} from '../hooks/features/columnPinning/gridColumnPinningInterface';
import type { GridCanBeReorderedPreProcessingContext } from '../hooks/features/columnReorder/columnReorderInterfaces';
import { GridRowPinningInternalCache } from '../hooks/features/rowPinning/gridRowPinningInterface';

export interface GridColDefPro<R extends GridValidRowModel = any, V = any, F = V> {
  /**
   * Allows to render a component in the column header filter cell.
   * @template R, V, F
   * @param {GridColumnHeaderParams<R, V, F>} params Object containing parameters for the renderer.
   * @returns {React.ReactNode} The element to be rendered.
   */
  renderHeaderFilter?: (params: GridColumnHeaderParams<R, V, F>) => React.ReactNode;
}

export interface GridControlledStateEventLookupPro {
  /**
   * Fired when the open detail panels are changed.
   * @ignore - do not document.
   */
  detailPanelsExpandedRowIdsChange: { params: GridRowId[] };
  /**
   * Fired when the pinned columns is changed.
   * @ignore - do not document.
   */
  pinnedColumnsChange: { params: GridPinnedColumns };
}

export interface GridEventLookupPro {
  /**
   * Fired when scrolling to the bottom of the grid viewport.
   */
  rowsScrollEnd: { params: GridRowScrollEndParams };
  /**
   * Fired when the user ends reordering a row.
   */
  rowOrderChange: { params: GridRowOrderChangeParams };
  /**
   * Fired when a new batch of rows is requested to be loaded. Called with a [[GridFetchRowsParams]] object.
   */
  fetchRows: { params: GridFetchRowsParams };
}

export interface GridPipeProcessingLookupPro {
  canBeReordered: {
    value: boolean;
    context: GridCanBeReorderedPreProcessingContext;
  };
}

export interface GridApiCachesPro {
  columnPinning: GridColumnPinningInternalCache;
  pinnedRows: GridRowPinningInternalCache;
}

declare module '@mui/x-data-grid' {
  interface GridEventLookup extends GridEventLookupPro {}

  interface GridControlledStateEventLookup extends GridControlledStateEventLookupPro {}

  interface GridPipeProcessingLookup extends GridPipeProcessingLookupPro {}
}

declare module '@mui/x-data-grid/internals' {
  interface GridApiCaches extends GridApiCachesPro {}

  interface GridBaseColDef<R, V, F> extends GridColDefPro<R, V, F> {}
}
