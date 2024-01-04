import prisma from '@/utils/connect';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const posts = await prisma.post.findMany(); 

        const postEntries: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
            url: `${process.env.BASE_URL}/posts/${slug}`,
            priority: 0.5,
            changeFrequency:'monthly'
        }));

        const routes = ['', '/portfolio', '/about','/contact'].map((route) => ({
            url: route,
        }));

        return [
            ...postEntries,
            ...routes,
        ];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return []; 
    }
}
