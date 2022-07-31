import { Module } from '@nestjs/common';
import { InterpretationController } from './interpretation.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Interpretation, InterpretationSchema } from "./schemas/interpretation.schema";
import { InterpretationService } from './interpretation.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Interpretation.name, schema: InterpretationSchema}])],
  controllers: [InterpretationController],
  providers: [InterpretationService]
})
export class InterpretationModule {}
