// very simple sanitize implementation
// by removing tags
export function sanitize(text) {
  return text && text.replace(/<.*>/g, "");
}
