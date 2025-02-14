/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Balancer from "react-wrap-balancer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import { formattedText } from "@/utils/helpers";

// Move convertNewLines outside the component
const convertNewLines = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

interface ChatLineProps extends Partial<Message> {
  sources: string[];
}

export function ChatLine({
  role = "assistant",
  content,
  sources,
}: ChatLineProps) {
  if (!content) {
    return null;
  }

  return (
    <div className="w-full">
      <Card className="mb-2">
        <CardHeader>
          <CardTitle
            className={
              role != "assistant"
                ? "text-amber-500 dark:text-amber-200"
                : "text-blue-500 dark:text-blue-200"
            }
          >
            {role == "assistant" ? "AI" : "You"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <div className="whitespace-pre-wrap">
            <Balancer>{content}</Balancer>
          </div>
        </CardContent>
        <CardFooter>
          <CardDescription className="w-full">
            {sources && sources.length > 0 && (
              <Accordion type="single" collapsible className="w-full">
                {sources.map((source, index) => (
                  <AccordionItem value={`source-${index}`} key={index}>
                    <AccordionTrigger>{`Source ${index + 1}`}</AccordionTrigger>
                    <AccordionContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <ReactMarkdown>{formattedText(source)}</ReactMarkdown>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
