import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.agorahotelapart.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Eğer başka sayfaların varsa (örneğin /rooms), onları da buraya ekleyebiliriz
  ]
}