import React, { Component } from 'react'
import ProjectWorkers from './ProjectWorkers'
import { withStyles } from '@material-ui/core'



const styles = theme =>({
    link:{
        padding:'8px',
        color:'blue',
        cursor:'pointer',
        "&:hover": {
            textDecoration:'underline'
          }
    }
})

 class ProjectSidebar extends Component {
    render() {
        const {classes} = this.props
        return (
           
                <div>
                    <div style={{background:'#fff'}}>
                        <h3 style={{padding:'10px',background:'#000',color:'#fff'}}>Project Worker & Detailes</h3>
                       
                        <p className={classes.link}>All Works</p>
                        <p className={classes.link}>My Works</p>
                    </div>
                    <div>
                        <h3 style={{background:'#000',color:'#fff',padding:'10px'}}>All Workers</h3>
                        <ProjectWorkers />
                    </div>
                </div>
          
        )
    }
}
export default withStyles(styles)(ProjectSidebar)
