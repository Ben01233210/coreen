import classes from './ProductsList.module.css'
import Product from './Product'


const Products_Test = [
    {
      id: 1,
      name: "t-Shirt one",
      image: "https://www.berneouterwear.com/mm5/graphics/00000001/bsm38_m_sla.jpg",
      description: "Hi i am a T-shirt lol"
    },
    {
      id: 2,
      name: "t-Shirt tow",
      image: "https://rlv.zcache.com/1_8_4_3_6_5_7_2_in_that_order_t_shirt-rae0eb54eb94f4f72a59bad15c9c835f3_k2gm8_540.jpg",
      description: "Hi i am a T-shirt lol oh hi"
    },
    {
      id: 3,
      name: "t-Shirt 3",
      image: "https://www.berneouterwear.com/mm5/graphics/00000001/bsm38_m_sla.jpg",
      description: "Hi i am a T-shirt lol i am cool"
    },
    {
      id: 4,
      name: "t-Shirt 4",
      image: "https://www.berneouterwear.com/mm5/graphics/00000001/bsm38_m_sla.jpg",
      description: "Hi i am a T-shirt 4 lol an i am pretty"
    }
  ]




function ProductsList() {
    return (
        <div className={classes.products}>
            {Products_Test.map((products) => {
                return <Product args={products} key={products.id}/>
            })}
        </div>
    );
}
export default ProductsList;