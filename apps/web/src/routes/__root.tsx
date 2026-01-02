import type { AppRouter } from "@easy-waitlist/api/routers/index";
import type { QueryClient } from "@tanstack/react-query";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Toaster } from "@/components/ui/sonner";

import Header from "../components/header";
import appCss from "../index.css?url";
export interface RouterAppContext {
  trpc: TRPCOptionsProxy<AppRouter>;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Landing Page Template Platform - Modern Waitlist Templates",
      },
      {
        name: "description",
        content:
          "Browse modern, animated landing page templates designed for waitlists. Copy code blocks directly and launch faster.",
      },
      {
        name: "keywords",
        content: "landing page templates, waitlist templates, website templates, copy code",
      },
      {
        property: "og:title",
        content: "Landing Page Template Platform - Modern Waitlist Templates",
      },
      {
        property: "og:description",
        content:
          "Browse modern, animated landing page templates designed for waitlists. Copy code blocks directly and launch faster.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Landing Page Template Platform - Modern Waitlist Templates",
      },
      {
        name: "twitter:description",
        content:
          "Browse modern, animated landing page templates designed for waitlists. Copy code blocks directly and launch faster.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="grid h-svh grid-rows-[auto_1fr]">
          <Header />
          <Outlet />
        </div>
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
