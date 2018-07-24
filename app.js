import React, {Component} from 'react';

import Part1 from './part1';
import Part2 from './part2';
class App extends Component {
    render() {
        return(
            <div className='main'>
                <Part1/>
                <Part2/>
            </div>
        );
    }
}
export default App;