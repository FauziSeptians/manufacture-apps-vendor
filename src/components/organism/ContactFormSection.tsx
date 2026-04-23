'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Dictionary } from '@/lib/dictionary';

export default function ContactFormSection({ dict }: { dict: Dictionary }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulasi delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Thank you! Your message has been sent.');
  };

  return (
    <section className="relative w-full bg-slate-950 py-24" id="contact">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* INFO CONTACT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <Typography>
              <Typography.Kicker className="text-amber-500 uppercase">
                {dict.Contact.kicker}
              </Typography.Kicker>
              <Typography.Title className="text-white">
                {dict.Contact.title}{' '}
                <Typography.Highlight>
                  {dict.Contact.highlight}
                </Typography.Highlight>
              </Typography.Title>
              <Typography.P className="mt-6 max-w-lg text-slate-400">
                {dict.Contact.description}
              </Typography.P>
            </Typography>

            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-amber-500 ring-1 ring-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {dict.Contact.office.label}
                  </h4>
                  <p className="mt-1 font-medium text-white">
                    {dict.Contact.office.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-amber-500 ring-1 ring-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {dict.Contact.phone.label}
                  </h4>
                  <p className="mt-1 font-medium text-white">
                    {dict.Contact.phone.number}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-amber-500 ring-1 ring-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {dict.Contact.email.label}
                  </h4>
                  <p className="mt-1 font-medium text-white">
                    {dict.Contact.email.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {dict.Contact.form.nameLabel}
                  </label>
                  <Input
                    placeholder={dict.Contact.form.namePlaceholder}
                    className="h-14 border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus:border-amber-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {dict.Contact.form.emailLabel}
                  </label>
                  <Input
                    type="email"
                    placeholder={dict.Contact.form.emailPlaceholder}
                    className="h-14 border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus:border-amber-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  {dict.Contact.form.companyLabel}
                </label>
                <Input
                  placeholder={dict.Contact.form.companyPlaceholder}
                  className="h-14 border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus:border-amber-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  {dict.Contact.form.messageLabel}
                </label>
                <Textarea
                  placeholder={dict.Contact.form.messagePlaceholder}
                  className="min-h-[160px] border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus:border-amber-500"
                  required
                />
              </div>

              <Button
                disabled={isSubmitting}
                className="h-16 w-full rounded-2xl bg-amber-500 text-base font-bold text-slate-950 transition-all hover:scale-[1.02] hover:bg-amber-400 active:scale-95"
              >
                {isSubmitting ? (
                  dict.Contact.form.submitting
                ) : (
                  <>
                    {dict.Contact.form.button} <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

