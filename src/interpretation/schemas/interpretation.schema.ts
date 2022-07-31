import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type InterpretationDocument = Interpretation & Document;

@Schema()
export class Interpretation {
  @Prop({required: true})
  title: string;

  @Prop({required: true})
  header: string;

  @Prop({required: true})
  dreamBookName: string;

  @Prop({ type: () => [String], required: true })
  interpretations: string[];

  @Prop({default: false})
  isPopular: boolean;

  @Prop({required: true})
  alias: string;

  @Prop({required: true})
  letter: string;
}

export const InterpretationSchema = SchemaFactory.createForClass(Interpretation);