import { NullableType } from 'src/utils/types/nullable.type';
import { User } from '../domain/user';
import { DeepPartial } from 'src/utils/types/deep-partial.type';

export abstract class UserRepository {
  abstract create(data: Omit<User, 'id'>): Promise<User>;
  abstract findById(id: User['id']): Promise<NullableType<User>>;
  abstract findByIds(ids: User['id'][]): Promise<User[]>;
  abstract findByEmail(email: User['email']): Promise<NullableType<User>>;
  abstract findBySocialIdAndProvider({
    socialId,
    provider,
  }: {
    socialId: User['socialId'];
    provider: User['provider'];
  }): Promise<NullableType<User>>;

  abstract update(
    id: User['id'],
    payload: DeepPartial<User>,
  ): Promise<User | null>;

  abstract remove(id: User['id']): Promise<void>;

  //   abstract findManyWithPagination({
  //     filterOptions,
  //     sortOptions,
  //     paginationOptions,
  //   }: {
  //     filterOptions?: FilterUserDto | null;
  //     sortOptions?: SortUserDto[] | null;
  //     paginationOptions: IPaginationOptions;
  //   }): Promise<User[]>;
}
