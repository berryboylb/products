import React from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../../actions/products";
import PropTypes from "prop-types";
import { Query } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
type Props = {
  getAllProducts: any;
  currentPage: number;
  pageCount: number;
};

const Pager: React.FC<Props> = ({ getAllProducts, currentPage, pageCount }) => {
  const PreviousQueryParams: Query = {
    page: Math.max(0, currentPage - 1),
    pageSize: 36,
    searchText: "",
    productCategoryTypeIds: [],
    complianceTypeIds: [],
    sourceTypeIds: [],
  };

  const NextQueryParams: Query = {
    page: Math.min(pageCount, currentPage + 1),
    pageSize: 36,
    searchText: "",
    productCategoryTypeIds: [],
    complianceTypeIds: [],
    sourceTypeIds: [],
  };

  const previous = () => {
    getAllProducts(PreviousQueryParams);
  };

  const next = () => {
    getAllProducts(NextQueryParams);
  };
  return (
    <div className="flex justify-center items-center md:block ">
      <button
        className="inline-block text-base lg:text-sm text-primary bg-background border-none font-sora cursor-pointer p-2 mx-2 opacity-50"
        onClick={previous}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {Array.from(Array(pageCount)).map((pag: any, i: number) => (
        <button
          className={
            currentPage === i + 1
              ? "inline-block text-base lg:text-sm text-primary bg-background border-none font-sora cursor-pointer p-2 mx-2"
              : "inline-block text-base lg:text-sm text-primary bg-background border-none font-sora cursor-pointer p-2 mx-2 opacity-50"
          }
          onClick={() =>
            getAllProducts({
              page: i + 1,
              pageSize: 36,
              searchText: "",
              productCategoryTypeIds: [],
              complianceTypeIds: [],
              sourceTypeIds: [],
            })
          }
        >
          {i + 1}
        </button>
      ))}
      <button
        className="inline-block text-base lg:text-sm text-primary bg-background border-none font-sora cursor-pointer p-2 mx-2"
        onClick={next}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

Pager.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state: any) => ({
  currentPage: state.products.currentPage,
  pageCount: state.products.pageCount,
});

export default connect(mapStateToProps, { getAllProducts })(Pager);
