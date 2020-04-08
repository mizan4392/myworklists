import React, { Component } from 'react'
import { Grid ,Paper, withStyles} from '@material-ui/core'
import Todos from '../Components/Todos'


const styles = theme =>({

})

class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <Grid container spacing={2} style={{marginTop:'2%'}}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Todos />
                    </Paper>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Home)
