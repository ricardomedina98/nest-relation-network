import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { CreateContactDto } from '../dto/contact/create-contact.dto';

@Injectable()
export class PareseToNullEmptyField implements PipeTransform<CreateContactDto, CreateContactDto> {
  transform(createDto: CreateContactDto, metadata: ArgumentMetadata): CreateContactDto {
    Object.keys(createDto).map(create => {

        if(createDto[create] === '' || createDto[create] === undefined) {
            createDto[create] = null;
        }

    });

    return createDto;
  }
}