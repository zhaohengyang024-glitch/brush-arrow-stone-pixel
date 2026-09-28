import { useState, type ReactNode } from "react";
import { PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DEFAULT_CONFIG, type GiftConfig } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";

export function CustomizeDialog() {
  const config = useGift((s) => s.config);
  const patchConfig = useGift((s) => s.patchConfig);
  const reseal = useGift((s) => s.reseal);
  const resetProgress = useGift((s) => s.resetProgress);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<GiftConfig>(config);

  function onOpenChange(next: boolean) {
    if (next) setDraft(useGift.getState().config);
    setOpen(next);
  }

  function save() {
    patchConfig(draft);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="fixed bottom-4 left-4 z-40 text-subtle opacity-50 hover:opacity-100"
          aria-label="编辑这份礼物"
        >
          <PenLine className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>编辑这份礼物</DialogTitle>
          <DialogDescription>
            改成你们的名字、日期和真心话。保存后会留在这台设备上。
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Field label="她的称呼">
            <Input
              value={draft.herName}
              onChange={(e) => setDraft({ ...draft, herName: e.target.value })}
              maxLength={20}
            />
          </Field>
          <Field label="你的署名">
            <Input
              value={draft.hisName}
              onChange={(e) => setDraft({ ...draft, hisName: e.target.value })}
              maxLength={20}
            />
          </Field>
          <Field label="生日文案">
            <Input
              value={draft.birthdayLabel}
              onChange={(e) =>
                setDraft({ ...draft, birthdayLabel: e.target.value })
              }
              placeholder="今天 / 十月一日"
            />
          </Field>
          <Field label="解锁日期（可选，留空即刻可看）">
            <Input
              type="date"
              value={draft.birthdayISO}
              onChange={(e) =>
                setDraft({ ...draft, birthdayISO: e.target.value })
              }
            />
          </Field>
          <Field label="开场提问（可选）">
            <Input
              value={draft.secretQuestion}
              onChange={(e) =>
                setDraft({ ...draft, secretQuestion: e.target.value })
              }
              placeholder="只有她知道的问题"
            />
          </Field>
          <Field label="答案">
            <Input
              value={draft.secretAnswer}
              onChange={(e) =>
                setDraft({ ...draft, secretAnswer: e.target.value })
              }
            />
          </Field>
          <Field label="信">
            <Textarea
              value={draft.letter}
              onChange={(e) => setDraft({ ...draft, letter: e.target.value })}
              className="min-h-44 font-display leading-relaxed"
            />
            <p className="mt-1 text-xs text-subtle">
              可用 {"{{her}}"} 和 {"{{him}}"} 自动代入称呼。
            </p>
          </Field>
          <Field label="约定">
            <Textarea
              value={draft.promise}
              onChange={(e) => setDraft({ ...draft, promise: e.target.value })}
              className="font-display leading-relaxed"
            />
          </Field>
          <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap">
            <Button type="button" onClick={save} className="flex-1">
              保存
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reseal();
                setOpen(false);
              }}
            >
              重看拆封
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setDraft(DEFAULT_CONFIG);
                patchConfig(DEFAULT_CONFIG);
                resetProgress();
                setOpen(false);
              }}
            >
              恢复默认
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
