
export interface Reservation{
    id: number
    nom_lit: string
    type_lit: string
    salle: string
    disponibilite: boolean
    monitoring: boolean
    oxygene: boolean
    date_debut: Date
    date_fin: Date
    date_reservation:Date
}
