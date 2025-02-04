import { EntityRelationalHelper } from 'src/utils/relation-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'files' })
export class FileEntity extends EntityRelationalHelper {
  @Column({ type: String, nullable: true })
  path: string | null;
}
