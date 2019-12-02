import React from "react";

interface SeaProps {
    orientation: any
    tradingPosts: any
}
export default class SeaBorder extends React.Component<SeaProps> {
    tradingPosts = []
    orientation = []

    constructor(props: any) {
        super(props)
        this.orientation = props.orientation
        this.tradingPosts = props.tradingPosts
    }

    render() {
        return ('')
    }
}