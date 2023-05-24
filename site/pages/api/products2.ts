const products2 = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1680770683/nb4f/french_terry_hoodie_set_latte_frylcu.png',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1680770681/nb4f/Solid_Halter_Tie_Cut_Out_Dress_Baby_Blue_haatiu.png',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 2,
    name: 'Multi Print Romper',
    href: 'https://nb4fshop.com/product/multi-print-romper',
    price: '$35',
    imageSrc:
      'https://nb4fshop.com/_next/image?url=https%3A%2F%2Fcdn.schema.io%2Fnb4f%2F645c0798c525cf00114033f9%2F40f22ba7d07918422db71477cdb6d2a1&w=1200&q=85',
    imageAlt:
      'Multi Print Romper',
  },
  {
    id: 2,
    name: 'Print Mesh Bodysuit & Leggings',
    href: 'https://nb4fshop.com/product/print-mesh-bodysuit-leggings',
    price: '$40',
    imageSrc:
      'https://nb4fshop.com/_next/image?url=https%3A%2F%2Fcdn.schema.io%2Fnb4f%2F641617abb317d700126ba00c%2F986223e917025dd1b16a5c5ea4bd625d&w=1200&q=85',
    imageAlt:
      'Print Mesh Bodysuit & Leggings',
  },

  // More products...
]
export default function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: {
        (
          arg0: {
            id: number
            name: string
            href: string
            price: string
            imageSrc: string
            imageAlt: string
          }[]
        ): void
        new (): any
      }
    }
  }
) {
  res.status(200).json(products2)
}
