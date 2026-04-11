import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "./card";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.02,
                    y: -6,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  whileFocus={{
                    scale: 1.02,
                    y: -6,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  className="w-full px-1.5"
                >
                  <Card className="rounded-3xl border border-border/50 shadow-xs transition-all duration-300 bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <CardContent className="p-6">
                      <blockquote className="m-0 p-0">
                        <p className="text-sm leading-relaxed text-muted-foreground m-0 transition-colors duration-300">
                          {text}
                        </p>
                      </blockquote>
                      <footer className="flex items-center gap-3 mt-6">
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={`Avatar of ${name}`}
                          className="h-10 w-10 rounded-full object-cover ring-2 ring-border/50 transition-all duration-300 ease-in-out"
                        />
                        <div className="flex flex-col">
                          <cite className="font-semibold not-italic tracking-tight leading-5 text-foreground transition-colors duration-300">
                            {name}
                          </cite>
                          <span className="text-sm leading-5 tracking-tight text-muted-foreground mt-0.5 transition-colors duration-300">
                            {role}
                          </span>
                        </div>
                      </footer>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export function TestimonialsV2() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto w-full max-w-6xl px-6 py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="w-full z-10"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16 text-center">
          <div className="flex justify-center">
            <div className="rounded-full border border-border/50 bg-muted/50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors">
              Testimonials
            </div>
          </div>

          <h2 id="testimonials-heading" className="mt-6 text-4xl font-extrabold tracking-tight text-foreground transition-colors md:text-5xl">
            Loved by Our Clients
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-sm transition-colors">
            Hear what businesses say about Eastrix Labs.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
}
