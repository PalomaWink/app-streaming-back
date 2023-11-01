import { DataTypes, Model, ModelDefined, Optional } from "sequelize";
import db from ".";
import IStreamingService from "../../Interfaces/Model/StreamingService";

type StreamingServiceInputTableField = Optional<IStreamingService, 'id'>
type StreamingServiceModelType = ModelDefined<IStreamingService, StreamingServiceInputTableField>

const StreamingServiceModel: StreamingServiceModelType = db.define<Model<IStreamingService, StreamingServiceInputTableField>>(
  'StreamingService', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'streaming_services'
  }
)

export default StreamingServiceModel;