import { Metadata } from 'next';
import Link from 'next/link';
import { useLang } from '@/components/LanguageProvider';
import { certifications, education, contact, footer } from '@/content/data';
import { Mail, Github, Linkedin, Download, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Career Center — CV & Certifications',
  description: 'Download CV, view certifications, education and experience for Mai Nguyen Binh Tan.',
};

export const dynamic = 'force-dynamic';

export default function CareerCenter() {
  const { lang } = useLang();

  return (
    <section className="section" id="career">
      <div className="container-custom">
        <div className="mb-12">
          <p className="eyebrow">09 / {lang === 'en' ? 'CAREER CENTER' : 'TRUNG TÂM NGHỀ NGHIỆP'}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
            {lang === 'en' ? <>Career<br /><span className="gradient-text">Center.</span></> : <>Trung tâm<br /><span className="gradient-text">Nghề nghiệp.</span></>}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {lang === 'en'
              ? 'Download CV, verify certifications, and review education and experience. Open to backend, cloud infrastructure, and applied AI roles.'
              : 'Tải CV, xác minh chứng chỉ và xem lại học vấn cũng như kinh nghiệm. Đang mở các vị trí Backend, hạ tầng cloud và AI ứng dụng.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">{lang === 'en' ? 'Download CV' : 'Tải CV'}</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              {lang === 'en'
                ? 'Software & Cloud Engineer CV highlighting backend reliability, cloud infrastructure, and applied AI engineering evidence.'
                : 'CV Kỹ sư Phần mềm & Đám mây nhấn mạnh độ tin cậy backend, hạ tầng cloud và bằng chứng kỹ thuật AI ứng dụng.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/cv/mai-nguyen-binh-tan-backend-cv.txt" className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:scale-[1.02]">
                <Download size={18} /> {lang === 'en' ? 'Backend CV' : 'CV Backend'}
              </a>
              <a href="/cv/mai-nguyen-binh-tan-cloud-cv.txt" className="flex items-center gap-2 px-5 py-3 border border-border text-foreground font-semibold rounded-lg transition-all hover:bg-secondary">
                <Download size={18} /> {lang === 'en' ? 'Cloud CV' : 'CV Cloud'}
              </a>
              <a href="/cv/mai-nguyen-binh-tan-ai-cv.txt" className="flex items-center gap-2 px-5 py-3 border border-border text-foreground font-semibold rounded-lg transition-all hover:bg-secondary">
                <Download size={18} /> {lang === 'en' ? 'AI CV' : 'CV AI'}
              </a>
            </div>
            <p className="text-[11px] text-muted-foreground mt-4">
              {lang === 'en' ? 'CVs are tailored per role track. Each quantitative bullet points to an artifact from the cited source commit. Placeholder text files published; full PDFs coming before Q1/2027 applications.' : 'CV được điều chỉnh theo từng léquyền nghề. Mỗi bullet định lượng trỏ tới artefact từ commit nguồn được dẫn.'}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText size={24} className="text-accent" />
              <h2 className="text-xl font-bold text-foreground">{lang === 'en' ? 'Certifications' : 'Chứng chỉ'}</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-start gap-4 p-3 rounded border border-border/40 hover:border-border/60 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-accent">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cert.name.en}</h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer.en}</p>
                    <div className="flex gap-4 mt-1 text-xs">
                      {cert.date && <span className="text-muted-foreground">{cert.date.en}</span>}
                      {cert.score && <span className="font-medium text-foreground">{cert.score.en}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-lg font-bold text-foreground mb-6">{lang === 'en' ? 'Education' : 'Học vấn'}</h3>
            {education.map((edu) => (
              <div key={edu.id} className="mb-6">
                <h4 className="font-semibold text-foreground">{edu.school.en}</h4>
                <p className="text-sm text-muted-foreground">{edu.period.en} · {edu.location.en}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-lg font-bold text-foreground mb-6">{lang === 'en' ? 'Contact' : 'Liên hệ'}</h3>
            <div className="space-y-4">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 p-3 rounded border border-border hover:bg-secondary transition-colors">
                <Mail size={20} />
                <div>
                  <p className="font-semibold text-foreground">{lang === 'en' ? 'Email' : 'Email'}</p>
                  <p className="text-sm text-muted-foreground">{contact.email}</p>
                </div>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded border border-border hover:bg-secondary transition-colors">
                <Github size={20} />
                <div>
                  <p className="font-semibold text-foreground">{lang === 'en' ? 'GitHub' : 'GitHub'}</p>
                  <p className="text-sm text-muted-foreground">github.com/imtarget05</p>
                </div>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded border border-border hover:bg-secondary transition-colors">
                <Linkedin size={20} />
                <div>
                  <p className="font-semibold text-foreground">{lang === 'en' ? 'LinkedIn' : 'LinkedIn'}</p>
                  <p className="text-sm text-muted-foreground">Connect & message</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-[11px] text-muted-foreground">{footer.copyright.en}</p>
        </div>
      </div>
    </section>
  );
}
