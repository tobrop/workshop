
export const navigationLinks: NaivgationLink[] = [
    { name: 'Über', path: 'about' },
    { name: 'Workshops', path: 'workshops'},
    { name: 'Mentoring', path: 'mentoring'},
    { name: 'Coaching', path: 'coaching' },
    { name: 'Visions-Abend', path: 'vision'},
    { name: 'Kontakt', path: 'contact'}
];

export interface NaivgationLink {
    name: string;
    path: string;
}

