import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CertificationService } from './certification.service';
import { CreateCertificationDto, UpdateCertificationDto } from './dto/certification.dto';

@Controller('api/certifications')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) {}

  @Get()
  findAll() {
    return this.certificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.certificationService.findOne(id);
  }

  @Post()
  create(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationService.create(createCertificationDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCertificationDto: UpdateCertificationDto,
  ) {
    return this.certificationService.update(id, updateCertificationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.certificationService.remove(id);
  }
}
