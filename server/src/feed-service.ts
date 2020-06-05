

import Parser from "rss-parser"
import { Job } from "./db/entity"
import { getManager } from "typeorm"

const parser = new Parser();

const start = (url: string, interval = 1) => {
  setInterval(async () => {
    const feed = await parser.parseURL(url)
    feed.items?.forEach(item => {
      const jobRepository = getManager().getRepository(Job)
      jobRepository.save({ title: item.title, description: item.description, pubDate: item.pubDate, link: item.link })
    })
   
  }, 60000*interval)
}

export { start }