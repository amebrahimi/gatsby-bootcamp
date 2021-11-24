import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
	const data = useStaticQuery(graphql`
				query {
			allContentfulBlogPost(
				sort:{
					fields:publishedDate,
					order:DESC
				}
			) {
				edges {
					node{
						title
						slug
						publishedDate(formatString:"MMM Do, YYYY")
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<Head title="blog" />
			<h1>Blog</h1>

			<ol className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map((edge) => {
					const node = edge.node;
					return (
						<li className={blogStyles.post}>
							<Link to={`/blog/${edge.node.slug}`}>
								<h2>{node.title}</h2>
								<p>{node.publishedDate}</p>
							</Link>
						</li>
					)
				})}
			</ol>

		</Layout>
	)
}

export default BlogPage