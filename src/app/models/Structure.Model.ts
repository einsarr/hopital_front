import { Typestructure } from "./Typestructure.Model"

export interface Structure{
    id: number
    nom_structure: string
    adresse: string
    telephone: string
    email: string
    fax: string
    disponibilite: boolean
    typestructure: Typestructure
}
