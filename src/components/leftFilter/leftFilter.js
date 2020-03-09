import React from 'react'
import './leftFilter.scss'

class LeftFilter extends React.Component {


    render(){
        return(
            <div className='left-filter'>
                <div className='left-filter_imglogo'>
                    <img alt='aquivalaimglogo'/>
                </div>                
                <div className='left-filter_smart-filter'>
                        Smart Filters
                </div>
                <div style={{display: 'flex',paddingTop: '50px'}}>
                    <div style={{width: "50%"}}>
                        sale
                    </div>
                    <div style={{width: "50%"}}>
                        btnnn
                    </div>
                </div>
                <div style={{display: 'flex',paddingTop: '50px'}}>
                    <div style={{width: "50%"}}>
                        date
                    </div>
                    <div style={{width: "50%"}}>
                        btnnn
                    </div>
                </div>
                <div style={{display: 'flex',paddingTop: '50px'}}>
                    <div style={{width: "50%"}}>
                        favorite
                    </div>
                    <div style={{width: "50%"}}>
                        btnnn
                    </div>
                </div>
                
            </div>
        )
    }
}

export default LeftFilter