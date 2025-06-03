import SmsNotification from "./sms_notification";
import EmailNotification from "./email_notification";
import WhatsAppNotification from "./whatsapp_notification";
import WhatsappNotificationAdapter from "./whatsapp_notification_adapter";
import Sender from "./sender";

function main() {
    const smsNotification = new SmsNotification("123-456-7890", "Hello via SMS!");
    const emailNotification = new EmailNotification("mohit@test.com", "Hello via Email!");

    // WhatsAppNotification is not directly compatible with the INotification interface
    const whatsappNotification = new WhatsAppNotification("987-654-3210", "Hello via WhatsApp!");

    // To adapt WhatsAppNotification to the INotification interface, we can create an adapter
    // const notifications = [smsNotification, emailNotification, WhatsAppNotification];

    const whatsappNotificationAdapter = new WhatsappNotificationAdapter(whatsappNotification);
    
    // Now we can use the adapter to send WhatsApp notification
    const notifications = [smsNotification, emailNotification, whatsappNotificationAdapter];

    const sender = new Sender(notifications);
    sender.sendNotifications();
}

main();
