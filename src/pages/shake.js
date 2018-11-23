import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import './shake.css'

const ShakeCSSPage = () => (
  <Layout>
    <Link to="/">BACK</Link>
    <h1>An Example of a CSS animation on an image</h1>
    <div className="centered">
        <div className="face">
            <Image />
        </div>
    </div>

  </Layout>
)

export default ShakeCSSPage
