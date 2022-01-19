import React, { Component } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import shopData from './shopData'

export default class Shoppage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopData: shopData
        }
    }
    render() {
        const {shopData} = this.state;
        return (
            <div>
                <h1>Shop</h1>
                {shopData.map(({id, ...otherCollection}) => 
                    <CollectionPreview 
                        key={id}
                        {...otherCollection} />)}
            </div>
        )
    }
}
