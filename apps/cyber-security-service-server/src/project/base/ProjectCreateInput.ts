/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumProjectStatus } from "./EnumProjectStatus";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { Type } from "class-transformer";
import { ReportCreateNestedManyWithoutProjectsInput } from "./ReportCreateNestedManyWithoutProjectsInput";

@InputType()
class ProjectCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumProjectStatus,
  })
  @IsEnum(EnumProjectStatus)
  @IsOptional()
  @Field(() => EnumProjectStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  reports?: ReportCreateNestedManyWithoutProjectsInput;
}

export { ProjectCreateInput as ProjectCreateInput };