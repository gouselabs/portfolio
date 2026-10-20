// Colour "tones" for icon chips, badges and card accents. Every class string
// is written out in full so Tailwind can detect it at build time.

export type Tone = 'blue' | 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose';

interface ToneClasses {
  chip: string;
  text: string;
  bar: string;
  spot: string;
  dot: string;
  border: string;
  hoverText: string;
  groupHoverText: string;
  wash: string;
  blob: string;
}

export const TONES: Record<Tone, ToneClasses> = {
  blue: {
    chip: 'bg-accent-soft text-accent',
    text: 'text-accent',
    bar: 'from-accent',
    spot: '[--spot:var(--color-accent)]',
    dot: 'bg-accent',
    border: 'hover:border-accent/50',
    hoverText: 'hover:text-accent',
    groupHoverText: 'group-hover:text-accent',
    wash: 'from-accent/20',
    blob: 'bg-accent',
  },
  violet: {
    chip: 'bg-tone-violet-soft text-tone-violet',
    text: 'text-tone-violet',
    bar: 'from-tone-violet',
    spot: '[--spot:var(--color-tone-violet)]',
    dot: 'bg-tone-violet',
    border: 'hover:border-tone-violet/50',
    hoverText: 'hover:text-tone-violet',
    groupHoverText: 'group-hover:text-tone-violet',
    wash: 'from-tone-violet/20',
    blob: 'bg-tone-violet',
  },
  cyan: {
    chip: 'bg-tone-cyan-soft text-tone-cyan',
    text: 'text-tone-cyan',
    bar: 'from-tone-cyan',
    spot: '[--spot:var(--color-tone-cyan)]',
    dot: 'bg-tone-cyan',
    border: 'hover:border-tone-cyan/50',
    hoverText: 'hover:text-tone-cyan',
    groupHoverText: 'group-hover:text-tone-cyan',
    wash: 'from-tone-cyan/20',
    blob: 'bg-tone-cyan',
  },
  emerald: {
    chip: 'bg-tone-emerald-soft text-tone-emerald',
    text: 'text-tone-emerald',
    bar: 'from-tone-emerald',
    spot: '[--spot:var(--color-tone-emerald)]',
    dot: 'bg-tone-emerald',
    border: 'hover:border-tone-emerald/50',
    hoverText: 'hover:text-tone-emerald',
    groupHoverText: 'group-hover:text-tone-emerald',
    wash: 'from-tone-emerald/20',
    blob: 'bg-tone-emerald',
  },
  amber: {
    chip: 'bg-tone-amber-soft text-tone-amber',
    text: 'text-tone-amber',
    bar: 'from-tone-amber',
    spot: '[--spot:var(--color-tone-amber)]',
    dot: 'bg-tone-amber',
    border: 'hover:border-tone-amber/50',
    hoverText: 'hover:text-tone-amber',
    groupHoverText: 'group-hover:text-tone-amber',
    wash: 'from-tone-amber/20',
    blob: 'bg-tone-amber',
  },
  rose: {
    chip: 'bg-tone-rose-soft text-tone-rose',
    text: 'text-tone-rose',
    bar: 'from-tone-rose',
    spot: '[--spot:var(--color-tone-rose)]',
    dot: 'bg-tone-rose',
    border: 'hover:border-tone-rose/50',
    hoverText: 'hover:text-tone-rose',
    groupHoverText: 'group-hover:text-tone-rose',
    wash: 'from-tone-rose/20',
    blob: 'bg-tone-rose',
  },
};

export const TONE_ORDER: Tone[] = ['blue', 'violet', 'cyan', 'emerald', 'amber', 'rose'];

export function toneAt(index: number): Tone {
  return TONE_ORDER[index % TONE_ORDER.length];
}

// Content-type to tone, so the same kind of thing is always the same colour.
const CATEGORY_TONES: Record<string, Tone> = {
  Backend: 'blue',
  'Full Stack': 'cyan',
  AI: 'violet',
  'Developer Tools': 'emerald',
  Experiments: 'amber',
  Utilities: 'cyan',
  Productivity: 'amber',
  'Developer Resources': 'violet',
  "Kids' Activity Books": 'amber',
};

export function toneForCategory(category: string): Tone {
  return CATEGORY_TONES[category] ?? 'blue';
}
