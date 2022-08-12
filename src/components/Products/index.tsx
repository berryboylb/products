import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getAllProducts } from "../../actions/products";
import SingleProduct from "./SingleProduct";

type Props = {
  getAllProducts: any;
  products: { results: any[]; loading: boolean };
};

export type Query = {
  page: number;
  pageSize: number;
  searchText: string;
  productCategoryTypeIds: number[];
  complianceTypeIds: number[];
  sourceTypeIds: number[];
};

const Index: React.FC<Props> = ({
  getAllProducts,
  products: { results, loading },
}) => {
  useEffect(() => {
    //get the product on render
    const queryParams: Query = {
      page: 1,
      pageSize: 36,
      searchText: "",
      productCategoryTypeIds: [],
      complianceTypeIds: [],
      sourceTypeIds: [],
    };
    getAllProducts(queryParams);
  }, [getAllProducts]);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      {results.length > 0 ? (
        <div className="grid gap-4 grid-cols-3 md:grid-cols-2 mt-8">
          {results.map((item) => (
            <SingleProduct key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div>
          <h3>We did not find any products for your search on</h3>
          <h1>"yoke"</h1>
          <p>
            Your search in the list of dangerous and defective products returned
            no results!
          </p>
          <p>
            This means that we have not registered any problems with the product
            you have searched for.
          </p>
          <p>
            Please note that this does not mean that we have approved the
            product.
          </p>
          <p>
            We do not approve products, but we do random checks to check the
            safety of the individual selected products.
          </p>
        </div>
      )}
    </div>
  );
};
Index.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getAllProducts })(Index);
