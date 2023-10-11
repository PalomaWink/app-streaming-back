import { DataTypes, Model, ModelDefined, Optional } from "sequelize";
import db from ".";
import IContentGenre from "../../Interface/Model/ContentGenre";
import ContentModel from "./Content.model";
import GenreModel from "./Genre.model";

type ContentGenreModel = ModelDefined<IContentGenre, IContentGenre>

const ContentGenre = db.define<Model<IContentGenre, ContentGenreModel>>(
  'ContentGenre', {
    contentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'content_id',
      references: {
        model: ContentModel,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    genreId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'genre_id',
      references: {
        model: GenreModel,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    timestamps: false,
    tableName: 'content_genres'
  }
)

export default ContentGenre;