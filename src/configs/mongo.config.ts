import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions } from "@nestjs/mongoose";


export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleOptions> => {
  return {
    uri: `mongodb+srv://vosnedb:A1l2e3k4s5111@cluster0.p3bga.mongodb.net/vosne`
  }
}

