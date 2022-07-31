import { Module } from "@nestjs/common";
import { InterpretationModule } from "./interpretation/interpretation.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { getMongoConfig } from "./configs/mongo.config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
    InterpretationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
