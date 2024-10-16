import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRowProductFields {
    title: EntryFieldTypes.Symbol;
    variant: EntryFieldTypes.Symbol<"Grid" | "Swipable">;
    category: EntryFieldTypes.Symbol;
    products?: EntryFieldTypes.Symbol;
}

export type TypeRowProductSkeleton = EntrySkeletonType<TypeRowProductFields, "rowProduct">;
export type TypeRowProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRowProductSkeleton, Modifiers, Locales>;

export function isTypeRowProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeRowProduct<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'rowProduct'
}

export type TypeRowProductWithoutLinkResolutionResponse = TypeRowProduct<"WITHOUT_LINK_RESOLUTION">;
export type TypeRowProductWithoutUnresolvableLinksResponse = TypeRowProduct<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeRowProductWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeRowProduct<"WITH_ALL_LOCALES", Locales>;
export type TypeRowProductWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeRowProduct<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeRowProductWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeRowProduct<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
