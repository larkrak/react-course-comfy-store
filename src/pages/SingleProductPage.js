import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const productsContext = useProductsContext();

  useEffect(() => {
    productsContext.festSingleProduct(`${url}${params.id}`);
  }, [params.id]);

  useEffect(() => {
    if (productsContext.single_product_error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });

  if (productsContext.single_product_loading === true) {
    return <Loading></Loading>;
  }

  if (productsContext.single_product_error === true) {
    return <Error></Error>;
  }
  return (
    <Wrapper>
      <PageHero
        title={productsContext.single_product.name}
        product={productsContext.single_product}
      ></PageHero>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          Back to products
        </Link>
        <div className="product-center">
          <ProductImages
            images={productsContext.single_product.images}
          ></ProductImages>
          <section className="content">
            <h2>{productsContext.single_product.name}</h2>
            <Stars
              stars={productsContext.single_product.stars}
              reviews={productsContext.single_product.reviews}
            ></Stars>
            <h5 className="price">
              {formatPrice(productsContext.single_product.price)}
            </h5>
            <p className="desc">{productsContext.single_product.description}</p>
            <p className="info">
              <span>Available: </span>
              {productsContext.single_product.stock > 0
                ? "In stock"
                : "Out of stock"}
            </p>

            <p className="info">
              <span>SKU:</span>
              {productsContext.single_product.id}
            </p>

            <p className="info">
              <span>Available: </span>
              {productsContext.single_product.company}
            </p>
            <hr></hr>
            {productsContext.single_product.stock > 0 && (
              <AddToCart product={productsContext.single_product}></AddToCart>
            )}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
export default SingleProductPage;
