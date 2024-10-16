import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBrandSliderFields {
    brandTitle: EntryFieldTypes.Symbol;
    noOfImagesPerSlider: EntryFieldTypes.Integer;
    autoPlaySlider?: EntryFieldTypes.Boolean;
}

export type TypeBrandSliderSkeleton = EntrySkeletonType<TypeBrandSliderFields, "brandSlider">;
export type TypeBrandSlider<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBrandSliderSkeleton, Modifiers, Locales>;

export function isTypeBrandSlider<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBrandSlider<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'brandSlider'
}

export type TypeBrandSliderWithoutLinkResolutionResponse = TypeBrandSlider<"WITHOUT_LINK_RESOLUTION">;
export type TypeBrandSliderWithoutUnresolvableLinksResponse = TypeBrandSlider<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBrandSliderWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBrandSlider<"WITH_ALL_LOCALES", Locales>;
export type TypeBrandSliderWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBrandSlider<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBrandSliderWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBrandSlider<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
