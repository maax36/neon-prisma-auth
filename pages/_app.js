import "@/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react";
import { Header } from '@/components/Header';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <main>
        <Toaster />
        <Header />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </>
  );
}
