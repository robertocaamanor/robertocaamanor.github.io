import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto, UpdateExperienceDto } from './dto/experience.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Experiences')
@Controller('api/experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las experiencias' })
  findAll() {
    return this.experienceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una experiencia por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.experienceService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Crear nueva experiencia (requiere autenticación)' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  create(@Body() createExperienceDto: CreateExperienceDto) {
    return this.experienceService.create(createExperienceDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Actualizar experiencia (requiere autenticación)' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ) {
    return this.experienceService.update(id, updateExperienceDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Eliminar experiencia (requiere autenticación)' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.experienceService.remove(id);
  }
}
