import { SiteHeader } from "@/components/site-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {BriefcaseIcon, ChartAreaIcon, CodeIcon, ServerIcon, TerminalIcon, WrenchIcon} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import {SiteFooter} from "@/components/site-footer";
import * as React from "react";

const experiences = [
  {
    id: "director",
    icon: <BriefcaseIcon className="h-6 w-6" />,
    position: "Director of Software Engineering",
    company: "Expedia Group",
    years: "2021 - Present",
    overview: "Led engineering operations and strategic initiatives across multiple product spaces, focusing on team growth, system reliability, and technical innovation.",
    achievements: [
      "Lead a team of 60+ engineers, including five senior engineering managers, focusing on career development, promotion planning, and managing performance",
      "Designed and implemented a flexible staffing model, enabling dynamic project scaling and aligning engineers with growth opportunities",
      "Spearheaded the unification of Expedia's shopping stacks, integrating smaller lines of business into the lodging stack to accelerate feature delivery",
      "Articulated impact metrics with product partners and presented technical proposals to senior leadership, including the CEO",
      "Enhanced operational excellence and system resiliency, achieving a significant reduction in downtime and preventing over $2M in potential lost revenue"
    ]
  },
  {
    id: "senior-manager",
    icon: <ServerIcon className="h-6 w-6" />,
    position: "Senior Engineering Manager",
    company: "Expedia Group",
    years: "2019 - 2021",
    overview: "Managed multiple engineering teams focusing on cloud infrastructure and DevOps. Reduced deployment time by 60% through implementation of CI/CD pipelines. Led the migration to cloud-native architecture.",
    achievements: []
  },
  {
    id: "senior-engineer",
    icon: <CodeIcon className="h-6 w-6" />,
    position: "Senior Software Development Engineer",
    company: "Expedia Group",
    years: "2017 - 2019",
    overview: "I led the development of Expedia’s new mobile hotel shopping tech stack—a React-based Progressive Web App built on microservices. I architected solutions, mentored teammates, and collaborated across teams to drive technology strategy and delivery.",
    achievements: [
        "Architected and designed full stack scalable solutions from Typescript to Kotlin to Java stack",
        "Acted as key leader throughout the migration process by deep-diving on customer pain points and presenting paths forward",
        "Served as a primary point of contact for devops of the project - set up deployments and monitoring",
        "Mentored and taught junior developers on best practices and design patterns",
        "Collaborated with multiple teams to ensure smooth integration and operations",
        "Influenced company-wide technology direction and contributed to strategic planning with leadership"
    ]
  },
  {
    id: "software-developer",
    icon: <TerminalIcon className="h-6 w-6" />,
    position: "Software Development Engineer",
    company: "Expedia Inc.",
    years: "2013 - 2017",
    overview:  "Progressed rapidly from intern to Software Development Engineer II, becoming a go-to team member for " +
        "both technical expertise and leadership. Served as a full-stack developer with deep knowledge of the entire " +
        "application stack, while also mentoring teammates and driving projects to completion.",
    achievements: [
        "Served as the team’s “Swiss army knife,” contributing across the full stack and supporting multiple layers of the application",
        "Designed and implemented frontend features using Grunt, Backbone, Marionette, and LESS",
        "Developed efficient, well-structured backend code in Java using Spring framework",
        "Contributed heavily to the domain layer using Domain-Driven Design (DDD) principles",
        "Maintained a deep understanding of the codebase, becoming the go-to person for technical questions and architecture discussions",
        "Acted as liaison between UI designers, project managers, and product owners to ensure high-quality, timely delivery",
        "Mentored newcomers, resolving day-to-day issues, coordinating with external teams, and drove projects to completion"
    ]
  },
  {
    id: "junior-developer",
    icon: <TerminalIcon className="h-6 w-6" />,
    position: "Junior Developer",
    company: "Fieldglass Inc.",
    years: "2011 - 2013",
    overview: "Contributed across the stack with a focus on UI stability, SQL-driven insights, and client-specific integrations.",
    achievements: [
        "Promoted from Intern to Junior Analyst and then to Junior Developer based on excellent performance",
        "Repair user interface crash reports ranging from database errors to user interface standards upkeep",
        "Designed and executed SQL scripts gathering statistics on feature usage. Presented findings and collaborated with senior management to find resolutions and establish appropriate procedures",
        "Spearheaded a client specific integration project and developed a method of assessment to ensure their continued satisfaction"
    ]
  },
]

// Add this skills data
const skills = [
  {
    category: "Development Tools",
    icon: <WrenchIcon className="h-6 w-6" />,
    items: [
      { name: "TypeScript/JavaScript", level: 80 },
      { name: "Java/Kotlin", level: 95 },
      { name: "C++", level: 65 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 65 },
      { name: "HTML/CSS", level: 90 },
    ]
  },
  {
    category: "DevOps",
    icon: <ChartAreaIcon className="h-6 w-6" />,
    items: [
      { name: "Splunk", level: 95 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 65 },
    ]
  }
]

export default function ExperiencePage() {
  return (
    <div className={`min-h-screen`}>
      <SiteHeader />
      <main className=" max-w-4xl mx-auto py-12">
        {/* Page Introduction */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-muted-foreground text-md max-w-4xl mx-auto">
            I’ve spent most of my career at Expedia, where the constant change, fast pace, and customer-facing
            challenges have kept things interesting — which is key for someone who gets bored easily. Over the
            years, I’ve had the chance to work across a wide range of projects, teams, and technologies, and that
            variety has helped me grow into a versatile and resilient engineering leader. Today, I run a 60+ person
            engineering team, where I focus on improving our architecture, streamlining how we work, and partnering closely
            with the business to deliver real impact.
          </p>
        </div>

        {/* Experience Section (your existing Accordion code) */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-6">Work History</h2>
          <Accordion type="single" collapsible className="w-full" defaultValue={experiences[0].id}>
            {experiences.map((exp) => (
              <AccordionItem key={exp.id} value={exp.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center w-full">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-primary">{exp.icon}</div>
                      <div className="text-left">
                        <h3 className="font-semibold">{exp.position}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.years}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-14 py-4 space-y-4">
                    {exp.overview && (
                        <p className="text-muted-foreground">{exp.overview}</p>
                    )}
                    {exp.achievements && (
                        <ul className="list-disc space-y-2 text-muted-foreground ml-4">
                          {exp.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Skills Section */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {skills.map((category) => (
                <Card key={category.category}>
                  <CardContent>
                    <h3 className="text-md font-medium mb-4">{category.category}</h3>
                    <div className="space-y-4">
                      {category.items.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}