import { NextApiRequest, NextApiResponse } from 'next'
import { requireSession } from '@clerk/clerk-sdk-node'

import prisma from '../../../../utils/prisma'

export default requireSession(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // @ts-ignore
    const userId = req.session.userId
    console.log(req.body.siteId.toString())
    const siteData = await prisma.wishlist.update({
      data: {
        ogImageUrl: req.body.ogImageUrl,
        siteName: req.body.siteName,
        siteDesc: req.body.siteDesc,
      },
      where: {
        id: req.body.siteId.toString(),
      },
    })

    console.log('From updating file........')
    console.log(siteData)

    res.json(siteData)
  }
)
