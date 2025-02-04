import { UserEntity } from 'src/users/infrastructure/entities/user.entity';
import { EntityRelationalHelper } from 'src/utils/relation-entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity extends EntityRelationalHelper {
  @Column({ type: String, nullable: false })
  province: string;

  @Column({ type: String, nullable: false })
  city: string;

  @Column({ type: String, nullable: false })
  street: string;

  @ManyToOne(() => UserEntity, (user) => user.addresses)
  user: UserEntity;
}
