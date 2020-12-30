import React, { useMemo } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withOidcSecure } from '@axa-fr/react-oidc-context'
import { emptyArray } from 'utils/constants'

function PrivateRoute({ component: Component, exact, path }) {
  const SecuredComponent = useMemo(() => withOidcSecure(Component), [Component])

  return useMemo(() => <Route exact={exact} path={path} component={SecuredComponent} />, [SecuredComponent, exact, path])
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  exact: PropTypes.bool,
  path: PropTypes.string
}

export default PrivateRoute
