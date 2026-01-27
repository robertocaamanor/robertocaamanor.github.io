import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Education } from './entities/education.entity';
import { CreateEducationDto, UpdateEducationDto } from './dto/education.dto';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private educationRepository: Repository<Education>,
  ) {}

  async findAll(): Promise<Education[]> {
    return await this.educationRepository.find({ order: { id: 'ASC' } });
  }

  async findOne(id: number): Promise<Education> {
    const education = await this.educationRepository.findOne({ where: { id } });
    if (!education) {
      throw new NotFoundException(`Education with ID ${id} not found`);
    }
    return education;
  }

  async create(createEducationDto: CreateEducationDto): Promise<Education> {
    const education = this.educationRepository.create(createEducationDto);
    return await this.educationRepository.save(education);
  }

  async update(id: number, updateEducationDto: UpdateEducationDto): Promise<Education> {
    const education = await this.findOne(id);
    Object.assign(education, updateEducationDto);
    return await this.educationRepository.save(education);
  }

  async remove(id: number): Promise<void> {
    const education = await this.findOne(id);
    await this.educationRepository.remove(education);
  }
}
