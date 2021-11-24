import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"

const ContactPage = () => {
	return (
		<Layout>
			<Head title="contact" />
			<h1>Contact Page</h1>
			<p>The best way to reach me is in nowhere land.</p>
			<p>Let's go to nowhere land <a href="https://google.com" target="_blank">CLICK ME!</a></p>
		</Layout>
	)
}

export default ContactPage