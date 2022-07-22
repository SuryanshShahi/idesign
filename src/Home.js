import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import StarsRating from "stars-rating";

function Home() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState(items);
  const [cart, setCart] = useState([]);
  const [isActive, setActive] = useState(false);

  const getData = () => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setItems(res.data.products),
          setTimeout(() => {
            document.getElementById("click").click();
          }, 100);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const lowtohigh = (pri) => {
    const lth = items.sort((a, b) => a - b);
    console.log(items.price);
    setData(lth);
  };
  const stockAlert = (stockA) => {
    if (stockA < 50) {
      swal("", "hurry! only a few items left", "warning", {
        button: false,
        timer: 2000,
      });
    }
  };
  const filterByPrice = (price) => {
    const updatedPrice = items.filter((e) => {
      if (price === 1) {
        if (e.price < 50) {
          return e.price;
        }
      }
      if (price === 2) {
        if (50 <= e.price && e.price < 100) {
          return e.price;
        }
      }
      if (price === 3) {
        if (100 <= e.price && e.price < 200) {
          return e.price;
        }
      }
      if (price === 4) {
        if (200 <= e.price && e.price < 400) {
          return e.price;
        }
      }
      if (price === 5) {
        if (400 <= e.price && e.price < 800) {
          return e.price;
        }
      }
      if (price === 6) {
        if (800 <= e.price && e.price < 1600) {
          return e.price;
        }
      }
      if (price === 7) {
        if (e.price > 1600) {
          return e.price;
        }
      }
    });
    setData(updatedPrice);
  };

  const filterData = (categ) => {
    const updatedItems = items.filter((e) => {
      return e.category === categ;
    });
    console.log(updatedItems);
    setData(updatedItems);
  };

  const addtobag = (id) => {
    const updatedItems = items.filter((e) => {
      return e.id === id;
    });
    console.log(updatedItems);
    setCart(updatedItems);
  };

  const sortByDiscount = () => {
    const hello = [...data].sort((a, b) => {
      return a.discountPercentage - b.discountPercentage;
    });
    console.log(hello);
    setData(hello);
  };
  const sortByPrice = () => {
    const hello = [...data].sort((a, b) => {
      return a.price - b.price;
    });
    console.log(hello);
    setData(hello);
  };
  const sortByRating = () => {
    const hello = [...data].sort((a, b) => {
      return a.rating - b.rating;
    });
    console.log(hello);
    setData(hello);
  };

  return (
    <section>
      <div id="LandingPage" style={{ marginTop: "50px" }}>
        <div className="justify-content-end d-flex mr-5">
          <div
            className="fa fa-shopping-bag fa-2x"
            style={{ cursor: "pointer" }}
            data-target="#mymodal"
            data-toggle="modal"
          >
            &nbsp;Cart
          </div>
        </div>
        <div
          className="pt-3 sidebar1"
          style={{ borderRight: "1px solid rgb(105 110 121 / 33%)" }}
        >
          <div
            className="text-center pt-5"
            style={{ fontWeight: "500", fontSize: "30px" }}
          >
            Search By Category
          </div>
          <div className="justify-content-center d-flex py-lg-3">
            <div
              className="container nav nav-tabs justify-content-center d-flex py-lg-4 pt-4"
              style={{ boxShadow: "0px 5px 7px -3px #80808075" }}
            >
              <div
                className="btn btn-danger mb-2 active mx-2 filterbtn"
                id="click"
                type="button"
                data-toggle="tab"
                onClick={() => setData(items)}
              >
                All
              </div>

              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("smartphones")}
              >
                smartphones
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("skincare")}
              >
                skincare
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("laptops")}
              >
                laptops
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("fragrances")}
              >
                fragrances
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("groceries")}
              >
                groceries
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("home-decoration")}
              >
                home-decoration
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("furniture")}
              >
                furniture
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("tops")}
              >
                tops
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("womens-dresses")}
              >
                womens-dresses
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("womens-shoes")}
              >
                womens-shoes
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("mens-shirts")}
              >
                mens-shirts
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("mens-shoes")}
              >
                mens-shoes
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("mens-watches")}
              >
                mens-watches
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("womens-watches")}
              >
                womens-watches
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("womens-bags")}
              >
                womens-bags
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("womens-jewellery")}
              >
                womens-jewellery
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("sunglasses")}
              >
                sunglasses
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("automotive")}
              >
                automotive
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("motorcycle")}
              >
                motorcycle
              </div>
              <div
                className="btn btn-danger mb-2 mx-2 filterbtn"
                type="button"
                data-toggle="tab"
                onClick={() => filterData("lighting")}
              >
                lighting
              </div>
            </div>
          </div>

          <div className="container">
            <b>Price Range:</b>
            <div className=" justify-content-center d-flex">
              <div
                className="btn btn-danger mx-2"
                onClick={() => sortByDiscount()}
              >
                sortByDiscount
              </div>
              <div
                className="btn btn-danger mx-2"
                onClick={() => sortByPrice()}
              >
                sortByPrice
              </div>
              <div
                className="btn btn-danger mx-2"
                onClick={() => sortByRating()}
              >
                sortByRating
              </div>
            </div>
            <div className="" style={{ fontWeight: "500" }}>
              <div className="d-flex">
                <input
                  type="radio"
                  name="radio"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByPrice(1)}
                  className="form-check mr-2"
                />
                $0 - $50
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  name="radio"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByPrice(2)}
                  className="form-check mr-2"
                />
                $50 - $100
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  name="radio"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByPrice(3)}
                  className="form-check mr-2"
                />
                $100 - $200
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  name="radio"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByPrice(4)}
                  className="form-check mr-2"
                />
                $200 - $400
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  name="radio"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByPrice(5)}
                  className="form-check mr-2"
                />
                $400 - $800
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  name="radio"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByPrice(6)}
                  className="form-check mr-2"
                />
                $800 - $1600
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  name="radio"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByPrice(7)}
                  className="form-check mr-2"
                />
                Above $1600
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0 pt-4 pb-5">
          <div
            className="container p-0"
            style={{ overflowY: "scroll", height: "100vh" }}
          >
            <div className="row gx-0">
              {data.map((e) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={e.id}>
                    <div
                      className="card carscard text-decoration-none mx-3 mt-1"
                      data-bs-toggle="tooltip"
                      //   title={e.title}
                    >
                      <NavLink
                        target="_blank"
                        to={`/products/${e.id}`}
                        className="justify-content-center d-flex"
                      >
                        <div>
                          <img
                            src={e.thumbnail}
                            alt="menuPic"
                            height="250px"
                            onClick={() => lowtohigh(e.price)}
                            className="card-img-top p-3"
                          />
                        </div>
                      </NavLink>

                      <div className="details text-dark bg-white pt-2 px-2">
                        <div className="justify-content-center d-flex align-items-center wishlist">
                          <div
                            className={
                              !isActive
                                ? "fa fa-shopping-bag py-2"
                                : "fa fa-shopping-bag text-danger py-2"
                            }
                            onClick={() => {
                              setActive(true), addtobag(e.id);
                            }}
                          >
                            &nbsp;&nbsp;ADD TO CART
                          </div>
                        </div>
                        <div
                          className="pt-2"
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "black",
                          }}
                        >
                          {e.brand}
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "lighter",
                            color: "grey",
                          }}
                        >
                          {e.description}
                        </div>
                        <div className="pt-1">
                          <span
                            style={{
                              fontWeight: "500",
                            }}
                          >
                            $ {e.price}
                          </span>
                          <span
                            className="text-success"
                            style={{
                              fontSize: "12px",
                              fontWeight: "500",
                            }}
                          >
                            &nbsp;&nbsp;{e.discountPercentage}% DISCOUNT
                          </span>
                        </div>
                        <div className="justify-content-center d-flex my-3">
                          <div
                            className="btn btn-danger rounded-pill px-5 border-0"
                            onClick={() => stockAlert(e.stock)}
                          >
                            Buy Now
                          </div>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="font-weight-bolder my-2">
                          <span style={{ fontWeight: "500" }}>{e.title}</span>

                          <div
                            style={{
                              fontSize: "14px",
                              fontWeight: "lighter",
                              color: "grey",
                            }}
                          >
                            {e.category}
                          </div>

                          <div className="pt-1">
                            <span
                              style={{
                                fontWeight: "500",
                              }}
                            >
                              $ {e.price}
                            </span>
                            <span
                              className="text-success"
                              style={{
                                fontWeight: "500",
                                fontSize: "12px",
                              }}
                            >
                              &nbsp;&nbsp;{e.discountPercentage}% DISCOUNT
                            </span>
                          </div>
                          <div
                            className="text-danger mt-2"
                            style={{ fontSize: "14px" }}
                          >
                            {e.stock} items left
                          </div>
                          <div
                            className="d-flex align-items-center"
                            style={{ fontSize: "14px" }}
                          >
                            {e.rating}&nbsp;
                            <StarsRating
                              className=""
                              count={5}
                              size={20}
                              value={e.rating}
                              edit={false}
                              color2={"#ffd700"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade " id="mymodal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content modalcompare">
            {cart.map((e) => {
              return (
                <div className="px-lg-3" key={e.id}>
                  <div className="modal-header">
                    <h1>
                      ECOMM
                    </h1>
                    <div
                      className="close pr-lg-2 mr-lg-1 pr-md-4 pr-sm-4 pr-4 pt-4 "
                      data-dismiss="modal"
                    >
                      &times;
                    </div>
                  </div>
                  <h4 className="text-center my-4 font-weight-bold">
                    Welcome to{" "}
                    <span className="text-danger font-weight-bold">Cart</span>
                  </h4>
                  <div
                      className="card carscard text-decoration-none mx-3 mt-1"
                      data-bs-toggle="tooltip"
                      //   title={e.title}
                    >
                      <NavLink
                        target="_blank"
                        to={`/products/${e.id}`}
                        className="justify-content-center d-flex"
                      >
                        <div>
                          <img
                            src={e.thumbnail}
                            alt="menuPic"
                            height="250px"
                            onClick={() => lowtohigh(e.price)}
                            className="card-img-top p-3"
                          />
                        </div>
                      </NavLink>

                      <div className="details text-dark bg-white pt-2 px-2">
                        <div className="justify-content-center d-flex align-items-center wishlist">
                          <div
                            className={
                              !isActive
                                ? "fa fa-shopping-bag py-2"
                                : "fa fa-shopping-bag text-danger py-2"
                            }
                            onClick={() => {
                              setActive(true), addtobag(e.id);
                            }}
                          >
                            &nbsp;&nbsp;ADD TO CART
                          </div>
                        </div>
                        <div
                          className="pt-2"
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "black",
                          }}
                        >
                          {e.brand}
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "lighter",
                            color: "grey",
                          }}
                        >
                          {e.description}
                        </div>
                        <div className="pt-1">
                          <span
                            style={{
                              fontWeight: "500",
                            }}
                          >
                            $ {e.price}
                          </span>
                          <span
                            className="text-success"
                            style={{
                              fontSize: "12px",
                              fontWeight: "500",
                            }}
                          >
                            &nbsp;&nbsp;{e.discountPercentage}% DISCOUNT
                          </span>
                        </div>
                        <div className="justify-content-center d-flex my-3">
                          <div
                            className="btn btn-danger rounded-pill px-5 border-0"
                            onClick={() => stockAlert(e.stock)}
                          >
                            Buy Now
                          </div>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="font-weight-bolder my-2">
                          <span style={{ fontWeight: "500" }}>{e.title}</span>

                          <div
                            style={{
                              fontSize: "14px",
                              fontWeight: "lighter",
                              color: "grey",
                            }}
                          >
                            {e.category}
                          </div>

                          <div className="pt-1">
                            <span
                              style={{
                                fontWeight: "500",
                              }}
                            >
                              $ {e.price}
                            </span>
                            <span
                              className="text-success"
                              style={{
                                fontWeight: "500",
                                fontSize: "12px",
                              }}
                            >
                              &nbsp;&nbsp;{e.discountPercentage}% DISCOUNT
                            </span>
                          </div>
                          <div
                            className="text-danger mt-2"
                            style={{ fontSize: "14px" }}
                          >
                            {e.stock} items left
                          </div>
                          <div
                            className="d-flex align-items-center"
                            style={{ fontSize: "14px" }}
                          >
                            {e.rating}&nbsp;
                            <StarsRating
                              className=""
                              count={5}
                              size={20}
                              value={e.rating}
                              edit={false}
                              color2={"#ffd700"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
