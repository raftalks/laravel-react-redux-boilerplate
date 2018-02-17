import React, {Component} from 'react'

import Counter from '../../counter'


class HomeApp extends Component {

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card card-default">
                            <div className="card-header">Users Example</div>

                            <div className="card-body">
                                You are at the users example component under settings



                            </div>

                            <Counter />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HomeApp