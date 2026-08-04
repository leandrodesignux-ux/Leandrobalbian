import type { Metadata } from "next";

const BASE_URL = "https://leandrobalbian.com";

export function createMetadata({
  title,
  description,
  path,
  image = "/HERO.png",
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: `${BASE_URL}${path}`,
      title,
      description,
      siteName: "Leandro Balbian",
      locale: "es_CL",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function jsonLdScript<T extends Record<string, unknown>>(schema: T) {
  return {
    __html: JSON.stringify(schema),
  };
}
