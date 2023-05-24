const products2 = [
  {
    id: 1,
    name: 'Seamless Jacket Set',
    href: 'https://nb4fshop.com/product/seamless-jacket-set',
    price: '$30',
    imageSrc:
      'https://nb4fshop.com/_next/image?url=https%3A%2F%2Fcdn.schema.io%2Fnb4f%2F64543c49b83f5d0012cf7585%2F4848d12028655d09aa59f90005d244a0&w=1200&q=85',
    imageAlt:
      'Seamless Jacket Set',
  },
  {
    id: 2,
    name: 'Two Tone Pattern Top & Shorts Set ',
    href: 'https://nb4fshop.com/product/two-tone-pattern-top-shorts-set',
    price: '$25',
    imageSrc:
      'https://nb4fshop.com/_next/image?url=https%3A%2F%2Fcdn.schema.io%2Fnb4f%2F64543b1b7800ef0012af5099%2Fab1d421c893973f6077382f81282b42c&w=1200&q=85',
    imageAlt:
      'Two Tone Pattern Top & Shorts Set      ',
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
