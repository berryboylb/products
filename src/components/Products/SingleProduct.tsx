import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
type ProductType = {
  id: number;
  name: string;
  name_d: any;
};
type Category = {
  id: number;
  productCategoryTypeId: number;
  productCategoryType: ProductType;
};
type ProductNumbers = {
  id: number;
  number: string;
  productNumberType: { id: number; name: string };
};

type ProductPictures = {
  id: number;
  pictureId: number;
  source: string;
  productPictureCategory: { id: number; name: string };
};

type Responsible = {
  id: number;
  pictureId: number;
  resposibilityTypeId: number;
  companyId: number;
  responsibilityType: { id: number; name: string };
  comapny: { id: number; name: string };
};
export type Product = {
  id: number;
  reason: string;
  name: string;
  publicDate: Date;
  vendors: any;
  sourceProductId: string;
  complianceType: ProductType;
  sourceType: { id: number; name: string };
  fileClassGroup: ProductType;
  findingType: ProductType;
  reaction: ProductType;
  productCategoryRelations: Category[];
  productCategoryTypes: any;
  productNumbers: ProductNumbers[];
  productPictures: ProductPictures[];
  responsibleParties: Responsible[];
  links: any[];
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const SingleProduct = ({ product }: any) => {
  return (
    <div>
      <Carousel responsive={responsive} swipeable={true} draggable={true}>
        {product.productPictures &&
          product.productPictures.length > 0 &&
          product.productPictures.map((item: any) => (
            <img
            className=" h-[300px] md:h-[250px] w-full object-cover"
              key={item.id}
              src={`https://pfp-public-productdb-api.azurewebsites.net/api/picture/${item.pictureId}`}
              alt={product.name ? product.name : "No name"}
            />
          ))}
      </Carousel>
      <h3 className="text-primary my-2 text-base mt-5 font-sora font-medium lg:text-sm">{product.name ? product.name : "No name"}</h3>
      <div className="text-seconadry my-2 text-xs my-2 font-sora font-medium lg:text-[0.6rem] mr-[5px]"> <span>Category:</span>
        {product.productCategoryRelations &&
          product.productCategoryRelations.length > 0 && (
            <>
              {product.productCategoryRelations.map((item: any) => (
                <span className="font-sora inline font-thin font-sm lg:text-xs">{item.productCategoryType.name}</span>
              ))}
            </>
          )}
      </div>
    </div>
  );
};

export default SingleProduct;
