import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const ProjectSection = (props) => (
    <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Link to={props.link}>{props.linkName}</Link>
    </div>
)


const ProjectsPage = () => (
  <Layout>
    <Link to="/">BACK</Link>
    <h1>Open Source Projects I've worked on</h1>
    <ProjectSection
        title="Grumpy bot"
        description="A react native app that uses compromise and sentiment to turn a positive sentence in a negative one"
        link="https://github.com/samjacobclift/grumpyBot"
        linkName="Grumpy bot"
    />

    <ProjectSection
        title="Mobx"
        description="Simple, scalable state management"
        link="https://github.com/mobxjs/mobx"
        linkName="Mobx"
    />

    <ProjectSection
        title="Yarn"
        description="Fast, reliable, and secure dependency management"
        link="https://github.com/yarnpkg/yarn"
        linkName="Yarn"
    />

    <ProjectSection
        title="Angular Sortable"
        description="Maintain the open source library that provides bindings between AngularJS and SortableJS"
        link="https://github.com/SortableJS/angular-legacy-sortablejs"
        linkName="Angular Sortable"
    />

    <ProjectSection
        title="Octobox"
        description="Take back control of your GitHub Notifications"
        link="https://octobox.io"
        linkName="Octobox"
    />

  </Layout>
)

export default ProjectsPage
