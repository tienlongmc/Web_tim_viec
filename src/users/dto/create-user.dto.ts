//data transfer object class = object
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, ValidateNested } from 'class-validator';
import mongoose from 'mongoose';

class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId;
  
   
    @IsNotEmpty()
    name: string;
  }
export class CreateUserDto {

    @IsEmail({},
        {
            message: 'Email không đúng định dạng'
        }
    )
    @IsNotEmpty(
        {
            message: 'Email không được để trống'
        }
    )
    email:string;

    @IsNotEmpty(
        {
            message: 'Password không được để trống'
        }
    )
    password:string;

    @IsNotEmpty(
        {
            message: 'Name không được để trống'
        }
    )
    name: string;

    @IsNotEmpty(
        {
            message: 'Age không được để trống'
        }
    )
    age:number;

    @IsNotEmpty(
        {
            message: 'Gender không được để trống'
        }
    )
    gender:string;

    @IsNotEmpty(
        {
            message: 'Address không được để trống'
        }
    )
    address:string;

    @IsNotEmpty(
        {
            message: 'Role không được để trống'
        }
    )
    role:string;

    @IsNotEmpty(
        {
            message: 'Role không được để trống'
        }
    )

    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company!: Company;
}


export class RegisterUserDto {

    @IsEmail({},
        {
            message: 'Email không đúng định dạng'
        }
    )
    @IsNotEmpty(
        {
            message: 'Email không được để trống'
        }
    )
    email:string;

    @IsNotEmpty(
        {
            message: 'Password không được để trống'
        }
    )
    password:string;

    @IsNotEmpty(
        {
            message: 'Name không được để trống'
        }
    )
    name: string;

    @IsNotEmpty(
        {
            message: 'Age không được để trống'
        }
    )
    age:number;

    @IsNotEmpty(
        {
            message: 'Gender không được để trống'
        }
    )
    gender:string;

    @IsNotEmpty(
        {
            message: 'Address không được để trống'
        }
    )
    address:string;

}