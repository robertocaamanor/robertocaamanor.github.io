import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceModule } from './modules/experience/experience.module';
import { ProjectModule } from './modules/project/project.module';
import { CertificationModule } from './modules/certification/certification.module';
import { EducationModule } from './modules/education/education.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // SOLO para desarrollo, cambiar a false en producción
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ExperienceModule,
    ProjectModule,
    CertificationModule,
    EducationModule,
  ],
})
export class AppModule {}
