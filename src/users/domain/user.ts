import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty({
    example: 'lucasalehwork@gmail.com',
    type: String,
  })
  @Expose({ groups: ['me', 'admin'] })
  email: string;

  @Exclude({ toPlainOnly: true })
  password: string;

  @ApiProperty({
    type: String,
    example: '1234567890',
  })
  @Expose({ groups: ['me', 'admin'] })
  socialId?: string | null;

  @ApiProperty({
    type: String,
    example: 'google',
  })
  @Expose({ groups: ['me', 'admin'] })
  provider?: string | null;

  @ApiProperty({
    type: String,
    example: 'John',
  })
  firstName: string | null;

  @ApiProperty({
    type: String,
    example: 'Doe',
  })
  lastName: string | null;
}
