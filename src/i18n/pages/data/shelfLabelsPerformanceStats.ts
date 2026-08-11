export interface ShelfLabelsPerformanceStat {
  value: string;
  label: string;
  compactValue?: boolean;
  valueSuffixSmall?: string;
}

export const shelfLabelsPerformanceStats: ShelfLabelsPerformanceStat[] = [
  {
    value: '95%',
    label: 'Less time spent replacing\npaper labels',
  },
  {
    value: 'Instant',
    label: 'Store-wide\nprice updates',
    compactValue: true,
  },
  {
    value: '10+',
    valueSuffixSmall: '',
    label: 'Years\nBattery life',
  },
  {
    value: 'Thousands',
    label: 'Labels managed\nfrom one dashboard',
    compactValue: true,
  },
];
