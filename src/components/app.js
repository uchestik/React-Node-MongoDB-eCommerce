import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Customer from '../containers/customer'
import Upload from '../containers/upload'
import Admin from '../containers/admin'
import EditPage from '../containers/editPage'


const App = ()=>{
    return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path={'/admin'}component={Admin} />
                        <Route exact path={'/admin/edit/:productId'} component={EditPage} />
                        <Route exact path={'/upload'} component={Upload}/>
                        <Route exact path={'/'} component={Customer} />
                    </Switch>
                </div>
            </BrowserRouter>
    )
}

export default App;