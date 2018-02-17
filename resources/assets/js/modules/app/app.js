import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'
import Home from './home'
import Counter from './counter'
import Settings from './settings'

const App = () => (
    <Router>
        <div className='container-fluid'>

            <h3>EXAMPLE: LARAVEL REACT APP</h3>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/counter" className='nav-link'>Counter</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/settings" className='nav-link'>Settings</Link>
                    </li>


                </ul>
            </nav>

            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/counter" component={Counter} />
                <Route path="/settings" component={Settings} />
            </main>
        </div>
    </Router>
)

export default App