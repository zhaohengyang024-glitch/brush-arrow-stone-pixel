import { Book } from "@/components/gift/book";
import { CustomizeDialog } from "@/components/gift/customize-dialog";
import { Envelope } from "@/components/gift/envelope";
import { CountdownGate, SecretGate, useLockState } from "@/components/gift/gates";
import { useGift } from "@/lib/gift-store";

export function GiftApp() {
  const opened = useGift((s) => s.opened);
  const { lockedUntil, needsSecret } = useLockState();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      {lockedUntil ? (
        <CountdownGate until={lockedUntil} />
      ) : needsSecret ? (
        <SecretGate />
      ) : opened ? (
        <Book />
      ) : (
        <Envelope />
      )}
      <CustomizeDialog />
    </div>
  );
}
