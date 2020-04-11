import React, { Component } from 'react'
import ProjectSidebar from '../Components/ProjectSidebar'
import {Grid} from '@material-ui/core'

class Page_ProjectDetailes extends Component {
    render() {
        return (
            <div style={{marginTop:'7%'}}>
                <Grid container spacing={2} style={{ marginTop: '2%' }}>
                <Grid item xs={12} md={3}>
                   <ProjectSidebar />
                </Grid>
                <Grid item xs={12} md={9}>
                    {/* <Projects /> */}
                </Grid>
            </Grid>
            </div> 
        )
    }
}
export default Page_ProjectDetailes
