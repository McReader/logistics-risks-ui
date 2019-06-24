import format from 'date-fns/format'

export default function toISOString(date) {
  return format(date, 'YYYY-MM-DDTHH:mm:ss');
}
