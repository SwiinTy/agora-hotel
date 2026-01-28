"use client";

import { useState } from "react";
import { CalendarDays, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Booking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
          {/* Text */}
          <div className="lg:flex-1">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-3 text-balance">
              Ready to Experience Serenité?
            </h2>
            <p className="text-primary-foreground/80">
              Check availability and secure your stay at our exclusive boutique hotel.
            </p>
          </div>

          {/* Booking Form */}
          <div className="lg:flex-1">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="check-in" className="text-primary-foreground/70 text-xs uppercase tracking-wide mb-2 flex items-center gap-1">
                  <CalendarDays className="w-3 h-3" />
                  Check In
                </Label>
                <Input
                  id="check-in"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              <div className="flex-1">
                <Label htmlFor="check-out" className="text-primary-foreground/70 text-xs uppercase tracking-wide mb-2 flex items-center gap-1">
                  <CalendarDays className="w-3 h-3" />
                  Check Out
                </Label>
                <Input
                  id="check-out"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              <div className="w-full sm:w-24">
                <Label htmlFor="guests" className="text-primary-foreground/70 text-xs uppercase tracking-wide mb-2 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Guests
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              <div className="flex items-end">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-card hover:bg-card/90 text-foreground px-8 group"
                >
                  Search
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
