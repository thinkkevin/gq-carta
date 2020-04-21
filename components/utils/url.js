export function venueUrl({ name, id }) {
  return `/v/${formalize(name)}/${id}`;
}

export function formalize(name) {
  return name
    .toLowerCase()
    .replace(/[^A-Za-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
}
