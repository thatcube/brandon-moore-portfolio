import React from 'react'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Empty from '../components/empty'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title='404: Page not found' />
      <Empty>
        
      </Empty>
    </Container>
  </Layout>
)

export default NotFoundPage
