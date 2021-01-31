import {Component, createRef} from 'react';
import React from 'react';
import Webcam from "react-webcam";


class Capture extends Component {
    // webcamRef: React.useRef(null),
    constructor(props) {
        super(props);
        this.state = {  webcamRef: createRef(null),
            videoConstraints: {facingMode: "user"},
        }
    }
    
    componentDidMount() {
        this.capture = setInterval(() => {
            const imageSrc = this.state.webcamRef.current.getScreenshot();
            this.props.setImgSrc(imageSrc);
            }, 5000);
    }
  
    componentWillUnmount() {
        clearInterval(this.capture);
    }

    render() {
      return (
        <>
            <div style={{height:"0", width:"0", overflow:"hidden"}} >
                <Webcam
                audio={false}
                ref={this.state.webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={this.state.videoConstraints}
                />
            </div>
            {/* Capture Button can be triggered in Attempt quiz Button
            <button onClick={capture}>Capture photo</button> */}
        </>
      );
    }
}

export default Capture;