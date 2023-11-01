import { Model, QueryInterface, DataTypes } from 'sequelize';
import IGenre from '../../Interfaces/Model/Genre';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IGenre>>('genres', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('genres');
  },
};