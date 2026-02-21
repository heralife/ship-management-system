import { useMemo } from 'react';

export function useSearch<T>(items: T[], searchFields: (keyof T)[], query: string): T[] {
  return useMemo(() => {
    if (!query.trim()) return items;
    const lowerQuery = query.toLowerCase();
    return items.filter(item =>
      searchFields.some(field => {
        const val = item[field];
        return typeof val === 'string' && val.toLowerCase().includes(lowerQuery);
      })
    );
  }, [items, searchFields, query]);
}
