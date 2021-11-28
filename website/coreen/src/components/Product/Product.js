import classes from './Product.module.css'

function Product(props){
    return (
        <div className={classes.product}>
            
            <img src={props.args.image} alt="" width="100%"/>
            <div className={classes.info}>
                <h2>{props.args.name}</h2>
                <p>{props.args.description}</p>

            </div>
        </div>
    );
}

export default Product;