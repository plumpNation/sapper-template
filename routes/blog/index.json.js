/**
 * Since this file is named `index` and is in the `blog` folder, this is what is
 * run when requesting the /blog.json path
 *
 * @see index.html
 */
import posts from './_posts.js'

const contents = JSON.stringify(posts.map(post => {
  return {
    title: post.title,
    slug: post.slug
  }
}))

export function get (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  res.end(contents)
}
