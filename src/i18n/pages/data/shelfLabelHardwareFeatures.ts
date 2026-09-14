import batteriesImage from '../../../assets/images/services/shelf-labels/product-details/batteries.jpg';
import colorsImage from '../../../assets/images/services/shelf-labels/product-details/colors.jpg';
import displaysImage from '../../../assets/images/services/shelf-labels/product-details/displays.jpg';
import durableImage from '../../../assets/images/services/shelf-labels/product-details/durable.jpg';
import freezerImage from '../../../assets/images/services/shelf-labels/product-details/freezer.jpg';
import multipleSizesImage from '../../../assets/images/services/shelf-labels/product-details/multiple-sizes.jpg';

export interface ShelfLabelHardwareFeature {
  counter: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const shelfLabelHardwareFeatures: ShelfLabelHardwareFeature[] = [
  {
    counter: '01',
    title: 'Ultra Low Power',
    description:
      'Advanced e-ink technology consumes power only when content changes, allowing each label to operate for years on a single battery. This dramatically reduces maintenance while keeping your shelves continuously updated.',
    imageSrc: batteriesImage.src,
    imageAlt: 'Electronic shelf label battery for ultra low power operation',
  },
  {
    counter: '02',
    title: 'Crisp E-Ink Displays',
    description:
      'High-contrast e-ink screens provide exceptional readability from every angle, even under bright retail lighting. Customers can quickly view pricing and product information without glare or unnecessary eye strain.',
    imageSrc: displaysImage.src,
    imageAlt: 'Electronic shelf label with crisp e-ink display',
  },
  {
    counter: '03',
    title: 'Full Color Options',
    description:
      'Choose from black, white, and red displays or vibrant full-color models to highlight promotions, seasonal offers, product categories, and important customer information with greater visual impact.',
    imageSrc: colorsImage.src,
    imageAlt: 'Electronic shelf labels showing full color display options',
  },
  {
    counter: '04',
    title: 'Refrigerator & Freezer Ready',
    description:
      'Built to perform in refrigerated cabinets and cold storage environments, our labels maintain excellent visibility and reliable operation even in low-temperature retail conditions.',
    imageSrc: freezerImage.src,
    imageAlt: 'Electronic shelf label in a refrigerated retail environment',
  },
  {
    counter: '05',
    title: 'Durable Construction',
    description:
      'Designed for busy retail environments, each label is built with durable materials that withstand daily handling, cleaning, and long-term operation while maintaining a professional appearance.',
    imageSrc: durableImage.src,
    imageAlt: 'Durable electronic shelf label hardware construction detail',
  },
  {
    counter: '06',
    title: 'Multiple Sizes',
    description:
      'From compact shelf-edge labels to larger promotional displays, a wide range of sizes ensures every product category receives clear, consistent, and appropriately sized pricing information.',
    imageSrc: multipleSizesImage.src,
    imageAlt: 'Electronic shelf labels available in multiple size options',
  },
];

export const macedonianShelfLabelHardwareFeatures: ShelfLabelHardwareFeature[] = [
  { counter: '01', title: 'Ултраниска потрошувачка', description: 'Напредната e-ink технологија троши енергија само кога се менува содржината, овозможувајќи секоја етикета да работи со години со една батерија. Така значително се намалува одржувањето, а полиците се секогаш ажурни.', imageSrc: batteriesImage.src, imageAlt: 'Батерија за електронска ценовна етикета со ултраниска потрошувачка' },
  { counter: '02', title: 'Јасни e-ink дисплеи', description: 'E-ink екраните со висок контраст нудат одлична читливост од секој агол, дури и под силно осветлување. Купувачите брзо ги читаат цените и информациите без одблесок и замор.', imageSrc: displaysImage.src, imageAlt: 'Електронска ценовна етикета со јасен e-ink дисплеј' },
  { counter: '03', title: 'Опции во полна боја', description: 'Изберете црни, бели и црвени дисплеи или живописни модели во полна боја за поголем визуелен ефект на промоциите, сезонските понуди, категориите и важните информации.', imageSrc: colorsImage.src, imageAlt: 'Електронски ценовни етикети со опции во полна боја' },
  { counter: '04', title: 'Подготвени за ладилници и замрзнувачи', description: 'Изработени за работа во разладни витрини и ладни складишта, нашите етикети одржуваат одлична видливост и сигурна работа и при ниски температури.', imageSrc: freezerImage.src, imageAlt: 'Електронска ценовна етикета во разладна витрина' },
  { counter: '05', title: 'Издржлива изработка', description: 'Наменета за динамични малопродажни средини, секоја етикета е изработена од издржливи материјали што поднесуваат секојдневно ракување, чистење и долготрајна работа.', imageSrc: durableImage.src, imageAlt: 'Детал од издржливата изработка на електронска ценовна етикета' },
  { counter: '06', title: 'Повеќе големини', description: 'Од компактни етикети за работ на полица до поголеми промотивни дисплеи, широкиот избор на големини обезбедува јасни, доследни и соодветно димензионирани информации за секоја категорија.', imageSrc: multipleSizesImage.src, imageAlt: 'Електронски ценовни етикети во повеќе големини' },
];

export const hardwareImageMetadata = new Map([batteriesImage, colorsImage, displaysImage, durableImage, freezerImage, multipleSizesImage].map(image => [image.src, image]));
