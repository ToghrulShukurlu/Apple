import React from "react";
import "./style.scss";
import { cards } from "../../Data/data";
const Products = () => {
  return (
    <>
      <section className="products">
        <div className="container-fluid">
          <div className="row">
            {cards.slice(0, 3).map((item, index) => (
              <div className="col-lg-4">
                <div className={item.className}>
                  <img src={item.img} alt="" />
                  <div className="box-text">
                    <p>{item.title}</p>
                    <span>{item.desc}</span>
                    <h6>{item.info}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-2">
        {cards.slice(3,9).map((item, index) => (
          <div className={item.className}>
            <div className="box-txt">
              <p>{item.title}</p>
              <span>{item.desc}</span>
              <h6>{item.info}<i class="fa-solid fa-chevron-right"></i></h6>
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </section>


    </>
  );
};

export default Products;
