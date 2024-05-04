export interface TextContainerObj{
    title: string | null,
    description: string | null,
    footNote: string | null
}

export interface FooterTexts{
    address: string,
    openingHours: string
    socialLinks: SocialLink[] | null
}

export interface SocialLink{
    socialUrl: string,
    imageUrl: string
}