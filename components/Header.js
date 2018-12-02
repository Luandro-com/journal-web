import Link from 'next/link'
import { withRouter } from 'next/router'
import { logout } from '../lib/auth'
import { ApolloConsumer } from 'react-apollo'

const Header = ({ router: { pathname }, user }) => (
  <ApolloConsumer>
    { client => (
      <header>
        <Link prefetch href='/'>
          <h1>Periódico</h1>
        </Link>
        <div className="user">
          {!user &&
            <Link prefetch href='/login'>
              <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
            </Link>
          }
          {user && <a onClick={() => logout(client)} href=''>Logout</a>}
        </div>
        <hr />
        <nav>
          <Link prefetch href='/'>
            <a className={pathname === '/' ? 'is-active' : ''}>Capa</a>
          </Link>
          <Link prefetch href='/issues'>
            <a className={pathname === '/issues' ? 'is-active' : ''}>Edições</a>
          </Link>
          <Link prefetch href='/about'>
            <a className={pathname === '/about' ? 'is-active' : ''}>Sobre</a>
          </Link>
          <Link prefetch href='/submit'>
            <a className={pathname === '/submit' ? 'is-active' : ''}>Submissões</a>
          </Link>
        </nav>
        
        <style jsx>{`
          header {
            width: 100%;
            text-align: center;
            margin: 0 auto;
            margin-bottom: 55px;
          }
          header h1 {
            cursor: pointer;
          }
          hr {
            max-width: 948px;
            color: green;
          }
          .user {
            position: absolute;
            top: 30px;
            right: 30px;

          }
          nav {
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            display: flex;
            flex-flow: row no-wrap;
            align-items: center;
            justify-content: space-around;
          }
          a {
            font-size: 14px;
            margin-right: 15px;
            text-decoration: none;
          }
          .is-active {
            text-decoration: underline;
          }
        `}</style>
      </header>
    )}
  </ApolloConsumer>
)

export default withRouter(Header)
