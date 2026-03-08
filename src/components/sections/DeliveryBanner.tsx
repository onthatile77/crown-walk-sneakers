import { Truck } from "lucide-react";

export const DeliveryBanner = () => {
  const text = "FREE DELIVERY NATIONWIDE 🇿🇦  •  FREE DELIVERY NATIONWIDE 🇿🇦  •  FREE DELIVERY NATIONWIDE 🇿🇦  •  FREE DELIVERY NATIONWIDE 🇿🇦  •  ";

  return (
    <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        <span className="text-xs font-medium tracking-widest flex items-center gap-2">
          {text}{text}
        </span>
      </div>
    </div>
  );
};
