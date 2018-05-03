
export class OfferShortDescription {
    heading: string;
    subHeading: string;
    description: string;
    buttonText: string;
    path: string;
}

export const myOffersShort: OfferShortDescription[] = [
    {
        heading: 'Werde mein Mentee',
        subHeading: 'Intensiv, persönlich, verändernd',
        description:
        `<p>
        Fehlt dir ein Ziel oder die Inspiration?
        Lerne mit und von mir das nötige Mindset und die Taktiken dich zu motivieren,
        dir Routinen anzueignen und dich zu dauerhaft zu wachsen.
        Ich unterstütze dich deinen Weg zu finden und deine Energie am liebsten
        aus Herausforderungen zu ziehen.
        </p>
        <p>
        Was ich von dir will?
        Offenheit, Ehrlichkeit und Willen zur radikalen Veränderung.
        </p>`,
        buttonText: 'Mentee werden',
        path: 'mentoring',
    },
    {
        heading: 'Entdecke Perspektiven',
        subHeading: 'Verhaltensänderung, Glaubenssätze, Konflikte',
        description:
        `<p>
        Ärgert dich dein eigenes Verhalten? Fühlst du dich
        festgefahren? Stehts du vor einer großen Entscheidung oder
        gibt es einen Konflikt zwischen dem was du seien willst und
        dem als was du dich siehst?
        </p>
        <p>
        Lass uns in einer Coaching-Stunde deinen Ansichten auf
        den Grund gehen und dir neue Perspektiven zu Selbstenfaltung eröffnen.
        </p>`,
        buttonText: 'Perspektiven wechseln',
        path: 'coaching',
    },
    {
        heading: 'Traum & Realtität',
        subHeading: '6 Leute, 1 Abend, 6 Macher ',
        description:
        `<p>
        Ich veranstalte mit einer Gruppe von maximal 6 Personen
        einen Visionsabend bei dir zuhause. Wir finden durch
        intensiven austausch, Bilder und Erzählungen eine neue Richtung
        für euer Leben. Was erfüllt euch? Welchen Wert könnt ihr anderen damit bringen?
        Und was braucht ihr umbedingt für euer Glück?
        </p>
        <p>
        Wir beenden den Abend nicht bevor nicht jede(r) eine
        KONKRETE Aufgabe oder Plan hat.
        </p>`,
        buttonText: 'Vision erforschen',
        path: 'vision',
    }
];
