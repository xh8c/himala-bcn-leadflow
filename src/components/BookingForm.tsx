import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").max(100),
  phone: z.string().trim().min(9, "Please enter a valid phone number").max(20),
  treatment: z.string().min(1, "Please select a treatment"),
  preferredTime: z.string().trim().min(3, "Please specify your preferred day/time").max(200),
});

type FormData = z.infer<typeof formSchema>;

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const treatment = watch("treatment");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Encode form data properly for Netlify Forms
      const formBody = new URLSearchParams({
        "form-name": "spa-booking",
        "fullName": data.fullName,
        "phone": data.phone,
        "treatment": data.treatment,
        "preferredTime": data.preferredTime,
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      });

      if (response.ok) {
        toast({
          title: "Booking Request Sent! ✨",
          description: "We'll contact you shortly via WhatsApp to confirm your appointment.",
        });
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact us directly at himalabcn@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking-form" className="relative -mt-16 md:-mt-32 px-4 pb-12 md:pb-20 z-20">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-card rounded-2xl shadow-card p-6 md:p-12 animate-fade-in-slow">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
              Escape Barcelona's chaos
            </h2>
            <p className="text-accent text-lg md:text-xl font-semibold mb-3 md:mb-4">
              15% off your first massage
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto px-2">
              Life in Barcelona moves fast. At Himala BCN, we help you pause. Get 15% off your first massage
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-base font-medium">
                Full Name *
              </Label>
              <Input
                id="fullName"
                {...register("fullName")}
                placeholder="Maria García"
                className="h-12 text-base"
              />
              {errors.fullName && (
                <p className="text-destructive text-sm">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-medium">
                Phone Number (WhatsApp) *
              </Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+34 612 345 678"
                className="h-12 text-base"
              />
              {errors.phone && (
                <p className="text-destructive text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="treatment" className="text-base font-medium">
                Preferred Treatment *
              </Label>
              <Select onValueChange={(value) => setValue("treatment", value)} value={treatment}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Select a treatment..." />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="relaxing-massage">Relaxing Massage – melt away stress and tension</SelectItem>
                  <SelectItem value="deep-tissue">Deep Tissue Massage – fix stiff muscles & back pain</SelectItem>
                  <SelectItem value="hot-stone">Hot Stone / Candle Massage – deep warmth for total calm</SelectItem>
                  <SelectItem value="not-sure">Not Sure Yet – help me choose the best option</SelectItem>
                </SelectContent>
              </Select>
              {errors.treatment && (
                <p className="text-destructive text-sm">{errors.treatment.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="text-base font-medium">
                Preferred Day & Time *
              </Label>
              <Input
                id="preferredTime"
                {...register("preferredTime")}
                placeholder="e.g., Saturday afternoon or weekdays after 6pm"
                className="h-12 text-base"
              />
              {errors.preferredTime && (
                <p className="text-destructive text-sm">{errors.preferredTime.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 md:h-14 text-sm md:text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-[1.02] px-4"
            >
              {isSubmitting ? "Sending..." : "Claim My 15% Off & Book My Spot"}
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              We'll confirm your booking via WhatsApp within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
