export interface AccountingCategoryTreeDto {
  id: number;
  name: string;
  subCategories: AccountingCategoryTreeDto;
}
