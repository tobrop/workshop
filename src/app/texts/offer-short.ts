
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
        heading: 'Neue Perspektiven',
        subHeading: 'Verhalten, Glaubenssätze, Konflikte',
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
        buttonText: 'Perspektive wechseln',
        path: 'coaching',
    },
    {
        heading: 'Aus der Ferne',
        subHeading: 'Gebündelt, Fordernd, Überall',
        description:
        `<p>
        Keine Zeit mich privat zu sehen, kein direkter Grund,
        gecoacht zu werden oder einfach nur Lust zu lernen und erforschen?
        In meinen Onlinekursen liefer ich dir Wissen und zugehörige Aufgaben und
        Herausforderungen so gebalt wie Möglich.
        </p>
        <p>
        Der Fokus liegt auch hier auf dem TUN!
        Wie ich dich genau dazu bringe erfährst du dann.
        </p>`,
        buttonText: 'Kurs buchen',
        path: 'courses',
    },
    {
        heading: 'Traum & Realtität',
        subHeading: '6 Leute, 1 Abend, 6 Macher ',
        description:
        `<p>
        Veranstalte mit 6 Personen einen Visionsabend bei dir zuhause. Wir finden durch
        Bilder,Erzählungen und intensiven Austausch neue Richtungen
        für euer Leben. Was erfüllt euch? Welchen Wert bringt ihr anderen damit?
        Was braucht ihr unbedingt für euer Glück?
        </p>
        <p>
        Wir beenden den Abend erst wenn jede(r) eine
        KONKRETE Aufgabe oder Plan hat.
        </p>`,
        buttonText: 'Vision erforschen',
        path: 'vision',
    }
];
