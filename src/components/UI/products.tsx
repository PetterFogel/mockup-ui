import classes from "../../styles/products.module.css";

import cup from "../../assets/cup.jpg";
import tshirt from "../../assets/tshirt.jpg";
import badge from "../../assets/badge.jpg";

function Products() {
  return (
    <div className={classes.container}>
      <div className={classes.products}>
        <h3>Products</h3>
        <div className={classes.productHolder}>
          <div className={classes.imageHolder}>
            <img src={tshirt} alt="t-shirt" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.imageHolder}>
            <img src={cup} alt="cup" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.imageHolder}>
            <img src={badge} alt="badge" />
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className={classes.caption}>
        <p>
          The profit we get from our products will be invested in the research
          to save the Antarctic. <br /><br /> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ratione ipsa veniam ducimus accusantium sequi
          voluptatum perferendis dolore assumenda? Beatae provident quasi,
          voluptates vero deleniti eveniet rem, praesentium voluptas enim ipsum,
          iure placeat atque optio sint. Ipsa sint maxime vero corrupti!
        </p>
      </div>
    </div>
  );
}

export default Products;
