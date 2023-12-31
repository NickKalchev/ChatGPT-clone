import "./styles/globals.css";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from "../../components/Sidebar";
import { SessionProvider } from "../../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Login from "../../components/Login";
import ClientProvider from "../../components/ClientProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatGPT By Nick',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  console.log(session)

  return (
    <html lang="en">
      <head>

      </head>

      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ):(
            <div className="flex">
              <div className="bg-[#202123] px-1 max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>

              {/* ClientProvider - Notifications */}
              <ClientProvider />


              <div className="bg-[#343541] flex-1">
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>

    </html>
  )
}
