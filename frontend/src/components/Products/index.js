import React from 'react'
import Content from './Content'
import Control from './Control'

const Products = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-8">
        <Content />
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <Control />
      </div>
    </div>
  )
}

export default Products
