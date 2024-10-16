import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

export interface TypeQuoteFields {
	quote: EntryFieldTypes.Text;
}

export type TypeQuoteSkeleton = EntrySkeletonType<TypeQuoteFields, "quote">;
export type TypeQuote<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeQuoteSkeleton, Modifiers, Locales>;

export function isTypeQuote<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeQuote<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "quote";
}
