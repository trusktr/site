import startup from 'awaitbox/meteor/startup'
import {Tween, Easing} from 'tween.js'

import React from 'react'
import ReactDOM from 'react-dom'

import Motor from 'infamous/core/Motor'
import 'infamous/html'

//styles
import jss from "./lib/jss-configured"
import reset from './common/styles/reset'

export default
async function earthDefense() {

    // apply global reset
    jss.createStyleSheet(reset, {named: false}).attach()

    class Game extends React.Component {
        render() {
            return (
                <i-scene id="scene" ref="scene">
                    <i-node id="rotator" ref="rotator"
                        align="0.5, 0.5, 0.5"
                        mountPoint="0.5, 0.5, 0.5"
                        >

                        <i-node id="earth" ref="earth"
                            sizeMode="literal, literal, literal"
                            size="100,100,100"
                            style={{'border': '1px solid blue', 'borderRadius':'50px'}}
                            align="0.5,0.5,0.5"
                            mountPoint="0.5,0.5,0.5"
                            >

                        </i-node>

                        <i-node id="rocket" ref="rocket"
                            sizeMode="literal, literal, literal"
                            size="10, 10, 10"
                            style={{border: '1px solid red', borderRadius:'5px'}}
                            align="0.5,0.5,0.5"
                            mountPoint="0.5,0.5,0.5"
                            position={`${Math.random()*500-250}, ${Math.random()*500-250}, 0`}
                            >

                        </i-node>
                    </i-node>

                </i-scene>
            )
        }

        async componentDidMount() {
            const rocket = this.refs.rocket
            await rocket.mountPromise

            const {position, size} = rocket

            const rocketToEarthTween = new Tween(position)

            rocketToEarthTween.to({
                x:0,
                y:0,
            }, 2000)

            rocketToEarthTween.easing(Easing.Cubic.In)

            rocketToEarthTween.start(performance.now())

            const positionTask = Motor.addRenderTask(time => {
                rocketToEarthTween.update(time)

                if (position.x === 0 && position.y === 0) {
                    rocketToEarthTween.stop()
                    Motor.removeRenderTask(positionTask)

                    this.refs.rocket.style.border = 'none'
                    this.refs.rocket.style.background = 'yellow'
                    this.refs.rocket.style['border-radius'] = '15px'
                    size.x = 30
                    size.y = 30

                    const fadeOutTask = Motor.addRenderTask(() => {
                        rocket.opacity -= 0.01
                        if (rocket.opacity <= 0) Motor.removeRenderTask(fadeOutTask)
                    })
                }
            })

            //const rotator = this.refs.rotator
            //Motor.addRenderTask(() => {
                //rotator.rotation.y++
            //})
        }
    }

    function startGame() {
        const appRoot = document.querySelector('#app-root')
        ReactDOM.render(<Game />, appRoot)
    }

    await startup()
    startGame()
}
