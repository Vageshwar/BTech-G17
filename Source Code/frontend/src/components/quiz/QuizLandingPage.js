import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Component, createRef} from 'react';
import App from '../../App';
import {Button} from '@material-ui/core'

import Webcam from "react-webcam";


const QuizLandingPage = () => {

    return(
        <Router>
            <Switch>
                <Route path="/" exact component={WebCamScreen} />
                <Route path="/quiz" exact component={App} />
            </Switch>
            
            
        </Router>
        
    );
}




class WebCamScreen extends Component {
    // webcamRef: React.useRef(null),
    constructor(props) {
        super(props);
        this.state = {  webcamRef: createRef(null),
            videoConstraints: {facingMode: "user"},
        }
    }
    

    render() {
      return (
        <>
                <Webcam
                audio={false}
                ref={this.state.webcamRef}
                videoConstraints={this.state.videoConstraints}
                />
                <br/>
                <Link to="/quiz"><Button>Take Quiz</Button></Link>
            {/* Capture Button can be triggered in Attempt quiz Button
            <button onClick={capture}>Capture photo</button> */}
        </>
      );
    }
}

export default QuizLandingPage;