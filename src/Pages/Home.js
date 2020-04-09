import React, { Component } from 'react'
import { Grid, Paper, withStyles } from '@material-ui/core'
import Todos from '../Components/Todos'
import Projects from '../Components/Projects'


const styles = theme => ({

})

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid container spacing={2} style={{ marginTop: '2%' }}>
                <Grid item xs={12} md={6}>
                    <Todos />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Projects />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Home)
