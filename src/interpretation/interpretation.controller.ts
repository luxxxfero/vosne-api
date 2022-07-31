import { Body, Controller, Post, Get, Query, Param } from "@nestjs/common";
import { CreateInterpretationDto } from "./dto/create-interpretation.dto";
import { QueryInterpretationDto } from "./dto/query-interpretation.dto";
import { InterpretationService } from "./interpretation.service";

@Controller('interpretation')
export class InterpretationController {
  constructor(private readonly interpretationService: InterpretationService) {
  }

  @Post()
  async create(@Body() dto: CreateInterpretationDto) {
    return await this.interpretationService.create(dto);
  }

  @Get()
  async getAll(@Query() query: QueryInterpretationDto) {
    return await this.interpretationService.getAll(query)
  }

  @Get("title")
  async getUniqueTitle(@Query() query: QueryInterpretationDto) {
    return await this.interpretationService.getUniqueTitle(query)
  }

  @Get("search/:title")
  async search(@Param() params) {
    return await this.interpretationService.search(params.title)
  }

}
