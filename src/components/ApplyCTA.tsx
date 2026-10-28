'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';
import { contact } from '@/content/data';

export function ApplyCTA() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();

  return (
    <section id="apply" className="section apply-section">
      <div className="container-custom">
        <div className="apply-cta p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                {lang === 'en' ? <>Ready to<br /><span className="gradient-text">work together?</span></> : <>Sẵn sàng<br /><span className="gradient-text">làm việc cùng nhau?</span></>}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-md">
                {lang === 'en' ? 'Open to backend, cloud infrastructure, and applied AI roles. Let’s discuss your next project.' : 'Đang mở các vị trí Backend, hạ tầng cloud và AI ứng dụng. Hãy thảo luận về dự án tiếp theo của bạn.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`mailto:${contact.email}`} className="apply-cta px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-2 text-sm md:text-base transition-all hover:scale-[1.02]">
                  <Mail size={18} /> {lang === 'en' ? 'Send Application' : 'Gửi đơn ứng tuyển'}
                </a>
                <a href="https://github.com/imtarget05" target="_blank" rel="noopener noreferrer" className="apply-cta px-6 py-3 border border-border text-foreground font-semibold rounded-lg flex items-center justify-center gap-2 text-sm md:text-base transition-all hover:bg-secondary">
                  <Github size={18} /> {lang === 'en' ? 'View GitHub' : 'Xem GitHub'}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .6, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="apply-cta p-6 flex items-start gap-3">
                <Mail size={20} className="text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{lang === 'en' ? 'Direct Email' : 'Email trực tiếp'}</p>
                  <p className="text-sm text-muted-foreground">{contact.email}</p>
                </div>
              </div>
              <div className="apply-cta p-6 flex items-start gap-3">
                <Github size={20} className="text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{lang === 'en' ? 'GitHub Repositories' : 'Kho GitHub'}</p>
                  <p className="text-sm text-muted-foreground">8 repository case studies</p>
                </div>
              </div>
              <div className="apply-cta p-6 flex items-start gap-3">
                <Linkedin size={20} className="text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{lang === 'en' ? 'LinkedIn Profile' : 'Hồ sơ LinkedIn'}</p>
                  <p className="text-sm text-muted-foreground">Connect & message</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}