import React from 'react'
import Router from 'next/router'
import { Query } from 'react-apollo'
import * as gtag from '../lib/gtag'
import USER from '../queries/user.gql'
import Header from './Header'
import Loading from '../components/Loading'
Router.events.on('routeChangeComplete', url => gtag.pageview(url))

// Context not working, makes sense instead of querying again for user
export const UserData = React.createContext({
  user: null
})

export default ({ children }) => (
  <Query query={USER}>
    {({ loading: loadingUser, error: errorUser, data: dataUser, client }) => {
      if (loadingUser) return <Loading />
      // if (errorUser) return <h1>Error</h1>
      if (dataUser || errorUser) {
        const userData = dataUser ? dataUser.user : null
        return (
          <main>
            <Header user={userData} />
            <UserData.Provider value={{ user: userData }}>
              {children}
            </UserData.Provider>
            <style jsx global>{`
              * {
                font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
                  'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
                  monospace, serif;
              }
              body {
                margin: 0;
                padding: 25px 50px;
              }
              a {
                color: #22bad9;
              }
              p {
                font-size: 14px;
                line-height: 24px;
              }
              article {
                margin: 0 auto;
                max-width: 650px;
              }
              button {
                align-items: center;
                background-color: #22bad9;
                border: 0;
                color: white;
                display: flex;
                padding: 5px 7px;
              }
              button:active {
                background-color: #1b9db7;
                transition: background-color 0.3s;
              }
              button:focus {
                outline: none;
              }
            `}</style>
          </main>
        )
      }
    }}
  </Query>
)
