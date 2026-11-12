// Canais oficiais da New Clean (perfil @newclean.solar).
export const WHATSAPP_NUMBER = '5517997543464';
export const PHONE_DISPLAY = '(17) 99754-3464';
export const INSTAGRAM_HANDLE = 'newclean.solar';
export const INSTAGRAM_URL = 'https://www.instagram.com/newclean.solar/';
export const SERVICE_AREA = 'Votuporanga e região';

const DEFAULT_MESSAGE = 'Olá, New Clean! Gostaria de solicitar um orçamento.';

/** Link do WhatsApp com mensagem já preenchida. */
export function whatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
