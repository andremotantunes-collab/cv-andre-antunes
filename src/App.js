import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Video,
  Trophy,
  UserCheck,
  CheckCircle2,
  Camera,
  Activity,
  Gamepad2,
  Image as ImageIcon,
  Monitor,
  Laptop,
  Box,
  ExternalLink,
  PieChart,
} from "lucide-react";

export default function App() {
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef(null);
  const profilePhoto = "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.1 }
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const [data] = useState({
    personal: {
      name: "André Mota Antunes",
      title: "Engenheiro Multimédia",
      summary:
        "Sou modesto, honesto e bastante interessado em aprender. Atualmente procuro um estágio curricular com a perspetiva de evoluir, ganhar experiência e domínio prático na área, com o objetivo de me integrar e contribuir para a equipa futuramente. O meu foco profissional incide na gravação e edição de vídeo e fotografia, possuindo imenso domínio em Motion Graphics e Design. Conto com um percurso de 5 anos de estudo e trabalho na área de produção e conteúdos Multimédia.",
      email: "andremotantunes@gmail.com",
      phone: "961 058 995",
      location: "Lisboa, Portugal",
      portfolio: "behance.net/andreantunesss",
    },
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermédio" },
      { name: "Italiano", level: "Básico" },
      { name: "Espanhol", level: "Básico" },
    ],
    gear: [
      { name: "Canon R6 + Lente 24-105mm", icon: Camera },
      { name: "Workstation Torre (2 Monitores)", icon: Monitor },
      { name: "Portátil Pessoal", icon: Laptop },
    ],
    softSkills: [
      "Trabalho em Equipa",
      "Organização e Planeamento",
      "Proatividade",
      "Comunicação Clara",
      "Atenção ao Detalhe",
      "Resolução de Problemas",
    ],
    skills: [
      { name: "Adobe After Effects", level: 95 },
      { name: "Adobe Premiere Pro", level: 90 },
      { name: "Figma (UI/UX)", level: 85 },
      { name: "Adobe Photoshop", level: 85 },
      { name: "Adobe Illustrator", level: 80 },
      { name: "Adobe Audition (Áudio)", level: 75 },
      { name: "3ds MAX", level: 70 },
      { name: "Adobe InDesign", level: 60 },
      { name: "HTML5 & CSS3", level: 50 },
    ],
    interestsDistribution: [
      {
        name: "Videografia & Edição",
        value: 50,
        color: "text-blue-500",
        stroke: "#3b82f6",
      },
      {
        name: "Motion Graphics",
        value: 30,
        color: "text-purple-500",
        stroke: "#a855f7",
      },
      {
        name: "Design Gráfico & UI",
        value: 20,
        color: "text-emerald-500",
        stroke: "#10b981",
      },
    ],
    hobbies: [
      "Basquetebol Federado (12 anos, vários campeonatos e Seleção)",
      "Videojogos & Gaming",
      "Motion Graphics (Criação)",
      "Fotografia Digital",
    ],
    experience: [
      {
        role: "Técnico de Imagem e Atendimento Premium",
        company: "Fotosport",
        period: "2024 - Presente",
        description:
          "Captação e edição profissional de fotografia, com foco em impressão de papel fotográfico para molduras e acabamentos. Utilização intensiva de Adobe Photoshop para retoque e composição. Responsável por vendas personalizadas (segmento premium) e gestão de loja. Trabalho colaborativo em equipa reduzida, exigindo elevada coordenação e polivalência.",
      },
      {
        role: "Criação de Conteúdo Digital",
        company: "Várias Empresas (Starcase, Futwear)",
        period: "Maio 2024 - Presente",
        description:
          "Produção de conteúdos digitais (TikToks/Reels) para empresas de e-commerce. Utilização de After Effects, Illustrator e Premiere Pro para edição dinâmica e legendagem criativa.",
      },
      {
        role: "Motion Graphics & UI Designer (Estágio)",
        company: "Xperienz",
        period: "Mar 2024 - Ago 2024",
        description:
          "Estágio curricular via ISTEC. Funções de Motion Graphics e UI Design, complementadas com formação em UX Design para aprofundar competências técnicas de interface.",
      },
      {
        role: "Editor de Vídeo (Micro-Projeto)",
        company: "FMH / Portal de Educação Física",
        period: "Mar 2024 - Abr 2024",
        description:
          "Desenvolvimento de vídeos promocionais para uma nova plataforma de professores. Execução de recorte de fundos (rotoscopia) e animações utilizando a Adobe Suite.",
      },
      {
        role: "Técnico de Multimédia (Erasmus+)",
        company: "Cooperativa II Marginė (Turim, Itália)",
        period: "Estágio Internacional",
        description:
          "Captação de vídeo, edição, Motion Graphics e design gráfico para redes sociais no departamento de comunicação da empresa.",
      },
    ],
    education: [
      {
        degree: "Licenciatura em Engenharia Multimédia",
        school: "ISTEC - Instituto Superior de Tecnologias Avançadas de Lisboa",
        year: "2024 - Presente",
      },
      {
        degree: "CTeSP Desenv. Produtos Multimédia",
        school: "ISTEC - Instituto Superior de Tecnologias Avançadas de Lisboa",
        year: "2022 - 2024",
      },
      {
        degree: "Técnico de Multimédia - Nível IV",
        school: "Escola Profissional Val do Rio (Oeiras)",
        year: "2019 - 2022",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-slate-200 p-4 md:p-8 font-sans flex items-center justify-center">
      <div className="w-full max-w-[900px] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row print:shadow-none print:w-full">
        {/* COLUNA ESQUERDA */}
        <div className="bg-slate-900 text-white md:w-[35%] p-8 relative flex flex-col gap-8">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 opacity-10 rounded-full blur-3xl -translate-y-10 translate-x-10 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 rounded-full border-4 border-slate-700 bg-slate-800 flex items-center justify-center shadow-lg overflow-hidden relative group">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="André Antunes"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white tracking-widest">
                      AM
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2 mb-2">
                Contactos
              </h3>
              <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                <Mail size={14} className="shrink-0 text-blue-400" />
                <span className="break-all text-xs">{data.personal.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                <Phone size={14} className="shrink-0 text-blue-400" />
                <span className="text-xs">{data.personal.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                <MapPin size={14} className="shrink-0 text-blue-400" />
                <span className="text-xs">{data.personal.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <Globe
                  size={14}
                  className="shrink-0 text-blue-400 group-hover:text-blue-300"
                />
                <a
                  href={`https://${data.personal.portfolio}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1 decoration-blue-400/50 underline-offset-2 hover:text-blue-300 hover:underline transition-all truncate font-medium"
                >
                  Behance Portfolio{" "}
                  <ExternalLink size={10} className="inline opacity-70" />
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2 mb-3">
                Soft Skills
              </h3>
              <div className="space-y-2">
                {data.softSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 size={12} className="text-blue-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex-grow" ref={skillsRef}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2 mb-3">
                Tech Skills
              </h3>
              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs mb-1 font-medium text-slate-200">
                      <span>{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r from-blue-500 to-blue-400 h-1.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: animateSkills ? `${skill.level}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2 mb-2">
                Línguas
              </h3>
              <div className="space-y-1.5 text-xs text-slate-300">
                {data.languages.map((lang, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-slate-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="md:w-[65%] p-8 md:p-10 bg-white text-slate-800 relative flex flex-col">
          <div className="mb-6 border-b-2 border-slate-100 pb-4">
            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none mb-2">
              André <span className="text-blue-600">Antunes</span>
            </h1>
            <p className="text-lg font-medium text-slate-500 flex items-center gap-2">
              <Video size={20} className="text-blue-500" />
              {data.personal.title}
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2">
              <UserCheck size={16} /> Perfil Profissional
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 text-justify">
              {data.personal.summary}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-2">
              <Briefcase size={16} /> Experiência Profissional
            </h2>
            <div className="space-y-5 border-l-2 border-slate-100 pl-4 ml-1">
              {data.experience.map((job, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white group-hover:scale-125 transition-transform"></div>
                  <h3 className="font-bold text-slate-800 text-sm">
                    {job.role}
                  </h3>
                  <div className="text-xs font-semibold text-blue-500 mb-1">
                    {job.company} | {job.period}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-2">
              <GraduationCap size={16} /> Percurso Académico
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {data.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-2.5 rounded border border-slate-100 flex justify-between items-center hover:shadow-sm transition-shadow"
                >
                  <div>
                    <h3 className="font-bold text-xs text-slate-800">
                      {edu.degree}
                    </h3>
                    <p className="text-[10px] text-slate-500">{edu.school}</p>
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded whitespace-nowrap ml-2">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-2">
              <PieChart size={16} /> Áreas de Foco Profissional
            </h2>
            <div className="flex flex-row items-center gap-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="relative w-24 h-24 shrink-0">
                <svg
                  viewBox="0 0 100 100"
                  className="transform -rotate-90 w-full h-full"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e2e8f0"
                    strokeWidth="12"
                    fill="none"
                  />
                  {data.interestsDistribution.map((item, index) => {
                    const circumference = 251.2;
                    const strokeDasharray = `${
                      (item.value / 100) * circumference
                    } ${circumference}`;
                    const previousTotal = data.interestsDistribution
                      .slice(0, index)
                      .reduce((acc, curr) => acc + curr.value, 0);
                    const strokeDashoffset = -(
                      (previousTotal / 100) *
                      circumference
                    );
                    return (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={item.stroke}
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={
                          animateSkills ? strokeDasharray : `0 ${circumference}`
                        }
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="butt"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-600">
                  <span className="text-[9px] font-bold uppercase">Foco</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 w-full">
                {data.interestsDistribution.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${item.color.replace(
                          "text-",
                          "bg-"
                        )}`}
                      ></div>
                      <span className="font-medium text-slate-700 text-[11px]">
                        {item.name}
                      </span>
                    </div>
                    <span className={`font-bold ${item.color} text-[11px]`}>
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-2">
              <Trophy size={16} /> Interesses & Conquistas
            </h2>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-orange-50 border border-orange-100 p-2.5 rounded-lg flex items-center gap-3">
                <div className="bg-orange-100 p-1.5 rounded-full text-orange-600 shrink-0">
                  <Trophy size={16} />
                </div>
                <div>
                  <span className="block font-bold text-orange-800 text-xs">
                    Basquetebol de Competição
                  </span>
                  <span className="text-[10px] text-orange-700 block leading-tight">
                    Jogador federado durante 12 anos. Vencedor de vários
                    campeonatos e representação da seleção.
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-medium border border-slate-200 flex items-center gap-1">
                  <Gamepad2 size={12} />
                  {data.hobbies[1]}
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-medium border border-slate-200 flex items-center gap-1">
                  <Activity size={12} />
                  {data.hobbies[2]}
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-medium border border-slate-200 flex items-center gap-1">
                  <ImageIcon size={12} />
                  {data.hobbies[3]}
                </span>
              </div>
            </div>
          </section>

          <section className="mt-auto pt-6 border-t border-slate-100">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1">
              <Box size={10} /> Equipamento & Recursos Próprios
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {data.gear.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-xs text-slate-500"
                >
                  <item.icon size={12} className="text-slate-400" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 bg-slate-800 text-white px-5 py-2 rounded-full shadow-lg text-xs z-50 opacity-80 hover:opacity-100 transition-opacity print:hidden">
        Visualização Web • Faça print para salvar
      </div>
    </div>
  );
}
