import React from 'react'
import './preview-collection.style.scss'
import Collection from '../collections-item/collection-item.component';


const PreviewCollection = ({title,items})=>
     (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className= 'preview' >
              {
                  items.filter((item,index)=> index<4)
                  .map(({id , ...otherCollectionProps})=>(
                      <Collection key={id} {...otherCollectionProps}></Collection>
                  ))
              }
            </div>
            
        </div>
    )

export default PreviewCollection;