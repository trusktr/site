
import 'famous/core/famous.css'
import Transform from 'famous/core/Transform';
import TransitionableTransform from 'famous/transitions/TransitionableTransform';

import Molecule from 'infamous/Molecule';
import Calendar from 'infamous/Calendar';
import {contextWithPerspective} from 'infamous/utils';

var tt = new TransitionableTransform();
var context = contextWithPerspective(1000);
var mainMol = new Molecule({
    transform: tt
});
tt.setTranslate([0,0,0]);

context.add(mainMol);
var calendar = new Calendar([768, 768], 'flipDiagonal');
mainMol.add(calendar);

var moveTo = 0;
function moveBackAndForth() {
    moveTo = +!moveTo;
    tt.setTranslateZ(moveTo*950, {duration: 6000, curve: 'easeInOut'}, moveBackAndForth);
}
//moveBackAndForth();

var rotateTo = 0;
function rotateYBackAndForth() {
    rotateTo = +!rotateTo;
    tt.setRotateY(rotateTo*0.3-0.3/2, {duration: 6300, curve: 'easeInOut'}, rotateYBackAndForth);
}
rotateYBackAndForth();

var tiltTo = 0;
var tiltTransitions = ['easeOut','easeIn'];
function tiltOverAndOver() {
    tiltTo = +!tiltTo;
    tt.setRotate([tiltTo*Math.PI/7,null,tiltTo*Math.PI/7], {duration: 3150, curve: tiltTransitions[tiltTo]}, tiltOverAndOver);
}
//tiltOverAndOver();

