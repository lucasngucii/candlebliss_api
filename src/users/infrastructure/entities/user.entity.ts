import { AddressEntity } from 'src/address/infrastructure/entities/address.entity';
import { FileEntity } from 'src/files/infrastructure/entities/file.entity';
import { RoleEntity } from 'src/roles/infrastructures/entities/role.entity';

import { EntityRelationalHelper } from 'src/utils/relation-entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends EntityRelationalHelper {
  @Column({ type: String, unique: true, nullable: true })
  email: string | null;

  @Column({ nullable: true })
  password?: string;

  @Index()
  @Column({ type: String, nullable: true })
  socialId?: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  provider?: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  firstName: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  lastName: string | null;

  @OneToOne(() => FileEntity, {
    eager: true,
  })
  @JoinColumn()
  photo?: FileEntity | null;

  @ManyToOne(() => RoleEntity, {
    eager: true,
  })
  role?: RoleEntity | null;

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses?: AddressEntity[];
}
