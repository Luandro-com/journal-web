import React, { Component } from 'react'
import Router from 'next/router'
import { Query, Mutation } from 'react-apollo'
import App from '../components/App'
import EDITIONS from '../queries/editions.gql'
import Loading from '../components/Loading'
import Banner from '../components/Banner'
import Calls from '../components/Calls'

class Home extends Component {
  render () {
    return (
      <App>
        <Query query={EDITIONS}>
          {({ data, loading, error }) => {
            if (loading) return <Loading />
            if (error) return <h2>error</h2>
            if (data) {
              return (
                <div>
                  <Banner editions={data.editions.filter(e => (e.published && e.publishedCall) )} />
                  <Calls editions={data.editions.filter(e => (e.publishedCall && !e.published) )} />
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