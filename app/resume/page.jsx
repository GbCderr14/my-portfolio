"use client";
//about data
import {
  about,
  education,
  skills,
  experience,
  tabsHeader,
} from "./resumeConstants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto p-0">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {tabsHeader.map((tab,index) => (
              <TabsTrigger key={index} value={tab.key}>
                {tab.value}
              </TabsTrigger>
            ))}
          </TabsList>

          {/**Content */}
          <div className="min-h-[70vh] w-full p-0">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about[0].title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about[0].description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620] mx-auto xl:mx-0">
                  {about[0].info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="font-semibold text-white/60">
                        {item.fieldName}:
                      </span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education[0].title}</h3>
                <ScrollArea className="h-[400px] max-w-[600px] mx-auto xl:mx-0">
                  <ul className="text-white/60 list-none p-0 space-y-4">
                    {education[0].items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="font-semibold text-white">
                            {item.institution}
                          </p>
                        </div>
                        <span className=" text-white/60">{item.degree}</span>
                        <span className="text-accent">{item.duration}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience[0].title}</h3>
                <ScrollArea className=" h-[400px] max-w-[600px] mx-auto xl:mx-0">
                  <ul className="text-white/60 list-none p-0 space-y-4">
                    {experience[0].items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="font-semibold text-white">
                            {item.company}
                          </p>
                        </div>
                        <span className="text-xl max-w-[260px] text-center lg:text-left text-white">
                          {item.position}
                        </span>
                        <span className="text-accent">{item.duration}</span>
                        <p className="text-white/60">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
