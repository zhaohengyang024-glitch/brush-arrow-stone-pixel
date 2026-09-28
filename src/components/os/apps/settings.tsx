import { useState, type ChangeEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DEFAULT_CONFIG } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import type { ArchiveConfig } from "@/lib/archive/types";

export function SettingsApp() {
  const config = useArchive((s) => s.config);
  const patchConfig = useArchive((s) => s.patchConfig);
  const reseal = useArchive((s) => s.reseal);
  const resetProgress = useArchive((s) => s.resetProgress);
  const [draft, setDraft] = useState<ArchiveConfig>(config);

  function field<K extends keyof ArchiveConfig>(key: K) {
    return {
      value: draft[key],
      onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setDraft({ ...draft, [key]: e.target.value }),
    };
  }

  return (
    <div className="flex flex-col gap-4 pb-8">
      <p className="text-sm text-muted">
        示例日期可以改成你们的。保存后留在这台设备上。
      </p>
      <Field label="她的称呼">
        <Input {...field("herName")} maxLength={20} />
      </Field>
      <Field label="你的署名">
        <Input {...field("hisName")} maxLength={20} />
      </Field>
      <Field label="开始在一起的日子">
        <Input type="date" {...field("startISO")} />
      </Field>
      <Field label="她的生日（用于生日模式）">
        <Input type="date" {...field("birthdayISO")} />
      </Field>
      <Field label="生日文案">
        <Input {...field("birthdayLabel")} />
      </Field>
      <Field label="锁屏问题">
        <Input {...field("lockQuestion")} />
      </Field>
      <Field label="锁屏答案">
        <Input {...field("lockAnswer")} />
      </Field>
      <Field label="隐藏页口令（键盘输入或 /secret）">
        <Input {...field("keyword")} />
      </Field>
      <Field label="信">
        <Textarea className="min-h-44 font-display" {...field("letter")} />
        <p className="mt-1 text-xs text-subtle">
          可用 {"{{her}}"} 和 {"{{him}}"}。
        </p>
      </Field>
      <Field label="约定">
        <Textarea className="font-display" {...field("promise")} />
      </Field>
      <Field label="隐藏页的那一句话">
        <Textarea className="font-display" {...field("hiddenLetter")} />
      </Field>
      <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap">
        <Button type="button" onClick={() => patchConfig(draft)}>
          保存
        </Button>
        <Button type="button" variant="outline" onClick={() => reseal()}>
          重新锁屏
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setDraft(DEFAULT_CONFIG);
            patchConfig(DEFAULT_CONFIG);
            resetProgress();
          }}
        >
          恢复示例档案
        </Button>
      </div>
    </div>
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
