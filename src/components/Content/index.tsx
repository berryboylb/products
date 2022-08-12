import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Products from "../Products/";
import Pager from "../Products/Pager";
import { connect } from "react-redux";
import SearchFilter from "../Filter/SearchFilter";
import { useMediaQuery } from "react-responsive";

type Props = {
  products: { results: any[];};
};
const Index: React.FC<Props> = ({products: { results }}) => {
  const [box, setBox] = useState<boolean>(false);
  const toggleBox = (): void => setBox(!box);
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <div>
      <h1 className="text-primary font-semibold font-sora text-4xl">
        See dangerous and defective products
      </h1>
      <p className="my-4 font-sora font-seconadry font-light">
        When authorities in Denmark and the rest of the EU discover a dangerous
        or defective product, Danish authorities publish information about the
        dangerous and defective products.
      </p>

      <p className="my-4 font-sora font-seconadry font-light">
        The seriousness of errors and defects determines whether a product is
        dangerous or defective. You can be seriously injured by a dangerous
        product. A defective product has minor errors on the product or in the
        documentation, but it is not dangerous to use.
      </p>
      <div className="border-primary border my-3 rounded-lg">
        <p
          className={
            box
              ? "border-b border-primary flex items-center justify-between p-5 "
              : " flex items-center justify-between p-5"
          }
        >
          <Link
            className="block text-primary hover:underline text-base font-sora font-medium lg:text-sm hover:font-bold"
            to="/"
          >
            Are you looking for dangerous products from before July 10, 2021
          </Link>
          <FontAwesomeIcon
            onClick={toggleBox}
            className=" text-primary text-lg lg:text-base"
            icon={box ? faChevronUp : faChevronDown}
          />
        </p>

        {box && (
          <div className="mt-1 p-5">
            <p className="lg:text-sm">
              If you need to find information on dangerous products from before
              10 July 2021, you can view it on the{" "}
              <Link
                className="text-primary hover:underline text-base  font-sora font-bold "
                to="/"
              >
                Danish Safety Agency's archive for dangerous products.
              </Link>
            </p>
            <p className="font-sora font-seconadry mt-8 lg:text-sm">
              <Link
                className="block text-primary hover:underline text-base my-2  font-bold lg:text-sm"
                to="/"
              >
                About the products at produkter.dk
              </Link>
              <span>
                On this page you can see the dangerous and defective products
                from the Swedish Safety Agency. If you want to see dangerous and
                defective products from other authorities, you can get an
                overview of authorities that carry out market surveillance{" "}
                <Link
                  className="text-primary hover:underline text-base my-2  font-bold "
                  to="/"
                >
                  here.
                </Link>
              </span>
            </p>{" "}
            <p className="font-sora font-seconadry mt-8 lg:text-sm">
              <Link
                className="block text-primary hover:underline text-base my-2 font-bold "
                to="/"
              >
                Authorities do not test everything - and approve nothing
              </Link>{" "}
              <span>
                The Danish authorities do not approve products, nor do we test
                all products.
              </span>{" "}
              <span className="block mt-4">
                We carry out random checks and examine the products that
                citizens report because they seem dangerous. Therefore, it does
                not necessarily mean that a product is safe if you cannot find
                it on the site.
              </span>
            </p>
          </div>
        )}
      </div>
      {isMobile && (<SearchFilter/>)}
      <Products />
      {results.length > 0 && <Pager />}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.products,
});

export default connect(mapStateToProps, {})(Index);
