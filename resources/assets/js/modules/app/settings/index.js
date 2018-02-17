import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import Users from './users'


class SettingApp extends Component {



    render() {

        const {
            match
        } = this.props

        return (
            <Route path={match.url}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3>Settings {match.url}</h3>

                                <div>
                                    <Link to={match.url + '/users'}>Users</Link>
                                </div>
                            </div>

                            <div className="card-body">
                                You are at the SETTINGS component

                                <Route path={match.url + '/users'} component={() => <Users />} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Route>
        )
    }
}


export default SettingApp