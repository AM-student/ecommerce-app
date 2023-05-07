import { DataTypes } from 'sequelize';
import sequelize from '../sqlizeconfig.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discountPrice: {
    type: DataTypes.FLOAT,
  },
  images: {
    type: DataTypes.TEXT,
  
  },
  colors: {
    type: DataTypes.TEXT,
  },
  sizes: {
    type: DataTypes.TEXT,
  },
  tags: {
    type: DataTypes.STRING,
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    defaultValue:false,
  },
  stockAmount: {
    type: DataTypes.FLOAT,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

export default Product;
