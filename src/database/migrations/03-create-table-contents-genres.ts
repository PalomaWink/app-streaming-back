import { Model, QueryInterface, DataTypes } from 'sequelize';
import IContentGenre from '../../Interfaces/Model/ContentGenre';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IContentGenre>>('contents_genres', {
      contentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'contents',
          key: 'id',
        },
      },
      genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'genres',
          key: 'id',
        },
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('contents_genres');
  },
};