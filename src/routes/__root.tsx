import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">404 — Not Found</div>
        <h1 className="mt-4 font-display text-5xl text-navy-deep">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for is unavailable or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy-deep text-white hover:bg-steel transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-navy-deep">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">Try refreshing or return home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase bg-navy-deep text-white hover:bg-steel"
          >
            Try again
          </button>
          <a href="/" className="px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase border border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tony Anderson — Regional Quality Manager & QA/QC Executive" },
      { name: "description", content: "Executive portfolio of Tony Anderson — international Regional Quality Manager and QA/QC Executive with 20+ years leading quality assurance, compliance and operational excellence across energy, EPC, oil & gas, petrochemical, offshore and power generation programs." },
      { name: "author", content: "Tony Anderson" },
      { property: "og:site_name", content: "Tony Anderson — Executive Portfolio" },
      { property: "og:title", content: "Tony Anderson — Regional Quality Manager & QA/QC Executive" },
      { property: "og:description", content: "Strategic quality leadership across global energy, infrastructure, EPC, petrochemical, offshore and power generation projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tony Anderson — Executive Quality Leadership" },
      { name: "twitter:description", content: "20+ years of international quality leadership for EDF, BP, INEOS, Chevron, Total, Wood, Lloyd's Register, Transocean and Vattenfall." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Tony Anderson",
        jobTitle: "Regional Quality Manager | QA/QC Manager | Quality Assurance & Compliance Executive",
        email: "anderson.tony83@gmail.com",
        telephone: "+33 685196452",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3 Rue Jacques Cartier",
          addressLocality: "Sète",
          postalCode: "34200",
          addressCountry: "FR",
        },
        sameAs: ["https://www.linkedin.com/in/tony-anderson-62719084/"],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
