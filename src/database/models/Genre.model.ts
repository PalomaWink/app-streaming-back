import { DataTypes, Model, ModelDefined, Optional } from "sequelize";
import db from ".";
import IGenre from "../../Interface/Model/Genre";

type GenreInputTableField = Optional<IGenre, 'id'>
type GenreModelType = ModelDefined<IGenre, GenreInputTableField>

const GenreModel: GenreModelType = db.define<Model<IGenre, GenreInputTableField>>(
  'Genre', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'genres'
  }
)

export default GenreModel;