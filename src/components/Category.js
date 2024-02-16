import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class Category extends Component {
  //   constructor(props) {
  //     super(props);
  //     state: {
  //     }  bunlara gerek kalmadan da reacttta direk this.props.title ile ağırabiiliyoruz
  //   }

  // veri yönetimi için iki yöntem
  // props : bir componentten diğerinee tasınan data , değişken vs
  // state : bir componentin datası
  //******************************************************************* */
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     categories: [
  //       { categoryId: 1, categoryName: "Bevegares" },
  //       { categoryId: 2, categoryName: "Condiment" },
  //       {},
  //     ],
  //   };
  // }
  // yukardaki gibi consructor kullanmadan bile asagıdaki gibi state kullanabileiirz

  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
