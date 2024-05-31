import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Can I use it in a commercial project?",
    answer: "Yes. It's open-source and free to use.",
  },
  {
    id: "item-3",
    question: "Does it require any build tools?",
    answer: "No. It's written in plain JavaScript.",
  },
];

const Page = () => {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
