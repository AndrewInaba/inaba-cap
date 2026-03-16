import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Brain,
  Stethoscope,
  Activity,
  Phone,
  Mail,
  TriangleAlert,
  BadgeCheck,
  ClipboardList,
  HeartHandshake,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const signs = [
  "Seems confused",
  "Forgets an instruction or is unsure of the game, position, score, or opponent",
  "Moves clumsily",
  "Answers questions slowly or repeats questions",
  "Cannot remember events before or after the impact",
  "Loses consciousness, even for a moment",
  "Behavior or personality changes",
];

const symptoms = [
  "Headaches",
  "Nausea or vomiting",
  "Dizziness or balance problems",
  "Bothered by light or noise",
  "Feeling foggy or groggy",
  "Trouble concentrating",
  "Problems with short-term or long-term memory",
];

const whatToDo = [
  "Remove the concussed athlete from play",
  "Keep an athlete with a possible concussion out of play on the same day of the injury until cleared by a healthcare provider",
  "Inform the athlete’s parent(s) about the possible concussion",
  "Ask for written instructions from the athlete’s healthcare provider on return to play",
  "Offer support during recovery",
];

const returnToPlay = [
  "Clearance by a healthcare provider with written instructions",
  "Return to non-sports activities",
  "Light aerobic exercise",
  "Sport-specific exercise",
  "Non-contact training drills",
  "Full-contact practice",
  "Return to regular sports activities",
];

function SectionTitle({ icon: Icon, eyebrow, title, subtitle }) {
  return (
    <div className="space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
        <Icon className="h-4 w-4" />
        {eyebrow}
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{title}</h2>
        {subtitle ? <p className="max-w-3xl text-base leading-7 text-slate-600 md:text-lg">{subtitle}</p> : null}
      </div>
    </div>
  );
}

function ChecklistCard({ title, icon: Icon, items }) {
  return (
    <Card className="rounded-3xl border-slate-200 bg-white/90 shadow-lg">
      <CardContent className="p-6 md:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        </div>
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-600" />
              <p className="text-sm leading-6 text-slate-700 md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function InabasCAPWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-slate-50 to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(191,219,254,0.45),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-800 shadow-sm">
              <ShieldAlert className="h-4 w-4" />
              INABA’S CAP · Concussion Awareness Program
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Building safer sports environments through concussion awareness.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                INABA’S CAP helps youth athletes, families, and coaches recognize concussion signs and symptoms,
                respond quickly, and support a safe return to school, play, and daily life.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl px-6 py-6 text-base font-semibold">Learn the signs</Button>
              <Button variant="outline" className="rounded-2xl px-6 py-6 text-base font-semibold">
                Return-to-play steps
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Recognize", "Spot warning signs early"],
                ["Respond", "Remove from play and seek care"],
                ["Recover", "Follow a safe return-to-play plan"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-md backdrop-blur">
                  <p className="text-lg font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Card className="w-full rounded-[2rem] border-slate-200 bg-white/90 shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-3xl bg-sky-100 p-4 text-sky-700">
                    <Brain className="h-10 w-10" />
                  </div>
                  <div>
                    <p className="text-2xl font-black tracking-tight">Know the basics</p>
                    <p className="text-sm text-slate-600">Quick facts for athletes, parents, and coaches</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "A concussion is a mild traumatic brain injury caused by a hit to the head or body that makes the brain move rapidly inside the skull.",
                    "A player with a possible concussion should not return to play the same day unless cleared by a healthcare provider.",
                    "Recovery should be gradual and guided by written medical instructions.",
                  ].map((fact, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                      {fact}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-20 px-6 py-16 md:px-10">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-[2rem] border-slate-200 bg-white shadow-lg">
            <CardContent className="p-8 md:p-10">
              <SectionTitle
                icon={HeartHandshake}
                eyebrow="Mission"
                title="Mission statement"
                subtitle="Creating a culture that prioritizes concussion safety and the well-being of every young athlete."
              />
              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                INABA’S CAP has the mission to improve concussion awareness among youth athletes and parents in order
                to create a safer sports environment and ensure that athletes recover safely and completely. By sharing
                knowledge and leading community outreach efforts, the program promotes informed decisions and better
                support during recovery.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-slate-200 bg-sky-50 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <SectionTitle
                icon={Brain}
                eyebrow="Education"
                title="What is a concussion?"
                subtitle="Understanding the injury is the first step toward preventing long-term harm."
              />
              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                A concussion is a mild traumatic brain injury (mTBI) mainly caused by a hit to any part of the body
                that leads to the brain moving around the skull violently. This rapid back-and-forth movement can
                affect how the brain works and may cause temporary brain cell dysfunction.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <SectionTitle
            icon={ClipboardList}
            eyebrow="Recognition"
            title="Signs and symptoms to watch for"
            subtitle="Signs are what others may notice. Symptoms are what the athlete may feel or report."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <ChecklistCard title="Signs" icon={TriangleAlert} items={signs} />
            <ChecklistCard title="Symptoms" icon={Activity} items={symptoms} />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <ChecklistCard title="What to do" icon={Stethoscope} items={whatToDo} />
          <ChecklistCard title="Return to play protocol" icon={BadgeCheck} items={returnToPlay} />
        </section>

        <section>
          <Card className="rounded-[2rem] border-slate-200 bg-slate-900 text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-sky-100">
                  <Phone className="h-4 w-4" />
                  Contact and outreach
                </div>
                <h3 className="text-3xl font-black tracking-tight md:text-4xl">Need more information?</h3>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  INABA’S CAP supports concussion awareness through education, prevention, and community outreach.
                  Use the contact details here to connect about the program or request more information.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Program</p>
                  <p className="mt-2 text-xl font-bold">INABA’S CAP</p>
                  <p className="text-slate-300">Concussion Awareness Program</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Contact person</p>
                  <p className="mt-2 text-xl font-bold">Andrew Inaba</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-slate-200">
                    <Mail className="h-5 w-5" />
                    <span className="break-all text-base font-medium">inabaandrew@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
