import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions or just want to say hi, feel free to reach
          out!
        </p>

        <div className="flex flex-col items-center text-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>
            
            {/* Horizontal contact items */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-start">
              <div className="flex flex-col items-center space-y-2 w-full md:w-48">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:salturckcarlos@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-center text-sm break-all"
                >
                  salturckcarlos@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center space-y-2 w-full md:w-48">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+19132147901"
                  className="text-muted-foreground hover:text-primary transition-colors text-center"
                >
                  +1 913 214 7901
                </a>
              </div>
              
              <div className="flex flex-col items-center space-y-2 w-full md:w-48">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground text-center">
                  Kansas City, MO
                </span>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/sebastian-alturck-carlos/"
                  target="_blank"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a 
                  href="https://www.instagram.com/seb.rhoton/" 
                  target="_blank"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
                <a 
                  href="https://www.twitch.tv/unir6" 
                  target="_blank"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Twitch className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name..."
                ></input>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email..."
                ></input>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};
