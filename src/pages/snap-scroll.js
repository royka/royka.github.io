import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import './snap-scroll.css'

const SnapScrollPage = () => (
  <Layout>
    <Link to="/">BACK</Link>
    <h1>Example CSS snap scroll</h1>
    <div className="container">
        <div className="yellowBlock"/>
        <div className="greenBlock"/>
        <div className="redBlock"/>
        <div className="yellowBlock"/>
        <div className="greenBlock"/>
        <div className="redBlock"/>
        <div className="yellowBlock"/>
        <div className="greenBlock"/>
        <div className="redBlock"/>
        <div className="yellowBlock"/>
        <div className="greenBlock"/>
        <div className="redBlock"/>
        <div className="yellowBlock"/>
        <div className="greenBlock"/>
        <div className="redBlock"/>
    </div>

  </Layout>
)

export default SnapScrollPage
