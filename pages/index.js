import React, { Component } from 'react'
import Router from 'next/router'
import { Query, Mutation } from 'react-apollo'
import App from '../components/App'
import ISSUES from '../queries/issues.gql'
import OPEN_CALLS from '../queries/openCalls.gql'
import Loading from '../components/Loading'
import Banner from '../components/Banner'
import Calls from '../components/Calls'

class Home extends Component {
  render () {
    return (
      <App>
        <Query query={ISSUES}>
          {({ data, loading, error }) => {
            const issues = loading ? [] : (error ? [] : data.issues)
            return (
              <div>
                <Banner issues={issues.filter(e => (e.published && e.publishedCall) )} />
              </div>
            )
          }}
        </Query>
        <Query query={OPEN_CALLS}>
          {({ data, loading, error }) => {
            const openCalls = loading ? [] : (error ? [] : data.openCalls)
            return (
              <div>
                <Calls issues={openCalls} />
              </div>
            )
          }}
        </Query>
      </App>
    )
  }
}

export default Home