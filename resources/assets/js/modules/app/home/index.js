import React, {Component} from 'react'

class HomeApp extends Component {

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card card-default">
                            <div className="card-header">Home Component</div>

                            <div className="card-body">
                                You are at the home component

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HomeApp