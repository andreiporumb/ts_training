import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'

function Dashboard() {
  return (
    <Fragment>
      <Typography>This is my settings page...</Typography>
      <Grid>Only certain users can see this page</Grid>
    </Fragment>
  )
}

export default Dashboard
