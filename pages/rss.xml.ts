// pages/rss.xml.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetServerSideProps } from 'next'
import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'posts')

const generateRss = () => {
  const siteUrl = 'https://majstordex.rs'
  const files = fs.readdirSync(postsDirectory)

  const postsRss = files.map(file => {
    const filePath = path.join(postsDirectory, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

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

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>MajstorDex Blog</title>
      <link>${siteUrl}</link>
      <description>Najnoviji saveti i uputstva za elektro intervencije</description>
      ${postsRss}
    </channel>
  </rss>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const rss = generateRss()

  res.setHeader('Content-Type', 'text/xml')
  res.write(rss)
  res.end()

  return {
    props: {},
  }
}

export default function Rss() {
  return null
}
