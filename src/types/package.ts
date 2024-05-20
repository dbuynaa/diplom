export type Package = {
  sn: string;
  ethernetMac: string;
  product: string;
  groups: string;
  city: string;
  buildVersion?: string; // Optional property with default undefined
  tag?: string;          // Optional property with default undefined
  onlineStatus?: string; // Optional property with default undefined
  activatedStatus?: string; // Optional property with default undefined
}