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

export const macedonianShelfLabelsPerformanceStats: ShelfLabelsPerformanceStat[] = [
  { value: '95%', label: 'Помалку време за замена на\nхартиени етикети' },
  { value: 'Веднаш', label: 'Ажурирање на цените\nво целата продавница', compactValue: true },
  { value: '10+', valueSuffixSmall: '', label: 'Години\nтраење на батеријата' },
  { value: 'Илјадници', label: 'Етикети управувани\nод еден dashboard', compactValue: true },
];
