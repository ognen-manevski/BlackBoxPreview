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
