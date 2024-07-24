import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import './ProductComponent.css';
import Footer from './Footer'; // Import thành phần footer

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sort: 'default',
    };
  }
  render() {
    const prods = this.state.products.map((item) => {
      return (
        <div key={item._id} className="product">
          <figure>
            <Link to={'/product/' + item._id}>
              <img src={"data:image/jpg;base64," + item.image} alt={item.name} />
            </Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });

    return (
    <div>
      <div className="products-container text-center">
        <h2 className="text-center">DANH SÁCH SẢN PHẨM</h2>
        <div>
          <select value={this.state.sort} onChange={(e) => {
            this.setState({ sort: e.target.value });
            this.cmbSortChange(e.target.value);
          }}>
            <option value="default">------Sắp xếp theo------</option>
            <option value="nameASC">Tên (a → z)</option>
            <option value="nameDESC">Tên (z → a)</option>
            <option value="priceASC">Giá (thấp → cao)</option>
            <option value="priceDESC">Giá (cao → thấp)</option>
          </select>
        </div><br /><br />
        <div className="products-grid">
          {prods}
        </div>
      </div><br /><br />
      <Footer />
    </div>
      
    );
  }
  // event-handlers
  cmbSortChange(sort) {
    if (sort === 'nameASC') {
      this.state.products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'nameDESC') {
      this.state.products.sort((a, b) => a.name.localeCompare(a.name));
    } else if (sort === 'priceASC') {
      this.state.products.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceDESC') {
      this.state.products.sort((a, b) => b.price - a.price);
    }
  }
  componentDidMount() { // first: /product/...
    const params = this.props.params;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  componentDidUpdate(prevProps) { // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }

  
  // apis
  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }

  // apis
  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }

}
export default withRouter(Product);