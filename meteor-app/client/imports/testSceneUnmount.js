import sleep from 'awaitbox/timers/sleep'
import startup from 'awaitbox/meteor/startup'

import React from 'react'
import ReactDOM from 'react-dom'

import Motor from 'infamous/core/Motor'
import 'infamous/html'

//styles
import jss from "./lib/jss-configured"
import reset from './common/styles/reset'

export default
async function testSceneUnmount() {

    // apply global reset
    jss.createStyleSheet(reset, {named: false}).attach()

    class Game extends React.Component {
        render() {
            return (
                <i-scene ref="scene">

                    <i-node ref="earth"
                        sizeMode="literal, literal, literal"
                        size="100,100,100"
                        style={{'border': '1px solid blue', 'borderRadius':'50px'}}
                        align="0.5,0.5,0.5"
                        mountPoint="0.5,0.5,0.5"
                        >

                    </i-node>

                    <i-node ref="rocket"
                        sizeMode="literal, literal, literal"
                        size="10, 10, 10"
                        style={{border: '1px solid red', borderRadius:'5px'}}
                        align="0.5,0.5,0.5"
                        mountPoint="0.5,0.5,0.5"
                        position="200, -50, 0"
                        >

                    </i-node>

                </i-scene>
            )
        }

        async componentDidMount() {
            const rocket = this.refs.rocket

            await rocket.ready

            const {position, size} = rocket

            const positionTask = Motor.addRenderTask(() => {
                if (position.x !== 0) position.x -= 2
                if (position.y !== 0) position.y += 2

                if (position.x === 0 && position.y === 0) {
                    Motor.removeRenderTask(positionTask)

                    rocket.style.border = 'none'
                    rocket.style.background = 'yellow'
                    rocket.style['border-radius'] = '15px'
                    size.x = 30
                    size.y = 30

                    const fadeOutTask = Motor.addRenderTask(() => {
                        rocket.opacity -= 0.01
                        if (rocket.opacity <= 0) Motor.removeRenderTask(fadeOutTask)
                    })
                }
            })

            await sleep(500)
            const scene = this.refs.scene
            scene.remove()

            await sleep(100)
            console.assert(!scene._mounted)

            await sleep(500)
            document.querySelector('#app-root').appendChild(scene)

            await sleep(100)
            console.assert(scene._mounted)
        }
    }

    function startGame() {
        const appRoot = document.querySelector('#app-root')
        ReactDOM.render(<Game />, appRoot)
    }

    await startup()

    startGame()
}
