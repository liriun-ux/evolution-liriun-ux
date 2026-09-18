// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://www.liriun-ux.tecnologia.bo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/web-especializada`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/proceso`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sobre-liriun-ux`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    // Nuevas páginas locales
    {
      url: `${BASE_URL}/el-alto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/la-paz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
