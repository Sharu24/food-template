import React, { Component } from "react";

class FoodItem extends Component {
  render() {
    const { id, imageUrl, foodDesc, foodDetails } = this.props.food;
    console.log(this.props);
    return (
      <div className="w3-quarter">
        <img src={imageUrl} alt="Sandwich" style={{ width: "100%" }} />
        <h3>{foodDesc}</h3>
        <p>{foodDetails}</p>
      </div>
    );
  }
}

export default FoodItem;
