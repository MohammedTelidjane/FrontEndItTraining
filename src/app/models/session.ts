
import { Participant } from "./participant";

export interface Session {

    id: number;
    prixHt: number;
    dateDebut: string;
    dateFin: string;
    participants: Participant[];
}