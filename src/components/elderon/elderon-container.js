import React, { Component } from "react";
// import axios from "axios";
// import elderonItem from "./elderon-item";

export default class ElderonContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to Elderon",
      isLoading: false,
      data: []
    };
  
    this.handleFilter = this.handleFilter.bind(this);
  }


  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

//   getelderonItems() {
//     axios.get("https://subdom.devcamp.space/elderon/elderon_items")
//     .then(response => {
//       this.setState({
//         data: response.data.elderon_items
//       })
//     })
//     .catch(error => {
//       console.log(error)
//     });
//   }

  elderonItems() {
    return this.state.data.map(item => {
      
      return <elderonItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getelderonItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Elderon isLoading...</div>;
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <div className="elderon-items-container">{this.elderonItems()}</div>  
      </div>
    );
  }
}