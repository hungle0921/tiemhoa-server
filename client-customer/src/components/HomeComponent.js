import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from './SliderComponent';
import './HomeComponent.css';
import Footer from './Footer'; // Import thành phần footer

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }

  render() {
    const newprods = this.state.newprods.map((item) => {
      if (!item || !item._id) return null; // Bỏ qua các mục không hợp lệ
      return (
        <div key={item._id} className="inline">
          <figure>
            <Link to={'/product/' + item._id}>
              <img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt={item.name} />
            </Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });

    const hotprods = this.state.hotprods.map((item) => {
      if (!item || !item._id) return null; // Bỏ qua các mục không hợp lệ
      return (
        <div key={item._id} className="inline">
          <figure>
            <Link to={'/product/' + item._id}>
              <img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt={item.name} />
            </Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });

    return (
      <div>
        <Slider />
        <div style={{ height: 30 }} />
        <div className="align-center">
          <h2 className="text-center">NEW PRODUCTS</h2>
          <div className="new-products-container">
            {newprods}
          </div>
        </div>
        {this.state.hotprods.length > 0 ?
          <div className="align-center">
            <h2 className="text-center">HOT PRODUCTS</h2>
            <div className="new-products-container">
              {hotprods}
            </div>
          </div>
          : <div />}<br /><br />
          <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }

  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data.filter(item => item !== null); // Loại bỏ các giá trị null từ phản hồi API
      this.setState({ newprods: result });
    });
  }

  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data.filter(item => item !== null && item._id);
      console.log("Hot Products from API:", result); // Thêm log để kiểm tra dữ liệu
      this.setState({ hotprods: result });
    });
  }
}

export default Home;
