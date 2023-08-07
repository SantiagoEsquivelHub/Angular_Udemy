const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string,
}

const veteran: Character = {
    name: 'Santiago',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

veteran.hometown = 'Rivendell';

console.table(veteran)

export { };
