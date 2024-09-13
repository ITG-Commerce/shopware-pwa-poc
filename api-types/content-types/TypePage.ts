import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSkeleton } from "./TypeHero";

export interface TypePageFields {
    slug: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    blocks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeroSkeleton>>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}
