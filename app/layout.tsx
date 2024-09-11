import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RecoilWrapper from './Components/RecoilWrapper/RecoilWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'FlareIt',
    description: 'Music web-app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className={inter.className}>
                <RecoilWrapper>{children}</RecoilWrapper>
            </body>
        </html>
    );
}
