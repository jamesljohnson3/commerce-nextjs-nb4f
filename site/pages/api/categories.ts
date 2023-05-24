import { NextApiRequest, NextApiResponse } from 'next';

interface Category {
  id: string;
  name: string;
  featured: {
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  }[];
  sections: {
    id: string;
    name: string;
    items: {
      name: string;
      href: string;
    }[];
  }[];
}

interface Page {
  name: string;
  href: string;
}

interface NavigationData {
  categories: Category[];
  pages: Page[];
}

const navigation: NavigationData = {
  categories: [
      {
        id: 'women',
        name: 'Womens',
        featured: [
          {
            name: 'New Arrivals',
            href: 'https://nb4fshop.com/search/womens',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt:
              'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: 'https://nb4fshop.com/search/womens',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt:
              'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Dresses', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Denim', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: 'https://nb4fshop.com/search/womens' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Mens',
        featured: [
          {
            name: 'New Arrivals',
            href: 'https://nb4fshop.com/search/mens',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt:
              'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            href: 'https://nb4fshop.com/search/mens',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: 'https://nb4fshop.com/search/mens' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Big & Tall', href: 'https://nb4fshop.com/search/bt' },
      { name: 'Dresses', href: 'https://nb4fshop.com/search/womens-dresses' },
      { name: 'Rompers', href: 'https://nb4fshop.com/search/rompers' },
      { name: 'Plus Size', href: 'https://nb4fshop.com/search/plus-size' },
      { name: 'Jeans', href: 'https://nb4fshop.com/search/denim-jeans-set' },
    ],
  }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NavigationData[]>
) {
  res.status(200).json(navigation);
  res.json(navigation.categories);

}
