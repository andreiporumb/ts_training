/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrivateRoute from '../components/routing/PrivateRoute'

import Welcome from 'features/welcome/Welcome'
import Settings from 'features/settings/Settings'
import HelloWorld from 'features/helloWorld/HelloWorld'
import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import { useEmail } from 'hooks/useEmail'
import ConferenceListContainer from 'features/conference/components/ConferenceListContainer';


export default function AppRoutes() {
  const [email] = useEmail()

  if (!email) {
    return <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Redirect to="/welcome" />
    </Switch>
  }

  return (
    <Switch>
      <Route exact path='/welcome' component={Welcome} />
      <PrivateRoute exact path='/settings' component={Settings} />
      <Redirect exact from='/' to='/welcome' />
      <Route exact path='/forbidden' component={Forbidden} />
      <Route exact path='/helloWorld' component={HelloWorld} />
      <Route exact path="/conferences" component={ConferenceListContainer} />
      <Route render={() => <NotFound title='PageNotFound'></NotFound>} />
    </Switch>
  )
}
