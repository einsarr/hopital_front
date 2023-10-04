import { Salle } from "./Salle.Model"

export interface Reservation{
    id: number
    nom_lit: string
    type_lit: string
    salle: Salle
    disponibilite: boolean
    monitoring: boolean
    oxygene: boolean
    date_debut: Date
    date_fin: Date
    date_reservation:Date
    updated_reservation:Date
}
