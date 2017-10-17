// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home/components/HomeView'
import SignUp from './SignUp/containers/SignUpContainer'
import Login from './Login/containers/LoginContainer'
import EnsureLoggedIn from './EnsureLoggedIn/containers/EnsureLoggedInContainer'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    component   : EnsureLoggedIn,
    childRoutes : [
      {
        component: CoreLayout,
        childRoutes: [
          {
            path: '/',
            component: Home
          }
        ]
      }
    ]
  }
])

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
