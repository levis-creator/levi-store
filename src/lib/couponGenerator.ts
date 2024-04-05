export function generateCouponCode(length: number): string {
  const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let couponCode: string = "";
  for (let i = 0; i < length; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length);
    const randomCharacter: string = characters.charAt(randomIndex);
    couponCode += randomCharacter;
  }
  return couponCode;
}
