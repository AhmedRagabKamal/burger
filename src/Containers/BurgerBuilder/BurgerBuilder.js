import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.6,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  ingredientAdded = type => {
    const { ingredients, totalPrice } = this.state;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] += 1;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: totalPrice + INGREDIENTS_PRICE[type]
    });
    this.updatePurchasable(updatedIngredients);
  };
  ingredientRemove = type => {
    const { ingredients, totalPrice } = this.state;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] -= 1;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: totalPrice - INGREDIENTS_PRICE[type]
    });
    this.updatePurchasable(updatedIngredients);
  };

  updatePurchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((acc, el) => {
        return (acc += el);
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  render() {
    const disabledIngredients = {
      ...this.state.ingredients
    };

    for (var ingredient in disabledIngredients) {
      disabledIngredients[ingredient] = disabledIngredients[ingredient] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ingredientAdded={this.ingredientAdded}
          ingredientRemove={this.ingredientRemove}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
