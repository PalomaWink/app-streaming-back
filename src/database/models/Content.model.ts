import { DataTypes, Model, ModelDefined, Optional } from "sequelize";
import db from ".";
import IContent from "../../Interfaces/Model/Content";

type ContentInputTableField = Optional<IContent, 'id'>
type ContentModelType = ModelDefined<IContent, ContentInputTableField>

const ContentModel: ContentModelType = db.define<Model<IContent, ContentInputTableField>>(
  'Content', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'contents'
  }
)

export default ContentModel;