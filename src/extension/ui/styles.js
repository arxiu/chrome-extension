// @flow

var Color = require('color');

let Colors = {
    accent: 'wheat',
    light: 'white',
    dark: 'rgb(60, 55, 50)'
}

let Theme = {
    accent:Colors.accent,
    dark: Colors.dark,
    light: Colors.light,
    overDarkLight: Color(Colors.light).alpha(0.03),
    overDarkDark: Color('black').alpha(0.2),
    overLightLight: Color('white').alpha(0.2),
    overLightDark: Color(Colors.dark).alpha(0.03),
}

let Styles = {
    dock: {
        background: Theme.dark,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: Theme.light,
    },

    section:{
        padding: 20,
        background: Theme.overDarkDark,
        marginBottom:20
    },

    basicInput: {

        input: {
            padding: 10,
            fontSize: '1.1em',
            border: 'none',
            backgroundColor: Theme.overDarkLight,
            borderBottomColor: Theme.accent,
            borderBottomStyle: 'none',
            borderBottomWidth: 1,
            color: Theme.accent,
            outline: 'none',
            borderRadius: 4,

            hasFocus: {
                borderBottomStyle: 'solid',
                backgroundColor: Theme.overDarkLight,
            }
        },
    }
}

module.exports = Styles