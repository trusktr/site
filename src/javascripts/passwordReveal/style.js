export default {
    '@global': {
        html: {
            '& body': {

                '& .font-color-1': {
                    color: '#cff09e',
                },
                '& .font-color-2': {
                    color: '#A8DBA8',
                },
                '& .font-color-3': {
                    color: '#79BD9A',
                },
                '& .font-color-4': {
                    color: '#3B8686',
                },
                '& .font-color-5': {
                    color: '#0B486B',
                },

                '& .bg-color-1': {
                    background: '#cff09e',
                },
                '& .bg-color-2': {
                    background: '#A8DBA8',
                },
                '& .bg-color-3': {
                    background: '#79BD9A',
                },
                '& .bg-color-4': {
                    background: '#3B8686',
                },
                '& .bg-color-5': {
                    background: '#0B486B',
                },

                '& .border-color-1': {
                    'border-color': '#cff09e',
                },
                '& .border-color-2': {
                    'border-color': '#A8DBA8',
                },
                '& .border-color-3': {
                    'border-color': '#79BD9A',
                },
                '& .border-color-4': {
                    'border-color': '#3B8686',
                },
                '& .border-color-5': {
                    'border-color': '#0B486B',
                },
                '& .border-color-5-dark': {
                    'border-color': '#053652'
                },

                '& .passwordBox': {
                    '& input': {
                        padding: '4px',
                        border: '2px solid #053652',

                        '-webkit-box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37)',
                        '-moz-box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37)',
                        '-ms-box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37)',
                        '-o-box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37)',
                        'box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37)',

                        '&:active': {
                            outline: 'none',
                        },
                        '&:hover': {
                            '-webkit-box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37), 0px 0px 6px 0px rgba(207,240,158,0.7)',
                            '-moz-box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37), 0px 0px 6px 0px rgba(207,240,158,0.7)',
                            '-ms-box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37), 0px 0px 6px 0px rgba(207,240,158,0.7)',
                            '-o-box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37), 0px 0px 6px 0px rgba(207,240,158,0.7)',
                            'box-shadow': 'inset 0px 0px 10px 0px rgba(0,0,0,0.37), 0px 0px 6px 0px rgba(207,240,158,0.7)',
                        },
                        '&:focus': {
                            border: '2px solid #cff09e',
                        },

                        '&:input-placeholder': {
                            color: '#244f4f',
                        },
                        '&::-webkit-input-placeholder': {
                            color: '#244f4f',
                        },
                        '&:-moz-placeholder': { /* Firefox 18- */
                            color: '#244f4f',
                        },
                        '&::-moz-placeholder': {  /* Firefox 19+ */
                            color: '#244f4f',
                        },
                        '&:-ms-input-placeholder': {
                            color: '#244f4f',
                        },
                    },
                    '& input, & button': {
                        'margin-bottom': '5px',

                        '-webkit-transition': 'border 250ms, -webkit-box-shadow 250ms',
                        '-moz-transition':    'border 250ms, -moz-box-shadow 250ms',
                        '-ms-transition':     'border 250ms, -ms-box-shadow 250ms',
                        '-o-transition':      'border 250ms, -o-box-shadow 250ms',
                        'transition':         'border 250ms, box-shadow 250ms',
                    },
                    '& button': {
                        position: 'relative',
                        color: '#0B486B!important',

                        background: [
                            'rgba(217,255,161,1)',
                            '-moz-linear-gradient(top, rgba(217,255,161,1) 0%, rgba(186,214,144,1) 100%)',
                            '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(217,255,161,1)), color-stop(100%, rgba(186,214,144,1)))',
                            '-webkit-linear-gradient(top, rgba(217,255,161,1) 0%, rgba(186,214,144,1) 100%)',
                            '-o-linear-gradient(top, rgba(217,255,161,1) 0%, rgba(186,214,144,1) 100%)',
                            '-ms-linear-gradient(top, rgba(217,255,161,1) 0%, rgba(186,214,144,1) 100%)',
                            'linear-gradient(to bottom, rgba(217,255,161,1) 0%, rgba(186,214,144,1) 100%)'
                        ],
                        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#d9ffa1", endColorstr="#bad690", GradientType=0 )',

                        border: '2px solid #053652',

                        '&:active': {
                            background: [
                                'rgba(186,214,144,1)',
                                '-moz-linear-gradient(top, rgba(186,214,144,1) 0%, rgba(217,255,161,1) 100%)',
                                '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(186,214,144,1)), color-stop(100%, rgba(217,255,161,1)))',
                                '-webkit-linear-gradient(top, rgba(186,214,144,1) 0%, rgba(217,255,161,1) 100%)',
                                '-o-linear-gradient(top, rgba(186,214,144,1) 0%, rgba(217,255,161,1) 100%)',
                                '-ms-linear-gradient(top, rgba(186,214,144,1) 0%, rgba(217,255,161,1) 100%)',
                                'linear-gradient(to bottom, rgba(186,214,144,1) 0%, rgba(217,255,161,1) 100%)'
                            ],
                            filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#bad690", endColorstr="#d9ffa1", GradientType=0 )',
                        },
                        '&:hover': {
                            '-webkit-box-shadow': '0px 0px 6px 0px rgba(207,240,158,0.7)',
                            '-moz-box-shadow': '0px 0px 6px 0px rgba(207,240,158,0.7)',
                            '-ms-box-shadow': '0px 0px 6px 0px rgba(207,240,158,0.7)',
                            '-o-box-shadow': '0px 0px 6px 0px rgba(207,240,158,0.7)',
                            'box-shadow': '0px 0px 6px 0px rgba(207,240,158,0.7)',
                        }
                    }
                }
            }
        }
    },
}
