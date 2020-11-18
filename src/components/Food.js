import React, { Component } from "react";
import FoodItem from "./FoodItem";

class Food extends Component {
  state = {
    foods: [
      {
        id: "1",
        imageUrl:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        foodDesc: "Rice with Dal Makhni. Tadka Unleashed",
        foodDetails:
          "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
      },
      {
        id: "2",
        imageUrl:
          "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
        foodDesc: "Miss Ma ke haat ka rajma",
        foodDetails:
          "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
      },
      {
        id: "3",
        imageUrl:
          "https://images.unsplash.com/photo-1589786742305-f24d19eedbe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=382&q=80",
        foodDesc: "Tandoori flavored Alu Samosas",
        foodDetails:
          "Lorem ipsum text praesent tincidunt ipsum lipsum. What else?"
      },
      {
        id: "4",
        imageUrl:
          "https://images.unsplash.com/photo-1580064003296-29deb3521370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
        foodDesc: "Double Cheese Burst Paranthas",
        foodDetails: "Lorem ipsum text praesent tincidunt ipsum lipsum"
      }
    ]
  };
  render() {
    return (
      <div class="w3-row-padding w3-padding-16 w3-center" id="food">
        {this.state.foods.map(food => (
          <FoodItem key={food.id} food={food} />
        ))}
      </div>
    );
  }
}

export default Food;
