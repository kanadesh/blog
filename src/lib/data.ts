type Dictionary = { [name: string]: string }
const createFunction =
    (dictionary: Dictionary) =>
    (name: string | undefined): string | undefined => {
        if (!name) {
            return undefined
        }

        if (Object.keys(dictionary).includes(name)) {
            return dictionary[name]
        } else {
            return undefined
        }
    }

export const langs: Dictionary = {
    ja: '日本語',
    en: 'English'
}
export const lang = createFunction(langs)

export const countries: Dictionary = {
    jp: '🇯🇵',
    us: '🇺🇸'
}
export const country = createFunction(countries)

export const pronouns: Dictionary = {
    him: 'he/him',
    her: 'she/her',
    them: 'they/them'
}
export const pronoun = createFunction(pronouns)
