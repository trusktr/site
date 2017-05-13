import $ from 'jquery';

//famous
import 'famous/src/core/famous.css'

//infamous
import Plane from 'infamous/Plane';
import PushMenuLayout from 'infamous/PushMenuLayout';
import {contextWithPerspective} from 'infamous/utils';

//utils
import callAfter from 'army-knife/callAfter';

import './routes'

//styles
import jss from "/client/common/jss-configured"
import reset from '/client/common/styles/reset'

export default
function home() {

    // apply global reset
    jss.createStyleSheet(reset, {named: false}).attach()

    const menuColor = 'rgb(45,45,45)'

    const style = {
        html: {
            '& body': {
                background: '#222',

                '& .hidden': {
                    display: 'none',
                },

                '& .invisible': {
                    visibility: 'visible',
                },

                '& #menu': {
                    'box-sizing': 'border-box',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    padding: '20px',
                    margin: 0,
                    'list-style': 'none',
                    background: menuColor,
                    display: 'block',
                    'font-size': '1.3rem',

                    '& li': {
                        'padding-bottom': '10px',
                        display: 'inline',
                        //'text-shadow': '0px 4px 2px #000',
                    },
                    '& a': {
                        'text-decoration': 'none',
                        color: '#1DD326',
                        'border-radius': '2px',
                        padding: '0 3px',
                    },
                    '& a:hover': {
                        'text-decoration': 'none',
                        color: 'rgb(45,45,45)',
                        background: '#1DD326',
                    },
                    '& .sub.menuitem': {
                        'font-size': '0.8rem',
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        'margin-top': '-10px',
                        left: '100%',

                        //triangle
                        //TODO: Move this into PushMenuLayout, and make optional.
                        width: 0,
                        height: 0,
                        'border-top': '10px solid transparent',
                        'border-bottom': '10px solid transparent',
                        'border-left': '10px solid '+menuColor,
                    }
                }
            }
        }
    }

    jss.createStyleSheet(style, {named: false}).attach()

    const layout = new PushMenuLayout();
    window.layout = layout

    // The menuPlane contains a collection of links made with traditional HTML.
    const menuPlane = new Plane({
        size: [layout.menuWidth + 0, undefined],

        // TODO: use a template engine.
        content: ''+
            '<menu id="menu">'+
                '<li class="menuitem" style="color: #ccc">Joe Pea</li><br />'+
                //'<li class="sub menuitem">'+
                    //'<a href="/hello">about me</a>'+
                //'</li><br />'+
                '<li class="sub menuitem frame">'+
                    '<a target="_blank" href="/pages/mom2015/index.html">3D Mother\'s Day 2015</a>'+
                '</li><br />'+
                //'<li class="sub menuitem frame">'+
                    //'<a target="_blank" href="/pages/webglearth/index.html">Globe</a>'+
                //'</li><br />'+
                '<li class="sub menuitem frame">'+
                    '<a target="_blank" href="/pages/clobe/index.html">Clobe</a>'+
                '</li><br />'+
                '<li class="sub menuitem frame">'+
                    '<a target="_blank" href="/pages/flipDiagonal/index.html">Diagonal Grid Flip</a>'+
                '</li><br />'+
                '<li class="sub menuitem frame">'+
                    '<a target="_blank" href="/pages/passwordReveal/index.html">Password Prompt</a>'+
                '</li><br />'+
                //'<li class="sub menuitem frame">'+
                    //'<a target="_blank" href="/pages/calendar/index.html">Date Picker</a>'+
                //'</li><br />'+
                //'<li class="sub menuitem frame">'+
                    //'<a target="_blank" href="https://vs5k.trusktr.io">Voting System 5000</a>'+
                //'</li><br />'+
                '<li class="sub menuitem frame">'+
                    '<a target="_blank" href="/pages/password/index.html">Password Generator</a>'+
                '</li><br />'+
                //'<li class="sub menuitem frame">'+
                    //'<a target="_blank" href="http://ksb.sk8earth.com">Keep Skatin\' Bro</a>'+
                //'</li><br />'+
                //'<li class="sub menuitem frame">'+
                    //'<a target="_blank" href="http://creationofsociety.com">Creation of Society</a>'+
                //'</li><br />'+
                //'<li class="sub menuitem frame">'+
                    //'<a target="_blank" href="http://saccityexpress.com">Sac City Express</a>'+
                //'</li><br />'+
                //'<li class="sub menuitem frame">'+
                    //'<a target="_blank" href="http://str8wayent.net">Straightway</a>'+
                //'</li><br />'+
                //'<li class="sub menuitem frame">'+
                    //'<a target="_blank" href="http://bettafootwear.com/CrownYourFeet">Betta Footwear</a>'+
                //'</li><br />'+
                '<li class="sub menuitem frame">'+
                    '<a target="_blank" href="https://docs.google.com/viewer?embedded=true&url=trusktr.io/boring_resume.pdf">Resume</a>'+
                '</li><br />'+
                //'<li class="sub menuitem">'+
                    //'<a href="/portfolio">more...</a>'+
                //'</li><br />'+
            '</menu>'+
        '',

        properties: {
            zIndex: '10'
        }
    });

    console.log('created menuPlane:', menuPlane)

    const iframePlane = new Plane({
        size: [undefined,undefined],
        content: '<iframe src="" style="width: 100%; height: 100%"></iframe>',
        properties: {
            zIndex: '0',
        }
    });

    const context = contextWithPerspective(1000);

    // FIXME: Why the EFF must I also set align and origin on iframePlane when
    // I've already set it on it's parent (layout.contentMol)?????
    iframePlane.setOptions({
        origin: [layout.alignment, 0.5],
        align: [layout.alignment, 0.5]
    });

    iframePlane.transform.setTranslateZ(-1); // TODO: move this into PushMenuLayout

    layout.contentMol.add(iframePlane);
    layout.menuMol.add(menuPlane);

    context.add(layout);

    // When you add something to the menu area of a PushMenuLayout, the
    // PushMenuLayout will automatically pipe events from the thing to the
    // PushMenuLayout's touch sync if the thing you added to the menu are has a
    // pipe method (falling back to subscribe).
    //
    // If whatever you put in the menu area doesn't have a pipe or subscribe
    // method (e.g. Modifiers, RenderNodes, etc), be sure to pipe it's events
    // (or it's children's events) to the menu area's touch sync so the menu
    // will be properly reactive to touch.
    menuPlane.pipe(layout.touchSync);

    // A PushMenuLayout by default opens and closes only by dragging with touch
    // and ignores mouse events. You can add your own handling for mouse events
    // like this:
    menuPlane.on('mouseenter', function() {
        if (!layout.isOpening) {
            layout.openMenu();
        }
    });
    menuPlane.on('mouseleave', function() {
        if (!layout.isClosing) {
            layout.closeMenu();
        }
    });

    const loadFirstMenuItemContent = callAfter(2, function() {
        $('iframe').attr('src', $('.menuitem a').attr('href'));
    });

    // Set up the click handlers to change the content of the iframe.
    menuPlane.on('deploy', function() {
        loadFirstMenuItemContent();
        $('.menuitem a').on('click', function(event) {
            const _link = $(this);
            layout.closeMenu(function() {
                if (_link.parent().is('.frame')) {
                    $('iframe').attr('src', _link.attr('href'));
                }
            });
            event.preventDefault();
        });
    });

    iframePlane.on('deploy', function() {
        loadFirstMenuItemContent();
    });
}