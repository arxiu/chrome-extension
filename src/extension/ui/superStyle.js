// @flow
export default class SuperStyle {

    style: {}

    constructor(newStyle:{}) {
        this.style = newStyle
    }

    apply = (props: {}) => {
        let extendedSyle = Object.assign({}, this.style)
        for (let prop in props) {
            if (props[prop]) {
                if (this.style[prop]) {
                    Object.assign(extendedSyle, this.style[prop])
                }
            }
        }
        return extendedSyle
    }
}