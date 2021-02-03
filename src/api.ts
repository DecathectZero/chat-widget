export type User = {
  id: number;
  email: string;
  display_name?: string;
  full_name?: string;
  profile_photo_url?: string;
};

export type Message = {
  id?: string;
  body: string;
  sent_at?: string;
  seen_at?: string;
  created_at?: string;
  customer_id?: string;
  user_id?: number;
  user?: User;
  type?: 'bot' | 'agent' | 'customer';
};

export type CustomerMetadata = {
  name?: string;
  email?: string;
  external_id?: string;
  metadata?: {[key: string]: any};
  // TODO: include browser info
};

export type Account = {
  company_name?: string;
  subscription_plan?: string;
  is_outside_working_hours?: boolean;
};

export type WidgetSettings = {
  subtitle?: string;
  title?: string;
  base_url?: string;
  color?: string;
  greeting?: string;
  new_message_placeholder?: string;
  email_input_placeholder?: string;
  new_messages_notification_text?: string;
  account?: Account;
};
