import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {return ["/","/en/","/privacidade/","/privacy/"].map(path=>({url:"https://msproductstudio.github.io"+path}));}
