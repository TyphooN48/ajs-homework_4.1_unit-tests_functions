export default function healthIndicator(input) {
  let result = '';

  if (input.health > 50) {
    result = 'healthy';
  } else if (input.health < 15) {
    result = 'critical';
  } else {
    result = 'wounder';
  }
  return result;
}
