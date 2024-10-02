import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRowProductFields {
    title: EntryFieldTypes.Symbol;
    variant: EntryFieldTypes.Symbol<"Grid" | "Swipable">;
    category?: EntryFieldTypes.Symbol;
    products?: EntryFieldTypes.Symbol;
}

export type TypeRowProductSkeleton = EntrySkeletonType<TypeRowProductFields, "rowProduct">;
export type TypeRowProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRowProductSkeleton, Modifiers, Locales>;

export function isTypeRowProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeRowProduct<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'rowProduct'
}
