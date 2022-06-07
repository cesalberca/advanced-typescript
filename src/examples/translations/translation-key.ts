import type translations from './foo.json'

export type Prefix<K extends string, T extends string> = `${K}:${T}`

export type Prefixer<K, T extends string> = {
  [P in keyof K as Prefix<T, string & P>]: K[P]
}

type Translations = keyof Prefixer<typeof translations, 'global'>
type TranslationKey = Translations

const translation: TranslationKey = 'global:bar'
