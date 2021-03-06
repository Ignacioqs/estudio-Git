import React, {Component} from 'react'


import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <h1>RSVP</h1>
                    <p>A treehouse App</p>
                    <form>
                        <input type="text" value="Safia" placeholder="Invite Someone"/>
                        <button type="submit" name="submit" value="submit">Submit</button>
                    </form>
                </header>

                <div className="main">
                    <div>
                        <h2>Invitees</h2>
                        <label>
                            <input type="checkbox" /> Hide those who haven't responded
                        </label>
                    </div>
                    <table className="counter">
                        <tbody>
                            <tr>
                                <td>Attending:</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Unconfirmed:</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          );
    }
}

export default App;
