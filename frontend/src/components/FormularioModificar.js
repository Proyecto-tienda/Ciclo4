import React, { Fragment } from 'react';
import {Button} from "react-bootstrap";


const ModificarProduct = () => {
 

return (
   <Fragment>
   <productsJson title={'Modificar Producto'} />
 <div className="row">   
    <div className="col-12 col-md-3">

    </div>

 <div className="col-12 col-md-7">
    <Fragment>
 <div className="wrapper">
  <form className="col-md-11"  encType='multipart/form-data'>
 <h1 className="mb-4">Modificar Producto</h1>

 <div className="form-group">
    <label htmlFor="name_field">Nombre</label>
    <input
        type="text"
        id="name_field"
        className="form-control"                             
/>
</div>

<div className="form-group">
 <label htmlFor="price_field">Precio</label>
    <input
        type="text"
        id="price_field"
        className="form-control"                                    
/>
</div>

 <div className="form-group">
   <label htmlFor="description_field">Descripcion</label>
   <textarea className="form-control" id="description_field" rows="8"></textarea>
</div>

<div className="form-group">
   <label htmlFor="category_field">Categoria</label>
   <select className="form-control" id="category_field">

</select></div>

<div className="form-group">
 <label htmlFor="stock_field">Stock</label>
    <input
        type="number"
        id="stock_field"
        className="form-control"
        
 /></div>

<div className='form-group'>
  <label>Imagenes</label>

<div className='custom-file'>
    <input
        type='file'
        name='product_images'
        className='custom-file-input'
        id='customFile'
        multiple
/>
    <label className='custom-file-label' htmlFor='customFile'>
         Seleccione Imagen
</label>
</div></div>

 <Button type='sudmit' className="btn btn-primary btn-block mt-3"><i className=" m-1 fa fa-check"></i>Guardar</Button>

</form>
</div>
  </Fragment>
  </div>
 </div>

</Fragment>
)
}

export default ModificarProduct