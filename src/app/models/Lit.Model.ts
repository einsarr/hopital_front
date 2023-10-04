import { Salle } from "./Salle.Model"

export interface Lit{
    id: number
    nom_lit: string
    type_lit: string
    salle: Salle
    disponibilite: boolean
    monitoring: boolean
    oxygene: boolean
}
