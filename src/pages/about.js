import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
	return (
		<Layout>
			<Head title="about" />
			<h1>About Me</h1>
			<p>I currently play games</p>
			<p>Want to work with me reach out <Link to="/contact">Contact Me!</Link></p>
		</Layout>
	)
}

export default AboutPage