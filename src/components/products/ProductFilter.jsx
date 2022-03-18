import React from "react";
import "./product.css";
const ProductFilter = () => {
  return (
    <aside className="flex-col px-2 sidebar-filter">
      <div>
        <p className="text-gray h5">Categories</p>
        <ul className="list-unstyled">
          <li>
            <label>
              <input type="checkbox" />
              <span>Eyeglasses</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Computer Glasses</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Reading Glasses</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Contact Lenses</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Power Sunglasses</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span> Sunglasses</span>
            </label>
          </li>
        </ul>
      </div>
      {/* TODO:  */}
      <div>
        {/* <p className="text-gray h5">Fram TYpe</p>
        <ul className="list-unstyled">
          <li>
            <label>
              <input type="checkbox" />
              <span>Full Rim</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Half Rim</span>
            </label>
          </li>
        </ul> */}
      </div>

      {/* TODO:  */}
      <div>
        {/* <p className="text-gray h5">Frame Shape</p>
        <ul className="list-unstyled">
          <li>
            <label>
              <input type="checkbox" />
              <span>Rectangle</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Cat Eye</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Square</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Round</span>
            </label>
          </li>
        </ul> */}
      </div>

      <div>
        <p className="text-gray h5">Price Range</p>

        <input type="range" name="cowbell" min="0" max="10000" step="500" className="range-secondary range" id="price-range"/>
        <label htmlFor="price-range"> 1000 </label>
        <ul className="list-unstyled">
          <li>
            <label>
              <input type="checkbox" />
              <span>Rs.0 - Rs.999</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Rs.2000 - Rs.2999</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Rs.3000 - Rs.3999</span>
            </label>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-gray h5">Ratings</p>
        <ul className="list-unstyled">
          <li>
            <label>
              <input type="checkbox" />
              <span>4 stars & above</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>3 stars & above</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>2 stars & above</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>1 star & above</span>
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ProductFilter;
