import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function DemoContactForm() {
  return (
    <form
      className="reveal-card grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-2"
      method="post"
      action="mailto:hello@eastrixlabs.com"
      encType="text/plain"
    >
      <div className="grid gap-2">
        <label htmlFor="full-name" className="text-sm font-semibold text-slate-700">
          Full Name
        </label>
        <Input
          id="full-name"
          name="full_name"
          autoComplete="name"
          className="h-11 w-full rounded-xl border-slate-300 bg-white text-sm shadow-none hover:border-slate-400 focus-visible:border-slate-500"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="work-email" className="text-sm font-semibold text-slate-700">
          Work Email
        </label>
        <Input
          id="work-email"
          name="work_email"
          type="email"
          autoComplete="email"
          className="h-11 w-full rounded-xl border-slate-300 bg-white text-sm shadow-none hover:border-slate-400 focus-visible:border-slate-500"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="company-name" className="text-sm font-semibold text-slate-700">
          Company
        </label>
        <Input
          id="company-name"
          name="company_name"
          autoComplete="organization"
          className="h-11 w-full rounded-xl border-slate-300 bg-white text-sm shadow-none hover:border-slate-400 focus-visible:border-slate-500"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="website-link" className="text-sm font-semibold text-slate-700">
          Website (optional)
        </label>
        <Input
          id="website-link"
          name="website"
          type="url"
          placeholder="https://yourcompany.com"
          className="h-11 w-full rounded-xl border-slate-300 bg-white text-sm shadow-none hover:border-slate-400 focus-visible:border-slate-500"
        />
      </div>

      <div className="grid gap-2 md:col-span-2">
        <label htmlFor="project-brief" className="text-sm font-semibold text-slate-700">
          Project Brief
        </label>
        <Textarea
          id="project-brief"
          name="project_brief"
          rows={4}
          className="min-h-32 w-full rounded-xl border-slate-300 bg-white text-sm shadow-none hover:border-slate-400 focus-visible:border-slate-500"
          required
        />
      </div>

      <Button
        type="submit"
        className="md:col-span-2 min-h-11 rounded-full border-0 bg-teal-700 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600"
      >
        <span>Book A Demo</span>
        <ArrowRight />
      </Button>
    </form>
  )
}

export default DemoContactForm
