import React from "react"
import AwesomeSlider from 'react-awesome-slider'
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

function App() {
  return (
    <div>
      <AwesomeSlider
        animation="foldOutAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
        bullets={false}
        fillParent={true}
      >
        <div style={{backgroundColor: "#c8544c", fontFamily: 'VT323', fontSize: '64px'}}> 
          my journey with grand chase
          <br/>
          <br/>
          <div style={{fontSize: '32px'}}>
          by jeemong
          </div>
        </div>

        <div style={{backgroundColor: "#485cb4", fontFamily: 'VT323', fontSize: '40px'}}>
          <div>
          saw that grand chase was coming back, <br/> but was deeply disappointed by the nerfs and the p2w...
          </div>
          <br/>
          <img width="500px" src="https://i.imgur.com/NAYZQHx.png"/>
        </div>

        <div style={{fontFamily: 'VT323', fontSize: '40px', color: 'white'}}>
          <div>
          then came grand chase history, <br/> amazing server with content better than the original
          </div>
          <img width="500px" src="https://i.imgur.com/KdAb5bb.png"/>
        </div>

        <div style={{backgroundColor: "#FFD7C4", fontFamily: 'VT323', fontSize: '40px'  }}>
          <img width="800px" src="https://i.imgur.com/YY4pgEE.png"/>
          <div>
          along with an english community on discord and telegram <br/>
          of 700+ people!
          </div>
        </div>

        <div style={{backgroundColor: "#C9CCD5", fontFamily: 'VT323', fontSize: '50px'  }}>
          <img width="800px" src="https://i.imgur.com/A3hIkOX.png"/>
          <div>
          thank you gch staff and admin for perserving this game <br/>
          and happy 6th birthday to grand chase history!
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
}

export default App;
