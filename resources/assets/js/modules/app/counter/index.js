import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {increment, decrement} from "../../../reducers/counter/reducer"
import { connect } from 'react-redux'

class CounterApp extends Component {

    static propTypes = {
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        counter: PropTypes.object.isRequired
    };


    render() {
        const {
            increment,
            decrement,
            counter
        } = this.props

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card card-default">
                            <div className="card-header">Counter Example</div>

                            <div className="card-body">

                                <h2>Count: {counter.count}</h2>

                                <button className='btn btn-success' onClick={increment}>Increment</button>
                                <button className='btn btn-warning' onClick={decrement}>Decrement</button>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)