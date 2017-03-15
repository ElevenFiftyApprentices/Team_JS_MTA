'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Shoppinglist Schema
 */
var ShoppinglistSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please provide Shopping List name',
    trim: true
  },
  color: {
    type: String,
    required: 'Please provide Shopping List color',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  item: {
    name:{
      type: String,
      default: ''
    },
    priority:{
      type: String,
      default: ''
    },
    quantity:{
      type: Number,
      default: 1
    },
    isChecked:{
      type: Boolean,
      default: false
    }
  },
  items: {
    type: [],
    default: []
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Shoppinglist', ShoppinglistSchema);
