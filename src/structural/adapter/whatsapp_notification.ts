// this can be an external library or service that sends WhatsApp messages
// it is not directly compatible with our notification system
export default class WhatsAppNotification {
  private phoneNumber: string;
  public message: string;

  constructor(phoneNumber: string, message: string) {
    this.phoneNumber = phoneNumber;
    this.message = message;
  }

  sendMessage(): void {
    console.log(`Sending WhatsApp message to ${this.phoneNumber}: ${this.message}`);
  }
}
