/**
 * Utility to format and trigger WhatsApp messages for forms
 */

const WHATSAPP_NUMBER = '919515958727'; // G. Dharmaraju WhatsApp

export const sendConsultationToWhatsApp = (data) => {
  const { name, phone, email, spaceType, services, date, timeSlot, message } = data;
  
  const servicesText = Array.isArray(services) && services.length > 0
    ? services.join(', ')
    : services || 'Not specified';

  const text = `📋 *NEW CONSULTATION REQUEST*
  
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email || 'N/A'}
🏠 *Space Type:* ${spaceType || 'Residential'}
🛋️ *Services Interested:* ${servicesText}
📅 *Preferred Date:* ${date || 'Flexible'}
⏰ *Preferred Time:* ${timeSlot || 'Flexible'}
💬 *Requirements:* ${message || 'No additional notes'}

-----------------------------------
Sent via Rupesh Interiors Website`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  
  window.open(whatsappUrl, '_blank');
};

export const sendQuickContactToWhatsApp = (data) => {
  const { name, phone, service, message } = data;

  const text = `📬 *NEW INQUIRY*
  
👤 *Name:* ${name}
📞 *Phone:* ${phone}
🛋️ *Service:* ${service || 'General Inquiry'}
💬 *Message:* ${message}

-----------------------------------
Sent via Rupesh Interiors Website`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  
  window.open(whatsappUrl, '_blank');
};
