
export const navigationLinks: NaivgationLink[] = [
    { name: 'Über', path: 'about' },
    { name: 'Mentoring', path: 'mentoring'},
    { name: 'Workshops', path: 'workshops'},
    { name: 'Visions-Abend', path: 'vision'},
    { name: 'Coaching', path: 'coaching' },
    { name: 'Kontakt', path: 'contact'}
];

export interface NaivgationLink {
    name: string;
    path: string;
}

