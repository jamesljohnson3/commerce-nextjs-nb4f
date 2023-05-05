import React, { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { useTheme } from 'next-themes'
import { AuthProvider } from '@descope/react-sdk'
import { useRouter } from 'next/router'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs'

import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'
import { builder } from '@builder.io/react'

builder.init('ba26b1f01a7a45cdbbff41a67447be22')
const privatePages = ['/dashboard']

const projectId = process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  // Get the pathname
  const { pathname } = useRouter()

  // Check if the current route matches a public page
  const isPrivatePage = privatePages.includes(pathname)
  return (
    <>
      <ClerkProvider {...pageProps}>
        {isPrivatePage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedOut>
              <AuthProvider projectId={projectId || 'DEFAULT_PROJECT_ID'}>
                <div>
                  <Head />
                  <ManagedUIContext>
                    <Layout pageProps={pageProps}>
                      <Component {...pageProps} />
                    </Layout>
                  </ManagedUIContext>
                </div>
              </AuthProvider>
            </SignedOut>
            <SignedIn> <div className="dark:bg-gray-900">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="relative mx-4">
                    <img src="https://i.ibb.co/q5k5j57/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="w-full h-full hidden lg:block" />
                    <img src="https://i.ibb.co/94jQFsV/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="hidden sm:block lg:hidden w-full h-full" />
                    <img src="https://i.ibb.co/cJz8LZ2/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="sm:hidden w-full h-full" />

                    <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 sm:w-8/12">Ywelcome back</h1>
                        <p className="text-base leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-5/12">You are sucessfully logged in.</p>
                        <a href='https://us.nb4fshop.com/account' className="hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">View My Orders</a>
                    </div>
                    <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                </div>
            </div>
        </div></SignedIn>
          </>
        )}
      </ClerkProvider>
    </>
  )
}