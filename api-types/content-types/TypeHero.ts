import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroFields {
    title: EntryFieldTypes.Symbol;
    subtitle?: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    link?: EntryFieldTypes.Symbol;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroSkeleton, Modifiers, Locales>;

export function isTypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHero<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hero'
}

export type TypeHeroWithoutLinkResolutionResponse = TypeHero<"WITHOUT_LINK_RESOLUTION">;
export type TypeHeroWithoutUnresolvableLinksResponse = TypeHero<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHeroWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITH_ALL_LOCALES", Locales>;
export type TypeHeroWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHeroWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
