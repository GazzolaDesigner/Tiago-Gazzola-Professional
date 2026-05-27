import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

interface EmailCopyProps {
  variant?: "header" | "footer";
}

const EmailCopy = ({ variant = "header" }: EmailCopyProps) => {
  const [copied, setCopied] = useState(false);
  const email = "tgazzola.professional@outlook.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  if (variant === "footer") {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleCopy}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              {copied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="flex items-center gap-2">
              {copied ? "Copied!" : (
                <>
                  <Copy className="w-3 h-3" />
                  Click to copy: {email}
                </>
              )}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
            <span className="hidden lg:inline">{email}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="flex items-center gap-2">
            {copied ? "Copied!" : (
              <>
                <Copy className="w-3 h-3" />
                Click to copy
              </>
            )}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EmailCopy;
