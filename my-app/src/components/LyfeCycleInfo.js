import React, { Component } from 'react';
class LyfeCycleInfo extends Component {
    render(){
        return (
            <div className="lifecycle">
            <h2>Life Cycle Information </h2>
            <ul>
                <li>constructor()</li>
                <li>render()</li>
                <li>componentDidMount()</li>
                <li>componentDidUpdate()</li>
                <li>componentWillUnmount()</li>
                <li>shouldComponentUpdate()</li>
                <li>getDerivedStateFromProps()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>getDerivedStateFromError()</li>
                <li>componentDidCatch()</li>
                <li>setState()</li>
             
            </ul>
            </div>

        );

    }
}

export default LyfeCycleInfo;
