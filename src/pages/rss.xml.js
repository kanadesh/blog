import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITENAME, DESCRIPTION } from '../../config'

export const get = async (context) => {
    const posts = await getCollection('blog')

    return rss({
        title: SITENAME,
        description: DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            pubDate: post.data.date.toLocaleDateString('en-US'),
            title: post.data.title,
            description: post.data.description,
            link: `/blog/${post.slug}`
        }))
    })
}
