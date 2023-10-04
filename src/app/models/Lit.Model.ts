import { Salle } from "./Salle.Model"
import { Typelit } from "./Typelit.Model"

export interface Lit{
    id: number
    nom_lit: string
    type_lit: Typelit
    salle: Salle
    disponibilite: boolean
    monitoring: boolean
    oxygene: boolean
}
