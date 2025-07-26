// src/components/site-footer.tsx
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Copy } from "lucide-react"
import { useState } from "react"

export function SiteFooter() {
  const [showCopied, setShowCopied] = useState(false)
  const email = "ngrieble@gmail.com"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
      <footer className="border-t">
        <div className="flex flex-col items-center gap-2 p-4 md:flex-row md:justify-between md:gap-0">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by Nicole Grieble
          </p>
          <Tooltip open={showCopied}>
            <TooltipTrigger asChild>
              <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyToClipboard}
                  className="gap-2"
              >
                <Copy className="h-4 w-4" />
                {email}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copied to clipboard!</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </footer>
  )
}