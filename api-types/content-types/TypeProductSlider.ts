import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductSliderFields {
    sliderName: EntryFieldTypes.Symbol;
    products?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    description?: EntryFieldTypes.Symbol;
    product?: EntryFieldTypes.Text;
}

export type TypeProductSliderSkeleton = EntrySkeletonType<TypeProductSliderFields, "productSlider">;
export type TypeProductSlider<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductSliderSkeleton, Modifiers, Locales>;

export function isTypeProductSlider<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeProductSlider<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'productSlider'
}

export type TypeProductSliderWithoutLinkResolutionResponse = TypeProductSlider<"WITHOUT_LINK_RESOLUTION">;
export type TypeProductSliderWithoutUnresolvableLinksResponse = TypeProductSlider<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeProductSliderWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeProductSlider<"WITH_ALL_LOCALES", Locales>;
export type TypeProductSliderWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeProductSlider<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeProductSliderWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeProductSlider<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
