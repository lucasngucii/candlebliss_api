import { EntityRelationalHelper } from 'src/utils/relation-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity extends EntityRelationalHelper {
  @Column({ type: String, unique: true })
  name: string;
}
