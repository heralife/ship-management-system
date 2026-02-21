import { useState, useMemo } from 'react';
import { ITEMS_PER_PAGE } from '../utils/constants';

export function usePagination<T>(items: T[], perPage = ITEMS_PER_PAGE) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / perPage);
  const paginatedItems = useMemo(
    () => items.slice((page - 1) * perPage, page * perPage),
    [items, page, perPage]
  );
  return { page, setPage, totalPages, paginatedItems, totalItems: items.length };
}
