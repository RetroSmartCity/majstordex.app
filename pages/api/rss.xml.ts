// pages/api/rss.xml.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'
import type { NextApiRequest, NextApiResponse } from 'next'

const postsDirectory = path.join(process.cwd(), 'posts')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const siteUrl = 'https://majstordex.rs'
  const files = fs.readdirSync(postsDirectory)

  const items = files.map((file) => {
    const fullPath = path.join(postsDirectory, file)
    const content = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(content)
    const slug = file.replace(/\.mdx?$/, '')

    return `
      <item>
        <title>${data.title}</title>
        <link>${siteUrl}/blog/${slug}</link>
        <guid>${siteUrl}/blog/${slug}</guid>
        <pubDate>${format(new Date(data.date), 'EEE, dd MMM yyyy HH:mm:ss xx')}</pubDate>
        <description><![CDATA[${data.excerpt || ''}]]></description>
      </item>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>MajstorDex Blog</title>
        <link>${siteUrl}</link>
        <description>Najnoviji saveti i uputstva za elektro intervencije</description>
        ${items}
      </channel>
    </rss>`

  res.setHeader('Content-Type', 'application/rss+xml')
  res.status(200).send(xml)
}
