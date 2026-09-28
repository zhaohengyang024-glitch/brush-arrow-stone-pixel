import { COUPONS } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CouponsApp() {
  const claimed = useArchive((s) => s.claimedCoupons);
  const used = useArchive((s) => s.usedCoupons);
  const claim = useArchive((s) => s.claimCoupon);
  const redeem = useArchive((s) => s.useCoupon);

  return (
    <div className="pb-6">
      <p className="text-sm text-muted">
        可以兑现的。领走，再用。用掉的会留下痕迹。
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {COUPONS.map((coupon) => {
          const isUsed = Boolean(used[coupon.id]);
          const isClaimed = Boolean(claimed[coupon.id]);
          return (
            <li
              key={coupon.id}
              className={cn(
                "flex min-h-48 flex-col rounded-xl border border-border p-4",
                isUsed ? "bg-paper text-ink" : "bg-surface text-fg",
              )}
            >
              <p className="font-display text-xl">{coupon.title}</p>
              <p
                className={cn(
                  "mt-2 flex-1 text-sm leading-relaxed",
                  isUsed ? "text-ink-muted" : "text-muted",
                )}
              >
                {coupon.body}
              </p>
              <div className="mt-4 flex gap-2">
                {!isClaimed ? (
                  <Button type="button" size="sm" onClick={() => claim(coupon.id)}>
                    领取
                  </Button>
                ) : isUsed ? (
                  <p className="text-sm text-seal">已核销</p>
                ) : (
                  <Button
                    type="button"
                    size="sm"
                    variant={isUsed ? "ghost" : "paper"}
                    onClick={() => redeem(coupon.id)}
                  >
                    使用
                  </Button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
