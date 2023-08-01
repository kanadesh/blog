import rss, { RSSFeedItem } from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITENAME, DESCRIPTION } from '../../config'

type Context = {
    site: string
}

export const get = async (context: Context) => {
    const posts = await getCollection('blog')

    const items: RSSFeedItem[] = posts.map((post) => ({
        pubDate: post.data.date,
        title: post.data.title,
        description: post.data.description,
        link: `/blog/${post.slug}`
    }))

    return rss({
        title: SITENAME,
        description: DESCRIPTION,
        site: context.site,
        items
    })
}
