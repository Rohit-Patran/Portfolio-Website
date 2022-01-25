import "./ProductList.css"
import Product from "../product/Product";

const ProductList = ()=>{
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create and Inspire</h1>
                <p className="pl-desc">
                    Doing what moves me and keep me alive.
                </p>
            </div>
            <div className="pl-list">
                <Product/>
            </div>
        </div>
    );
}

export default ProductList;