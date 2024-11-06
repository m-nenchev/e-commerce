import './DescriptionBox.css';
const DescriptionBox = () =>{
    return(
        <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
          </div>
          <div className="descriptionbox-description">
            <p>An e-commerse website is an onlaine platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individual can showcase their products, interact with custumers, and conduct transactions without the need for a phisical presence. </p>
            <p>E-commerse websites typically display products or services along with detailed description, images, prices, and any avaliable variations(e.g.size,colors). Each product usually has its own dedicated page with relevant information.</p>
          </div>
        </div>
    )
}
export default DescriptionBox;