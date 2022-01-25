import "./Product.css"


const Product = ()=>{
    return (
        <div className="product">
            <div className="p-1 item">
                <img src="https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png" alt="product-pic" className="p-img" />
                <h3 className="p-title">Web development</h3>
                <p className="p-desc">
                    Developing websites and Web applications.Creating applications for web, Robust in nature.
                </p>
            </div>
            <div className="p-2 item">
                <img src="https://www.dreamhost.com/blog/wp-content/uploads/2018/09/elements-web-design-opt-750x498.jpg" alt="product-pic" className="p-img" />
                <h3 className="p-title">Web design</h3>
                <p className="p-desc">
                    Making things look the best they can be.Bringing things together in the best possible manner.
                </p>
            </div>
            <div className="p-3 item">
                <img src="https://marsner.com/wp-content/uploads/why-custom-software-development.jpeg" alt="product-pic" className="p-img" />
                <h3 className="p-title">Software development</h3>
                <p className="p-desc">
                    Creating Softwares serving solutions to problems.
                </p>
            </div>
            <div className="p-4 item">
                <img src="https://thegadgetflow.com/wp-content/uploads/2019/11/The-best-gifts-and-gadgets-for-any-tech-enthusiast-1200x675.jpg" alt="product-pic" className="p-img" />
                <h3 className="p-title">Tech Enthusiast</h3>
                <p className="p-desc">
                    Ever ready and keen about new tech stuff.
                </p>
            </div>
        </div>
    );
}

export default Product;