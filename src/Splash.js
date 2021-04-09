import React, { Component } from 'react';
import { View ,Image} from 'react-native';

export default class Splash extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('Home');
        }, 2000);
      }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <Image 
        source={require('../assests/newSplashpic.gif')}  
        FLAnimatedImage style={{width: 450, height: 450 }}
    />
                {/* <LottieView
                    source={require('../gifs/splash.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Home');
                    }}
                /> */}
            </View>
        )
    }
}


