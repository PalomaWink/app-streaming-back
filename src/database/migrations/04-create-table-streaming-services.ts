import { Model, QueryInterface, DataTypes } from 'sequelize';
import IStreamingService from '../../Interfaces/Model/StreamingService';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IStreamingService>>('streaming_services', {
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
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('streaming_services');
  },
};