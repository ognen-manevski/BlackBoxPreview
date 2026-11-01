export interface ShelfLabelsPerformanceStat {
  value: string;
  label: string;
  compactValue?: boolean;
  valueSuffixSmall?: string;
}

export const shelfLabelsPerformanceStats: ShelfLabelsPerformanceStat[] = [
  {
    value: 'Save time',
    label: 'Automate price updates',
    compactValue: true,
  },
  {
    value: 'Accurate pricing',
    label: 'Consistent prices at the shelf and checkout',
    compactValue: true,
  },
  {
    value: 'Long battery life',
    label: 'Years of operation without replacing the battery',
    compactValue: true,
  },
  {
    value: 'One platform',
    label: 'Manage all labels from one place',
    compactValue: true,
  },
];

export const macedonianShelfLabelsPerformanceStats: ShelfLabelsPerformanceStat[] = [
  { value: 'Заштеда на време', label: 'Автоматизирајте ја промената на цените', compactValue: true },
  { value: 'Точни цени', label: 'Усогласени цени на полицата и на касата', compactValue: true },
  { value: 'Долг век', label: 'Години работа без замена на батеријата', compactValue: true },
  { value: 'Една платформа', label: 'Управувајте со сите етикети од едно место', compactValue: true },
];
