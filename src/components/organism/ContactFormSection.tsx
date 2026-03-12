'use client';

import { useDict } from '@/components/providers/DictionaryProvider';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'; // Import Shadcn Dialog
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2, Send } from 'lucide-react'; // Tambah CheckCircle2
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Typography } from '../ui/Typography';

export default function ContactFormSection() {
  const dict = useDict();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State Modal

  const contactSchema = useMemo(() => {
    return z.object({
      fullName: z.string().min(3, { message: dict.Contact.validation.nameMin }),
      companyName: z
        .string()
        .min(2, { message: dict.Contact.validation.companyRequired }),
      email: z
        .string()
        .email({ message: dict.Contact.validation.emailInvalid }),
      message: z
        .string()
        .min(10, { message: dict.Contact.validation.messageMin }),
    });
  }, [dict]);

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setShowSuccessModal(true); // Buka Modal jika sukses
        reset();
      } else {
        alert('Terjadi kesalahan, coba lagi nanti.');
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070';

  return (
    <section className="relative flex min-h-[800px] w-full items-center overflow-hidden">
      {/* Background & Overlay tetap sama */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Sisi Kiri */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <Typography.Kicker className="font-bold tracking-[0.4em] text-amber-500">
              {dict.Contact.kicker}
            </Typography.Kicker>
            <Typography.Title className="text-4xl leading-tight font-bold text-white md:text-6xl">
              {dict.Contact.title} <br />
              <Typography.Highlight className="text-amber-500">
                {dict.Contact.highlight}
              </Typography.Highlight>
            </Typography.Title>
            <Typography.P className="max-w-md text-lg leading-relaxed text-slate-300">
              {dict.Contact.description}
            </Typography.P>
          </div>

          {/* Sisi Kanan: Form */}
          <div className="w-full rounded-3xl border border-white/10 bg-[#0a0a0a]/40 p-8 shadow-2xl backdrop-blur-2xl md:p-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-8"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-black tracking-[0.2em] text-amber-500/80 uppercase">
                    {dict.Contact.form.nameLabel}
                  </label>
                  <input
                    {...register('fullName')}
                    className={`w-full border-b bg-transparent py-3 text-white transition-all outline-none ${errors.fullName ? 'border-red-500' : 'border-white/20 focus:border-amber-500 focus:pl-2'}`}
                    placeholder={dict.Contact.form.namePlaceholder}
                  />
                  {errors.fullName && (
                    <span className="text-[10px] font-bold text-red-500 uppercase">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-black tracking-[0.2em] text-amber-500/80 uppercase">
                    {dict.Contact.form.companyLabel}
                  </label>
                  <input
                    {...register('companyName')}
                    className={`w-full border-b bg-transparent py-3 text-white transition-all outline-none ${errors.companyName ? 'border-red-500' : 'border-white/20 focus:border-amber-500 focus:pl-2'}`}
                    placeholder={dict.Contact.form.companyPlaceholder}
                  />
                  {errors.companyName && (
                    <span className="text-[10px] font-bold text-red-500 uppercase">
                      {errors.companyName.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-black tracking-[0.2em] text-amber-500/80 uppercase">
                  {dict.Contact.form.emailLabel}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className={`w-full border-b bg-transparent py-3 text-white transition-all outline-none ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-amber-500 focus:pl-2'}`}
                  placeholder={dict.Contact.form.emailPlaceholder}
                />
                {errors.email && (
                  <span className="text-[10px] font-bold text-red-500 uppercase">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-black tracking-[0.2em] text-amber-500/80 uppercase">
                  {dict.Contact.form.messageLabel}
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className={`w-full resize-none border-b bg-transparent py-3 text-white transition-all outline-none ${errors.message ? 'border-red-500' : 'border-white/20 focus:border-amber-500 focus:pl-2'}`}
                  placeholder={dict.Contact.form.messagePlaceholder}
                />
                {errors.message && (
                  <span className="text-[10px] font-bold text-red-500 uppercase">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-xl bg-amber-500 px-8 py-5 font-black tracking-widest text-[#0a0a0a] transition-all hover:bg-amber-400 active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={24} className="animate-spin" />
                    {dict.Contact.form.submitting}
                  </>
                ) : (
                  <>
                    {dict.Contact.form.button}
                    <Send
                      size={20}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- MODAL SUCCESS SHADCN --- */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="border-white/10 bg-white p-10 text-center sm:max-w-[400px]">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10">
              <CheckCircle2 size={48} className="text-amber-500" />
            </div>
            <DialogHeader className="flex items-center text-center">
              <DialogTitle className="text-2xl font-black tracking-wider text-black uppercase">
                {dict.Contact.successTitle || 'SUCCESS!'}
              </DialogTitle>
              <DialogDescription className="pt-2 text-center text-slate-400">
                {dict.Contact.success}
              </DialogDescription>
            </DialogHeader>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 w-full rounded-lg bg-slate-900 py-4 text-xs font-bold tracking-[0.2em] text-amber-500 uppercase transition-colors hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
