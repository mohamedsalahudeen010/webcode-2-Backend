import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
    },
    varients: {
      type: [String],
      required: true,
    },
    //     Choose a pizza base from 5 options.

    base: {
      type: [
        {
          small: { type: Number },
          medium: { type: Number },
          large: { type: Number },
          extraLarge: { type: Number },
          familyPizza: { type: Number },
        },
      ],
    },
    // Choose a sauce from 5 options.
    sauceVarients: {
      type: [String],
      required: true,
    },
    sauce: {
      type: [
        {
          tomatoSauce: { type: Number },
          chillieSauce: { type: Number },
          tandooriSauce: { type: Number },
          pesto: { type: Number },
          mayonnaiseSauce: { type: Number },
        },
      ],
    },
    // Choose a cheese type from 4 options.
    cheeseVarients: {
      type: [String],
      required: true,
    },
    cheese: {
      type: [
        {
          mozzarella: { type: Number },
          gorgonzola: { type: Number },
          romano: { type: Number },
          parmesan: { type: Number },
        },
      ],
    },

    // Choose meat from many options.
    meatVarients: {
      type: [String],
      required: true,
    },
    meat: {
      type: [
        {
          bacon: { type: Number },
          fishBalls: { type: Number },
          pepperoni: { type: Number },
          chicken: { type: Number },
          beef: { type: Number },
          prawn: { type: Number },
          ham: { type: Number },
          salami: { type: Number },
        },
      ],
    },

    // Choose veggies from many options.
    vegVarients: {
      type: [String],
      required: true,
    },
    veggies: {
      type: [
        {
          spinach: { type: Number },
          cucumber: { type: Number },
          mushroom: { type: Number },
          tomatoes: { type: Number },
          onions: { type: Number },
          zucchini: { type: Number },
          eggPlants: { type: Number },
          olives: { type: Number },
          cherryTomatoes: { type: Number },
        },
      ],
    },
    image: {
      type: String,
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("products", ProductSchema);

export default Products;
