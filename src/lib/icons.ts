import * as icons from '@lucide/astro';

type IconComponent = typeof icons.Wrench;

function toPascalCase(kebab: string): string {
  return kebab
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

const iconMap = icons as unknown as Record<string, IconComponent>;

// Resolve a kebab-case Lucide name (e.g. "folder-kanban") to its component.
export function resolveIcon(name: string | undefined, fallback: IconComponent = icons.Sparkles): IconComponent {
  if (!name) return fallback;
  return iconMap[toPascalCase(name)] ?? fallback;
}
