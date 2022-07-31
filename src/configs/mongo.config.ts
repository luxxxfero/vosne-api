import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions } from "@nestjs/mongoose";


export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleOptions> => {
  return {
    uri: `mongodb+srv://${configService.get("DB_NAME")}:${configService.get("DB_PASSWORD")}@cluster0.p3bga.mongodb.net/vosne`
  }
}

