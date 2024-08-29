import { Metadata } from "next";

import { sleep } from "./utils";
import { Suspense } from "react";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: 'Test site',
      template: `%s | test template`,
    },
    description: 'Test description',
    formatDetection: {
      email: true,
      address: false,
      telephone: true,
    },
  };
}

async function SomeProvider({ children }) {
  const h = headers();

  await sleep(100);

  return <>{children}</>
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <SomeProvider>
          <Suspense>
            {children}
          </Suspense>
        </SomeProvider>
      </body>
    </html>
  );
}
