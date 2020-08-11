import React from 'react';
import './App.css';
import DataModel from "./component/DataModel";
import SceneWithDrawables from "./component/SceneWithDrawable";


class App extends React.Component {


    render() {
        return (
            <div>
                <SceneWithDrawables/>
                <DataModel/>
                <DataModel/>

            </div>
               
        );
    }
}

export default App;
