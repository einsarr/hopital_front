import { Profil } from "./Profil.Model"

export interface User{
    id: number
    prenom: string
    nom: string
    email: string
    password: string
    telephone: string
    profil: Profil
    isActive: string
}
