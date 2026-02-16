import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const timelineOptions = [
  { value: "0-30", label: "0 to 30 days" },
  { value: "31-60", label: "31 to 60 days" },
  { value: "61-90", label: "61 to 90 days" },
  { value: "90+", label: "More than 90 days" },
]

function DemoContactForm() {
  const [timeline, setTimeline] = useState("")
  const [timelineError, setTimelineError] = useState(false)

  return (
    <form
      className="reveal-card grid gap-3 rounded-2xl border border-[#202d3830] bg-[#fffef8] p-4 md:grid-cols-2"
      method="post"
      action="mailto:hello@eastrixlabs.com"
      encType="text/plain"
      onSubmit={(event) => {
        if (!timeline) {
          event.preventDefault()
          setTimelineError(true)
          return
        }

        setTimelineError(false)
      }}
    >
      <div className="grid gap-1.5">
        <label htmlFor="full-name" className="text-[0.81rem] font-semibold text-[#264152]">
          Full Name
        </label>
        <Input
          id="full-name"
          name="full_name"
          autoComplete="name"
          className="h-11 w-full rounded-xl border-[#1a232b3a] bg-white px-4 text-base shadow-none hover:border-[#1a232b61] focus-visible:border-[#1a232b75] md:text-sm"
          required
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="work-email" className="text-[0.81rem] font-semibold text-[#264152]">
          Work Email
        </label>
        <Input
          id="work-email"
          name="work_email"
          type="email"
          autoComplete="email"
          className="h-11 w-full rounded-xl border-[#1a232b3a] bg-white px-4 text-base shadow-none hover:border-[#1a232b61] focus-visible:border-[#1a232b75] md:text-sm"
          required
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="company-name" className="text-[0.81rem] font-semibold text-[#264152]">
          Company
        </label>
        <Input
          id="company-name"
          name="company_name"
          autoComplete="organization"
          className="h-11 w-full rounded-xl border-[#1a232b3a] bg-white px-4 text-base shadow-none hover:border-[#1a232b61] focus-visible:border-[#1a232b75] md:text-sm"
          required
        />
      </div>

      <div className="grid gap-1.5">
        <label id="timeline-label" htmlFor="timeline-trigger" className="text-[0.81rem] font-semibold text-[#264152]">
          Ideal Timeline
        </label>
        <input type="hidden" name="timeline" value={timeline} />
        <Select
          value={timeline}
          onValueChange={(value) => {
            setTimeline(value)
            if (value) setTimelineError(false)
          }}
        >
          <SelectTrigger
            id="timeline-trigger"
            className="h-11 w-full rounded-xl border-[#1a232b3a] bg-white px-4 text-base shadow-none hover:border-[#1a232b61] focus-visible:border-[#1a232b75] md:text-sm"
            aria-labelledby="timeline-label timeline-trigger"
            aria-invalid={timelineError}
            aria-describedby={timelineError ? "timeline-error" : undefined}
          >
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-[#1a232b3a] bg-white shadow-none">
            {timelineOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {timelineError && (
          <p id="timeline-error" className="m-0 text-xs text-[#9b2d17]" role="alert">
            Please select an ideal timeline.
          </p>
        )}
      </div>

      <div className="grid gap-1.5 md:col-span-2">
        <label htmlFor="project-brief" className="text-[0.81rem] font-semibold text-[#264152]">
          Project Brief
        </label>
        <Textarea
          id="project-brief"
          name="project_brief"
          rows={4}
          className="min-h-32 w-full rounded-xl border-[#1a232b3a] bg-white px-4 py-3 text-base shadow-none hover:border-[#1a232b61] focus-visible:border-[#1a232b75] md:text-sm"
          required
        />
      </div>

      <Button
        type="submit"
        className="md:col-span-2 min-h-11 rounded-full border-0 bg-[linear-gradient(120deg,#00726f_0%,#135a58_100%)] text-white hover:-translate-y-0.5 hover:bg-[linear-gradient(120deg,#0a7a76_0%,#135a58_100%)]"
      >
        <span>Book A Demo</span>
        <ArrowRight />
      </Button>
    </form>
  )
}

export default DemoContactForm
