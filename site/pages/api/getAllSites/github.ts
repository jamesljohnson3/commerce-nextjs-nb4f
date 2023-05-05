import { getAuth } from '@clerk/nextjs/server'
import prisma from '../../../utils/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Site = {
  id: number
  name: string
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req)

  let sites: Site[] = []

  if (userId) {
    const orders = await prisma.orders.findMany({
      where: {
        createdBy: userId,
      },
    })

    sites = orders.map((order: { id: any; siteName: any; subdomain: any }) => ({
      id: order.id,
      name: order.siteName,
      url: order.subdomain,
    }))
  }

  console.log(sites)

  res.status(200).json(sites)
}
