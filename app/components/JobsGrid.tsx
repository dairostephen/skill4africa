import { Laptop, Banknote, Megaphone, Kanban, Headset, Users, Server, Palette, LineChart, PenTool, Cloud, HeartPulse, Truck, Briefcase, Phone, BadgeInfo, Bug, CalendarCheck } from 'lucide-react';

const jobs = [
    { title: "Senior Frontend Developer", company: "Tech Solutions Ltd", location: "Lagos", salary: "NGN 400k - 600k", type: "Full Time", typeClass: "full-time", icon: <Laptop size={24} /> },
    { title: "Accountant", company: "Finance Corp", location: "Abuja", salary: "Confidential", type: "Full Time", typeClass: "full-time", icon: <Banknote size={24} /> },
    { title: "Digital Marketer", company: "Creative Agency", location: "Remote", salary: "NGN 150k - 250k", type: "Contract", typeClass: "contract", icon: <Megaphone size={24} /> },
    { title: "Product Manager", company: "Innovate Tech", location: "Lagos", salary: "NGN 500k - 800k", type: "Full Time", typeClass: "full-time", icon: <Kanban size={24} /> },
    { title: "Customer Support Rep", company: "Call Center Hub", location: "Ibadan", salary: "NGN 80k - 120k", type: "Full Time", typeClass: "full-time", icon: <Headset size={24} /> },
    { title: "HR Manager", company: "People First", location: "Abuja", salary: "NGN 300k - 450k", type: "Full Time", typeClass: "full-time", icon: <Users size={24} /> },
];

export default function JobsGrid() {
    return (
        <section className="py-40 bg-white">
            <div className="max-container">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 tracking-tighter">
                            Latest <span className="text-brand-accent italic">jobs</span>.
                        </h2>
                        <p className="text-brand-gray font-medium">Connecting talent with opportunity across Africa.</p>
                    </div>
                    <button className="text-brand-primary font-black uppercase text-xs tracking-widest flex items-center gap-2 group">
                        View All Jobs <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job, idx) => (
                        <div key={idx} className="bg-white border border-brand-primary/5 rounded-[2rem] p-8 hover:shadow-premium hover:-translate-y-2 transition-all duration-500 group">
                            <div className="w-12 h-12 bg-brand-neutral rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-accent transition-colors">
                                {job.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-1">{job.title}</h3>
                            <p className="text-brand-gray text-sm font-medium mb-6 uppercase tracking-wider">{job.company}</p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-2 text-xs font-bold text-brand-gray/50">
                                    <MapPin size={14} /> {job.location}
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-brand-gray/50">
                                    <Banknote size={14} /> {job.salary}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${job.type === 'Contract' ? 'bg-orange-100 text-orange-600' : 'bg-brand-primary/5 text-brand-primary'}`}>
                                    {job.type}
                                </span>
                                <button className="text-brand-primary/20 hover:text-brand-accent transition-colors">
                                    <Bookmark size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { MapPin, Banknote as BanknoteIcon, Bookmark, ArrowRight } from 'lucide-react';
