// @flow

let Styles = {

    dock: {
        background: 'rgb(60, 55, 50)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    
        content: {
            // boxShadow: 'rgba(0, 0, 0, 0.4) 2px 1px 7px 3px',
            color: 'white',
            padding: 20,
            background: 'rgba(50, 50, 50, 1)',
            borderRadius: 4,
        }

    },

    basicInput:{
        padding:10,


        input:{
            padding: 10,
            fontSize: '1.1em',
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderBottomColor: 'white',
            borderBottomStyle: 'none',
            borderBottomWidth: 2,
            color: 'wheat',

            hasFocus:{
                borderBottomStyle: 'solid',
            }
        },
    }
}

class SuperStyle {

    style:{}
    extensions:{}

    constructor(newStyle){
        if(newStyle.style)
        {
            this.style = newStyle.style
            if(newStyle.extensions)
            {
                this.extensions = newStyle.extensions
            }
        }
        else
        {
            this.style = newStyle()
        }
    }

    apply=(props:{})=>
    {
        let extendedSyle = Object.assign({}, this.style)
        for(let prop in props)
        {
            if(props[prop])
                if(this.extensions[prop])
                    extendedSyle = Object.assign(extendedSyle, this.style[prop])      
        }
        return extendedSyle
    }

    
}

module.exports.Styles = Styles