import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Interpretation, InterpretationDocument } from "./schemas/interpretation.schema";
import { Model } from "mongoose";
import { CreateInterpretationDto } from "./dto/create-interpretation.dto";
import { QueryInterpretationDto } from "./dto/query-interpretation.dto";

@Injectable()
export class InterpretationService {
  constructor(@InjectModel(Interpretation.name) private interpretationModel: Model<InterpretationDocument>) {}

  async create(dto: CreateInterpretationDto) {
    return await this.interpretationModel.create(dto);
  }

  async getAll(query: QueryInterpretationDto) {
    return await this.interpretationModel.find({ ...query});
  }

  async getUniqueTitle(query: QueryInterpretationDto) {
    return await this.interpretationModel.find({...query}).distinct("title");
  }

  async search(title: string) {
    return await this.interpretationModel.find({title: { $regex: new RegExp("^" + title.toLowerCase(), "i") }}).distinct("title");
  }

}
