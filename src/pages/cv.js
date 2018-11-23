import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const WorkSection = (props) => (
    <div>
        <h3>{props.title}</h3>
        <h4>{props.date}</h4>
        <p>{props.bio}</p>
        <ul>
            {props.technologies.map(element => {
                return <li>{element}</li>
            })}
        </ul>
    </div>
)

const QualitficationSection = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.technologies.map(element => {
                    return <li>{element}</li>
                })}
            </ul>
        </div>
    )
}

const CVPage = () => (
  <Layout>
    <Link to="/">Back</Link>
    <h1>Experience</h1>
    <WorkSection
        title="Fullstack Engineer, Adarga"
        date="October 2017 - present"
        bio="Working as a fullstack engineer in a small agile team, designing and delivering features. Focused primarily on development of data analytics software including complex visualizations and maps, fully leveraging react, D3 and typescript."
        technologies={[
            'React', 'Typescript', 'Mobx', 'D3', 'CSS3',
            'Node', 'Elasticsearch', 'GraphQl',
            'Docker', 'Kubernetes', 'GCP',
        ]}
    />
    <WorkSection
        title="Front End Developer, Wazoku"
        date="April 2016 - October 2017"
        bio="Worked as lead front end developer in an agile team. Focusing on UI development of new features as well as improving old ones."
        technologies={[
            'Typescript', 'Angular', 'D3', 'CSS3',
            'Jasmine', 'Less', 'PostgreSQL',
            'Django', 'Django Rest Framework',
        ]}
    />

    <WorkSection
        title="Lead Developer, Cloudfind"
        date="June  2013 - April 2016"
        bio="Worked as a full stack developer for a new lean startup in an agile environment. Touching on every aspect of the core product including front end, tagging algorithm, cloudstore integrations, infrastructure and deployment. Also involved in the design, planning and prototyping of new products and features to fit new markets based on feedback from customers and user research."
        technologies={[
            'Typescript', 'Angular', 'D3', 'CSS3',
            'Jasmine', 'Less', 'PostgreSQL', 'DynamoDB', 'Redis',
            'Django', 'Django Rest Framework', 'EC2'
        ]}
    />

    <WorkSection
        title="Software Developer, Intelligent Optimisations (IO)"
        date="August  2012 -  June 2013"
        bio="Helped to build an intelligent Google Ad exchange bidder. Worked primarily on the bidding system, developing it to work under the extreme conditions required by Google's Ad Exchange. Helping customers optimise their online advertising campaigns."
        technologies={[
            'Java',
            'Python', 'Tornado', 'Twisted',
            'GIT', 'EC2',
            'Mongo', 'Redis', 'Cassandra'
        ]}
    />
    <div>
        <h1>Education</h1>

        <QualitficationSection
            title='University of the West of England'
            technologies={[
                'BSc Computer Science — 2008-2012 (Included a placement as a Data Analyst with the Ministry of Defence lasting 18 months)'
            ]}

        />
        <QualitficationSection
            title='Somervale Secondary School'
            technologies={[
                'A-levels - History',
                'Physics',
                'BTEC - Engineering',
                'GCSE - 12 GCSE’s English, Maths and Triple Science all A-C grade'
            ]}
        />
    </div>
  </Layout>
)

export default CVPage
