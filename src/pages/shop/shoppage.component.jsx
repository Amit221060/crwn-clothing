import React from 'react'
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { SHOP_DATA } from './shoppage.data';



class Shoppage extends React.Component {
    constructor(){
        super();
        this.state ={
            collections:SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                {
                this.state.collections.map(({id ,...othercollection}) =>(
                    <PreviewCollection key ={id} {...othercollection} />
                ))
                }
            </div>
        )
    }
}

export default Shoppage;
