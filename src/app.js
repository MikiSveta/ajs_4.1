export default function levelHealth(name, health) {
  if (health > 50) {
    return 'healthy';
  }
  if (health < 15) {
    return 'critical';
  }


  return 'wounded';
}
