import { Model, QueryInterface, DataTypes } from 'sequelize';
import IContent from '../../Interfaces/Model/Content';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IContent>>('contents', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('contents');
  },
};