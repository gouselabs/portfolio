export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

const STATUS_BADGE_VARIANT = {
  Live: 'success',
  'In Progress': 'warning',
  Concept: 'default',
  Archived: 'outline',
} as const;

export function statusBadgeVariant(status: string): 'success' | 'warning' | 'default' | 'outline' {
  return STATUS_BADGE_VARIANT[status as keyof typeof STATUS_BADGE_VARIANT] ?? 'default';
}
