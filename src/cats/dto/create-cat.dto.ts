/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object (DTO) for creating a new cat
 * This DTO defines the structure and validation rules for cat creation requests
 */
export class CreateCatDto {
  @ApiProperty({
    description: 'The name of the cat',
    example: 'Whiskers',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    description: 'The age of the cat in years',
    example: 3,
    minimum: 0,
    maximum: 30,
    required: true,
  })
  @IsNumber()
  @Min(0)
  @Max(30)
  age!: number;

  @ApiProperty({
    description: 'The breed of the cat',
    example: 'Persian',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  breed!: string;
}