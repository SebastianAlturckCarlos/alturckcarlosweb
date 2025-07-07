import { Briefcase, Code, User } from "lucide-react";

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              Computer Science student at Kansas State University with a dual
              major in Cybersecurity and a minor in Mathematics. I enjoy
              building intuitive, full-stack applications that solve real-world
              problems—from improving internal tools at Shamrock Trading
              Corporation to launching my own job search platform. I thrive in
              collaborative, agile environments and have hands-on experience
              with technologies like React, Node.js, Redux, and AWS. Whether
              debugging code, designing APIs, or leading esports teams, I bring
              energy, adaptability, and a drive to learn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/CV.pdf"
                download="Carlos_Alturck_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Full Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable web and mobile apps with React, Node.js,
                    and TypeScript
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Mentorship & Teaching
                  </h4>
                  <p className="text-muted-foreground">
                    Supporting students in Java programming as a university TA
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Professional Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Interned at Shamrock Trading, developing full-stack features
                    with AWS integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
