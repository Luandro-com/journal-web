import React, { Component } from 'react'
import Router from 'next/router'
import { Query, Mutation } from 'react-apollo'
import App from '../components/App'
import ISSUES from '../queries/issues.gql'
import Loading from '../components/Loading'
import Banner from '../components/Banner'
import Calls from '../components/Calls'

class Home extends Component {
  render () {
    return (
      <App>
        <Query query={ISSUES}>
          {({ data, loading, error }) => {
            if (loading) return <Loading />
            if (error) return <h2>error</h2>
            if (data) {
              return (
                <div>
                  <Banner issues={data.issues.filter(e => (e.published && e.publishedCall) )} />
                  <Calls issues={data.issues.filter(e => (e.publishedCall && !e.published) )} />
                </div>
              )
            }
          }}
        </Query>
      </App>
    )
  }
}

export default Home